import React, { type ReactNode } from 'react';
import { Modal as RNModal, type StyleProp, type ViewStyle } from 'react-native';
import { useTheme } from '../../theme';
import { elevation } from '../../tokens';
import { Card, Scrim } from './Modal.styles';

export interface ModalOverlayProps {
  visible: boolean;
  /** Esc, voltar do Android e clique no fundo. Sem ele, só uma ação do cartão fecha. */
  onDismiss?: () => void;
  /** Rótulo do fundo clicável. Padrão "Fechar". */
  dismissAccessibilityLabel?: string;
  accessibilityLabel?: string;
  cardStyle?: StyleProp<ViewStyle>;
  testID?: string;
  children: ReactNode;
}

// O cartão precisa de um onPress para segurar o toque: sem ele, o clique
// dentro do cartão chega ao fundo e fecha o modal.
const absorb = () => {};

/**
 * Base dos modais do DS: o `Modal` do react-native, transparente, com fundo
 * escurecido e o cartão da biblioteca do Figma no centro.
 *
 * O `Modal` do react-native resolve nas duas plataformas o que um overlay
 * absoluto não resolve: no web (react-native-web) ele vai para um portal no
 * body, por cima de qualquer `overflow` ou `zIndex` da tela, prende o foco e
 * fecha no Esc; no nativo é um modal de verdade, com o voltar do Android.
 *
 * `animationType="none"`: com fade, o react-native-web espera o evento de fim
 * da animação para desmontar, e no jsdom esse evento não vem, então o modal
 * nunca sairia da tela nos testes do host.
 */
export function ModalOverlay({
  visible,
  onDismiss,
  dismissAccessibilityLabel = 'Fechar',
  accessibilityLabel,
  cardStyle,
  testID,
  children,
}: ModalOverlayProps) {
  const theme = useTheme();
  return (
    <RNModal visible={visible} transparent animationType="none" onRequestClose={onDismiss}>
      <Scrim
        onPress={onDismiss}
        accessibilityLabel={dismissAccessibilityLabel}
        style={{ backgroundColor: theme.overlay }}
        testID={testID ? `${testID}-scrim` : undefined}
      >
        <Card
          onPress={absorb}
          focusable={false}
          accessibilityViewIsModal
          accessibilityLabel={accessibilityLabel}
          style={[elevation.lg, cardStyle]}
          testID={testID}
        >
          {children}
        </Card>
      </Scrim>
    </RNModal>
  );
}
