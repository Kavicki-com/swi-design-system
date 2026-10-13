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
  /**
   * Liga os pontos numa linha continua por cima das horas sem medicao, em vez
   * de quebrar a linha no buraco. O painel usa `true` para mostrar a tendencia
   * (MEL-06); o padrao `false` mantem o buraco, como no app.
   */
  connectAcrossGaps?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}
