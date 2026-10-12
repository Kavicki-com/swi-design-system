import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Title } from '../Title';
import { useTheme } from '../../theme';
import { dismissAction, modalDefaults, modalTone } from './Modal.logic';
import { ActionSlot, Actions, Content } from './Modal.styles';
import { ModalOverlay } from './ModalOverlay';
import type { ModalProps } from './Modal.types';

/**
 * Modal da biblioteca do Figma (461:10263): ícone, título e descrição
 * centralizados e os botões embaixo. `error` confirma uma ação irreversível
 * (Sim pinta de surface.error, Não é o botão fantasma); `success` avisa que
 * algo terminou (Continuar em surface.success, largura toda).
 *
 * Os rótulos dos botões são Montserrat Bold 14, como no Figma; o "Não" é
 * branco (content.dark), não o verde-claro padrão do Button fantasma.
 */
export function Modal({
  visible,
  validation = 'error',
  title,
  description,
  icon,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  testID,
}: ModalProps) {
  const theme = useTheme();
  const defaults = modalDefaults(validation);
  const tone = modalTone(validation, theme);

  return (
    <ModalOverlay
      visible={visible}
      onDismiss={dismissAction(validation, onCancel, onConfirm)}
      accessibilityLabel={title}
      testID={testID}
    >
      <Content>
        <Icon name={icon ?? defaults.icon} size={24} color={tone.accent} />
        <Title variant="title.xs" color={tone.accent} style={{ textAlign: 'center' }}>
          {title}
        </Title>
        {description ? (
          <Text variant="body.s" color={theme.content.dark} style={{ textAlign: 'center' }}>
            {description}
          </Text>
        ) : null}
        <Actions>
          <ActionSlot>
            <Button
              label={confirmLabel ?? defaults.confirmLabel}
              variant="contained"
              backgroundColor={tone.confirmBackground}
              elevation="lg"
              labelFamily="title"
              fullWidth
              onPress={onConfirm}
              testID={testID ? `${testID}-confirm` : undefined}
            />
          </ActionSlot>
          {validation === 'error' ? (
            <ActionSlot>
              <Button
                label={cancelLabel ?? defaults.cancelLabel ?? undefined}
                variant="ghost"
                labelColor={theme.content.dark}
                labelFamily="title"
                fullWidth
                onPress={onCancel}
                testID={testID ? `${testID}-cancel` : undefined}
              />
            </ActionSlot>
          ) : null}
        </Actions>
      </Content>
    </ModalOverlay>
  );
}
