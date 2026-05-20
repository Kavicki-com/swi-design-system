import type { ViewStyle, StyleProp } from 'react-native';

export interface BackgroundDotsGridProps {
  /** Quantidade de colunas verticais. Default 27 (Figma `Repetição de grade 4`). */
  columns?: number;
  /** Cor dos dots. Default `#65D040` (Figma). */
  color?: string;
  /** Opacidade do conjunto. Default 0.09 (Figma `opacity-9`). */
  opacity?: number;
  /**
   * Largura total da grid em px. Default = `(columns - 1) * 15.93 + 10.62`
   * (≈414.92 pra 27 colunas, Figma). Use pra reescalar em telas custom.
   */
  width?: number;
  /** Override de style do container — typicamente position/top/left/transform. */
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
