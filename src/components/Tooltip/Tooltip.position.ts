import type { ViewStyle } from 'react-native';
import type { TooltipSide } from './Tooltip.types';

/**
 * Posicao absoluta do balao em relacao ao gatilho, sem medir a largura dele:
 * cada lado cola numa borda e cresce para longe do gatilho. Em cima/embaixo
 * cola a esquerda; nas laterais cola no topo. Evita medicao de DOM e funciona
 * igual no web e no nativo (percentuais de posicao sao suportados nos dois).
 */
export const tooltipBubbleStyle = (side: TooltipSide, gap: number): ViewStyle => {
  switch (side) {
    case 'top':
      return { position: 'absolute', bottom: '100%', left: 0, marginBottom: gap };
    case 'bottom':
      return { position: 'absolute', top: '100%', left: 0, marginTop: gap };
    case 'left':
      return { position: 'absolute', right: '100%', top: 0, marginRight: gap };
    case 'right':
      return { position: 'absolute', left: '100%', top: 0, marginLeft: gap };
  }
};
