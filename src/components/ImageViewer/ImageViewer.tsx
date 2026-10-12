import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { ModalOverlay } from '../Modal/ModalOverlay';
import { Text } from '../Text';
import { Title } from '../Title';
import { useTheme } from '../../theme';
import { viewerLayout } from './ImageViewer.layout';
import { CloseButton, Footer, Header, Stage } from './ImageViewer.styles';
import type { ImageViewerProps } from './ImageViewer.types';

// Alturas fixas do cabeçalho (o X de 24) e do rodapé (Button com ícone de 24
// e padding 12), descontadas da janela para o palco caber sem rolagem.
const HEADER_HEIGHT = 24;
const FOOTER_HEIGHT = 48;

/**
 * Imagem em tamanho grande, no molde do Modal da biblioteca do Figma
 * (461:10263): mesmo cartão, largo, com o nome do arquivo e o X no topo, a
 * imagem inteira no palco e o Baixar embaixo. Esc e clique fora fecham.
 */
export function ImageViewer({
  visible,
  uri,
  title,
  onClose,
  onDownload,
  downloadLabel = 'Baixar',
  closeAccessibilityLabel = 'Fechar',
  errorLabel = 'Não foi possível abrir a imagem.',
  testID,
}: ImageViewerProps) {
  const theme = useTheme();
  const window = useWindowDimensions();
  const [failed, setFailed] = useState(false);

  // Outra imagem merece outra tentativa: a falha era da anterior.
  useEffect(() => setFailed(false), [uri]);

  const layout = viewerLayout(window, {
    gutter: theme.padding.l,
    padding: theme.padding.m,
    gap: theme.gap.m,
    header: HEADER_HEIGHT,
    footer: onDownload ? FOOTER_HEIGHT : 0,
  });

  return (
    <ModalOverlay
      visible={visible}
      onDismiss={onClose}
      dismissAccessibilityLabel={closeAccessibilityLabel}
      accessibilityLabel={title}
      cardStyle={{ width: layout.cardWidth }}
      testID={testID}
    >
      <Header>
        <Title variant="title.xs" color={theme.content.dark} numberOfLines={1} style={{ flex: 1 }}>
          {title}
        </Title>
        <CloseButton
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel={closeAccessibilityLabel}
          testID={testID ? `${testID}-close` : undefined}
        >
          <Icon name="close" size={24} color={theme.content.dark} />
        </CloseButton>
      </Header>
      <Stage style={{ width: layout.stageWidth, height: layout.stageHeight }}>
        {failed ? (
          <Text variant="body.m" color={theme.content.medium}>
            {errorLabel}
          </Text>
        ) : uri ? (
          <Image
            source={uri}
            width={layout.stageWidth}
            height={layout.stageHeight}
            resizeMode="contain"
            accessibilityLabel={title}
            onError={() => setFailed(true)}
            testID={testID ? `${testID}-image` : undefined}
          />
        ) : null}
      </Stage>
      {onDownload ? (
        <Footer>
          <Button
            label={downloadLabel}
            variant="contained"
            elevation="lg"
            labelFamily="title"
            iconRight={<Icon name="download" size={24} color={theme.content.light} />}
            onPress={onDownload}
            testID={testID ? `${testID}-download` : undefined}
          />
        </Footer>
      ) : null}
    </ModalOverlay>
  );
}
