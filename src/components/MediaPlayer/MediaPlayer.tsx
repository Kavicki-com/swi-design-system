/**
 * Native MediaPlayer: o app não tem biblioteca de vídeo nem de áudio (decisão
 * do projeto: nada de dependência nativa nova para isto), então o cartão
 * mostra o tipo e o nome e o botão entrega ao host a abertura do arquivo, que
 * no SWI é o navegador interno. A web pega MediaPlayer.web.tsx, que toca no
 * próprio elemento do navegador.
 */
import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { useTheme } from '../../theme';
import { DEFAULT_OPEN_LABEL, MEDIA_ICON, mediaAccessibilityLabel } from './MediaPlayer.logic';
import { Card, Row, TitleSlot } from './MediaPlayer.styles';
import type { MediaPlayerProps } from './MediaPlayer.types';

export function MediaPlayer({
  kind,
  title,
  onOpenExternal,
  openLabel = DEFAULT_OPEN_LABEL,
  testID,
}: MediaPlayerProps) {
  const theme = useTheme();
  const label = mediaAccessibilityLabel(kind, title);

  return (
    <Card accessibilityLabel={label} testID={testID}>
      <Row>
        <Icon name={MEDIA_ICON[kind]} size={24} color={theme.content.dark} />
        <TitleSlot>
          <Text variant="body.s" color={theme.content.secondary} numberOfLines={1}>
            {title}
          </Text>
        </TitleSlot>
        {onOpenExternal ? (
          <Button
            size="small"
            variant="contained"
            label={openLabel}
            onPress={onOpenExternal}
            accessibilityLabel={`${openLabel} ${label}`}
            testID={testID ? `${testID}-open` : undefined}
          />
        ) : null}
      </Row>
    </Card>
  );
}
