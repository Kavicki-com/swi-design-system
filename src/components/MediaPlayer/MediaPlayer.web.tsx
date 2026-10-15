/**
 * Web MediaPlayer: usa o <video>/<audio> do próprio navegador, com os
 * controles dele. Divisão .web/.native porque não existe primitivo do React
 * Native que toque mídia: na web o elemento de DOM resolve sem dependência
 * nova; no nativo (MediaPlayer.tsx) o host abre o arquivo fora do componente.
 */
import React, { useState } from 'react';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { useTheme } from '../../theme';
import {
  DEFAULT_ERROR_LABEL,
  MEDIA_ICON,
  mediaAccessibilityLabel,
} from './MediaPlayer.logic';
import { Card, Row, TitleSlot } from './MediaPlayer.styles';
import type { MediaPlayerProps } from './MediaPlayer.types';

// Teto de altura do vídeo: vídeo em pé de celular (9:16) ocuparia a tela
// inteira no painel. Medida de layout, como as alturas do ImageViewer.
const VIDEO_MAX_HEIGHT = 360;

export function MediaPlayer({
  kind,
  uri,
  title,
  errorLabel = DEFAULT_ERROR_LABEL,
  testID,
}: MediaPlayerProps) {
  const theme = useTheme();
  const [failed, setFailed] = useState(false);
  const label = mediaAccessibilityLabel(kind, title);

  // Só o src, sem elemento source com type: com type="video/quicktime" o
  // Chrome desiste do .mov sem tentar; com src direto ele fareja o conteúdo e
  // toca o H.264 do iPhone.
  const player =
    kind === 'video' ? (
      <video
        src={uri}
        controls
        preload="metadata"
        aria-label={label}
        data-testid={testID ? `${testID}-video` : undefined}
        onError={() => setFailed(true)}
        style={{
          width: '100%',
          maxHeight: VIDEO_MAX_HEIGHT,
          borderRadius: theme.border.radius.m,
          backgroundColor: theme.surface.standard,
        }}
      />
    ) : (
      <audio
        src={uri}
        controls
        preload="metadata"
        aria-label={label}
        data-testid={testID ? `${testID}-audio` : undefined}
        onError={() => setFailed(true)}
        style={{ width: '100%' }}
      />
    );

  return (
    <Card accessibilityLabel={label} testID={testID}>
      <Row>
        <Icon name={MEDIA_ICON[kind]} size={24} color={theme.content.dark} />
        <TitleSlot>
          <Text variant="body.s" color={theme.content.secondary} numberOfLines={1}>
            {title}
          </Text>
        </TitleSlot>
      </Row>
      {failed ? (
        <Text variant="body.s" color={theme.content.medium}>
          {errorLabel}
        </Text>
      ) : (
        player
      )}
    </Card>
  );
}
