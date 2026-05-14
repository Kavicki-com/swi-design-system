export interface ProgressBarProps {
  value: number;
  disabled?: boolean;
  color?: string;
  trackColor?: string;
  /**
   * Optional horizontal color stops. When provided (2+ colors), the fill
   * renders an SVG linear gradient instead of a solid color; `color` is
   * ignored. Order is along the gradient axis (left→right by default; pass
   * `gradientDirection="rtl"` to flip).
   * Example: `['#3eab2e', '#ef8600', '#f5667a']` for success → warning → error.
   */
  gradient?: string[];
  /**
   * Explicit gradient stop positions in percent (0-100), aligned by index
   * with `gradient`. When omitted, stops are auto-distributed evenly across
   * the array length. Use this for Figma designs with non-uniform stops
   * (e.g. mobile my-stats fadigue ProgressBar — `[43.75, 79.253, 100]`,
   * Figma `342:9447`).
   */
  gradientStops?: number[];
  /**
   * Gradient orientation along the bar's main axis. `'ltr'` (default) places
   * the first color on the left, the last on the right. `'rtl'` reverses
   * the axis (first color on the right) — matches Tailwind's
   * `bg-gradient-to-l` used in the mobile my-stats fadigue bar.
   */
  gradientDirection?: 'ltr' | 'rtl';
  /**
   * Wrap the fill in a visible track frame: 1px solid `content.medium`
   * border, `background`-colored interior, pill shape. The fill sits inside
   * with symmetric padding so the rounded fill ends are inset from the
   * frame edges. Used for the my-stats fadigue ProgressBar
   * (Figma `342:9447` — 22px tall frame around a 6px gradient fill).
   * Default `false`.
   */
  bordered?: boolean;
  /**
   * Outer track height in pixels when `bordered`. Only meaningful with
   * `bordered`; defaults to 22 (matches Figma `342:9447`). The fill itself
   * stays at 6px; padding = (trackHeight - 6) / 2 keeps the fill visually
   * centered.
   */
  trackHeight?: number;
  accessibilityLabel?: string;
  testID?: string;
}
