import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export interface JourneyThemeProps {
  /**
   * Imagem de gradient/glow que cobre 100% da viewport (camada base). Quando
   * omitida, a camada não é renderizada — útil pra screens que já têm cor
   * sólida no parent ou queiram desligar o gradient.
   */
  gradient?: ImageSourcePropType;
  /**
   * Imagem do mesh wireframe pattern (Figma 364:17123). Renderizada em
   * tamanho natural 1600×1600 posicionada em `top:143, left:-449` — só a
   * porção bottom-left fica visível no viewport 360×800. Omita pra desligar.
   */
  pattern?: ImageSourcePropType;
  /** Mostra o dot-grid (Figma 364:16538). Default true. */
  showDotGrid?: boolean;
  /** Cor dos dots. Default `#65D040` (Figma). */
  dotGridColor?: string;
  /** Opacidade do dot-grid. Default 0.09 (Figma `opacity-9`). */
  dotGridOpacity?: number;
  /** Número de colunas. Default 27. */
  dotGridColumns?: number;
  /**
   * Override do positioning do dot-grid. Default Figma: `top:-23, left:'50%',
   * transform:[{translateX:-207.46}]` (centrado horizontal, anchorado no topo).
   */
  dotGridStyle?: StyleProp<ViewStyle>;
  testID?: string;
}
