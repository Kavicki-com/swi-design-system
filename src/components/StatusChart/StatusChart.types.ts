import type { GestureResponderEvent } from 'react-native';

export type StatusChartCondition = 'good' | 'alert' | 'low';

/**
 * StatusChart size preset:
 * - `default`: 360×374 canvas — the dashboard size, matches the original
 *   Figma source.
 * - `compact`: 289.733×301 canvas (0.80481× scale) — used by the mobile
 *   my-stats profile screen (Figma `342:9420`). The internal geometry is
 *   uniformly scaled via a `transform: scale` so all sub-elements (rings,
 *   buttons, silhouette, settings badge) shrink proportionally.
 */
export type StatusChartSize = 'default' | 'compact';

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
   * Outer canvas preset. Defaults to `default` (360×374, dashboard size).
   * Use `compact` for the my-stats screen (289.733×301, Figma `342:9420`).
   */
  size?: StatusChartSize;
  /**
   * Render the bottom-right heart-rate action button (with its nested
   * settings sub-badge). Defaults to `true` — matches the dashboard variant
   * (Figma `245:23280`). Pass `false` on screens that omit the button,
   * e.g. the mobile my-stats StatusChart (Figma `342:9420`).
   */
  showActionButton?: boolean;
  /**
   * Optional press handler for the heart-rate action button (bottom-right).
   * If omitted, the button is rendered non-interactive. Ignored when
   * `showActionButton` is `false`.
   */
  onPressHeartRate?: (event: GestureResponderEvent) => void;
  testID?: string;
  accessibilityLabel?: string;
}
