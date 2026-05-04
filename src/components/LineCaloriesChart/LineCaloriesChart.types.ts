export interface LineCaloriesPoint {
  time: string;
  kcal: number;
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
