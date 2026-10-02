export interface LineCaloriesPoint {
  time: string;
  /**
   * null = periodo sem medicao: o ponto ocupa o seu lugar no eixo do tempo,
   * mas nao e desenhado, e a linha se interrompe ali em vez de atravessar.
   */
  kcal: number | null;
}

export interface LineCaloriesChartProps {
  points: LineCaloriesPoint[];
  unit?: string;
  width?: number;
  height?: number;
  fullWidth?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}
