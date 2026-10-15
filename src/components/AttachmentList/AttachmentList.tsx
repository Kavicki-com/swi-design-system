import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { Text } from '../Text';
import { useTheme } from '../../theme';
import {
  ACTION_ICON,
  DEFAULT_ACTION_LABELS,
  actionAccessibilityLabel,
  actionBackground,
  thumbIcon,
  visibleActions,
} from './AttachmentList.actions';
import { Actions, List, NameSlot, Row, Thumb } from './AttachmentList.styles';
import type {
  AttachmentAction,
  AttachmentItem,
  AttachmentListProps,
} from './AttachmentList.types';

/**
 * Lista de anexos: uma linha por arquivo, no molde do exame compacto do Figma
 * (159:15646). Miniatura de 56 (imagem) ou ícone do tipo (clipe para
 * arquivo, câmera para vídeo, nota para áudio), nome em uma
 * linha e botões só de ícone, contidos e pequenos como o baixar do exame:
 * visualizar, baixar e excluir. Abrir, baixar e confirmar a exclusão são do
 * host; a lista só avisa qual item e qual ação.
 */
export function AttachmentList({
  items,
  onView,
  onDownload,
  onRemove,
  busyIds,
  actionLabels,
  emptyLabel,
  accessibilityLabel = 'Anexos',
  testID,
}: AttachmentListProps) {
  const theme = useTheme();
  const labels = { ...DEFAULT_ACTION_LABELS, ...actionLabels };
  const handlers: Record<AttachmentAction, ((item: AttachmentItem) => void) | undefined> = {
    view: onView,
    download: onDownload,
    remove: onRemove,
  };

  if (items.length === 0) {
    return emptyLabel ? (
      <Text variant="body.m" color={theme.content.medium} testID={testID}>
        {emptyLabel}
      </Text>
    ) : null;
  }

  return (
    <List accessibilityRole="list" accessibilityLabel={accessibilityLabel} testID={testID}>
      {items.map((item) => {
        const busy = busyIds?.includes(item.id) ?? false;
        return (
          <Row key={item.id} testID={testID ? `${testID}-item-${item.id}` : undefined}>
            <Thumb>
              {item.kind === 'image' && item.thumbnailUri ? (
                <Image source={item.thumbnailUri} width={56} height={56} resizeMode="cover" />
              ) : (
                <Icon name={thumbIcon(item.kind)} size={24} color={theme.content.dark} />
              )}
            </Thumb>
            <NameSlot>
              <Text variant="body.s" color={theme.content.secondary} numberOfLines={1}>
                {item.name}
              </Text>
            </NameSlot>
            <Actions>
              {visibleActions(item, handlers).map((action) => (
                <Button
                  key={action}
                  size="small"
                  variant="contained"
                  iconLeft={<Icon name={ACTION_ICON[action]} size={24} color={theme.content.light} />}
                  backgroundColor={actionBackground(action, theme)}
                  disabled={busy}
                  onPress={() => handlers[action]?.(item)}
                  accessibilityLabel={actionAccessibilityLabel(action, item.name, labels)}
                  testID={testID ? `${testID}-${action}-${item.id}` : undefined}
                />
              ))}
            </Actions>
          </Row>
        );
      })}
    </List>
  );
}
