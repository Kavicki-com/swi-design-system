export interface ProgressBarProps {
  value: number;
  disabled?: boolean;
  color?: string;
  trackColor?: string;
  /**
   * Optional horizontal color stops (left → right). When provided, the fill
   * renders an SVG linear gradient instead of a solid color; `color` is
   * ignored. Use 2+ colors, e.g. `['#3eab2e', '#ef8600', '#f5667a']` for
   * success → warning → error.
   */
  gradient?: string[];
  accessibilityLabel?: string;
  testID?: string;
}
