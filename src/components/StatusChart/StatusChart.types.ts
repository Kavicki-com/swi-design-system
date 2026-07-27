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
   * Render the heart-status badge over the silhouette's chest. Defaults to
   * `true` — matches the dashboard + my-stats internal behavior. Pass `false`
   * on screens that need to stack a custom overlay (e.g. mix-blend-mode
   * multiply) on top of the silhouette WITHOUT colorizing the heart badge.
   * The consumer is then responsible for rendering `<HeartStatus>` manually
   * AFTER the overlay, using `HEART_STATUS_OFFSET` for positioning.
   */
  renderHeartStatus?: boolean;
  /**
   * Optional press handler for the heart-rate action button (bottom-right).
   * If omitted, the button is rendered non-interactive. Ignored when
   * `showActionButton` is `false`.
   */
  onPressHeartRate?: (event: GestureResponderEvent) => void;
  /**
   * Optional press handler for the settings sub-badge (top-right gear icon
   * nested inside the heart-rate action button). When omitted, the badge
   * remains visible but is non-interactive (press is a no-op). Touch events
   * on the sub-badge do NOT propagate to the parent heart-rate button.
   * Ignored when `showActionButton` is `false`.
   */
  onPressSettings?: (event: GestureResponderEvent) => void;
  /**
   * When true, allows the outermost background-circle (Caminho 4122,
   * 456.714px diameter) to extrapolate beyond the canvas. Per Figma data,
   * the disc extends ~25.7px above, ~57px below, and ~48px on each side
   * of the 360×374 canvas. Default behavior (`false`) clips the disc to
   * the canvas (preserving backwards compatibility — useful when StatusChart
   * is rendered standalone in a card). Set to `true` on dashboard contexts
   * where the disc should visually bleed beyond the chart frame.
   */
  extrapolate?: boolean;
  /**
   * Render the decorative backdrop: card background + rounded corners, the two
   * background discs, the dotted grid, the track ring, the deepest well and
   * the "Ellipse 5" arc. Defaults to `true` (dashboard look).
   *
   * Pass `false` for a BARE chart — only the elements that are driven by
   * `condition`: the silhouette, the heart badge and the colored crescent.
   * Everything skipped is a fixed gray or a baked PNG, so it cannot express
   * state; on a health screen, decoration that looks like an indicator is
   * worse than nothing. Use it when the host screen already provides its own
   * background (e.g. the app's my-stats, whose dot grid was duplicating the
   * one this component draws).
   */
  backdrop?: boolean;
  /**
   * Diameter (in logical px) of the outermost background-circle (Caminho 4122)
   * when `extrapolate=true`. Default is 456.714 (Figma spec). Pass a larger
   * value to make the disc visually bigger and extrapolate further beyond
   * the canvas. Ignored when `extrapolate=false`.
   */
  discDiameter?: number;
  testID?: string;
  accessibilityLabel?: string;
}
