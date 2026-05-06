import type { GestureResponderEvent } from 'react-native';

export type StatusChartCondition = 'good' | 'alert' | 'low';

export interface StatusChartProps {
  condition?: StatusChartCondition;
  /**
   * Status condition bar fill, expressed as a value in [0, 1]. The bar
   * sweeps clockwise from 12 o'clock; `progress = 1` is the full ring,
   * `progress = 0` is empty. Use it as a "decreasing" progress indicator —
   * lower values shrink the visible arc back from its end. Defaults to 1.
   */
  progress?: number;
  /**
   * Optional press handler for the heart-rate action button (bottom-right).
   * If omitted, the button is rendered non-interactive.
   */
  onPressHeartRate?: (event: GestureResponderEvent) => void;
  testID?: string;
  accessibilityLabel?: string;
}
