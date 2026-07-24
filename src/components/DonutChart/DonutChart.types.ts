import type { IconName } from '../../icons';

export type DonutChartSize = 'default' | 'small';

/**
 * Visual treatment of the donut.
 * - `bevel` (default): dark 3D ring with bezel + inner well + tracked arc.
 *   Use on dashboards where the donut sits over an unrelated background.
 * - `flat`: minimal arc on transparent background — no bezel, no inner
 *   well, very subtle track. Use on screens that already have their own
 *   container (e.g. admin profile right column, Figma `159:14140`).
 */
export type DonutChartAppearance = 'bevel' | 'flat';

export type DonutGradient = readonly [from: string, to: string];

export interface DonutChartProps {
  title: string;
  value: string | number;
  label: string;
  caption?: string;
  progress: number;
  /** Two-stop gradient applied to the arc. Top → bottom along the arc. */
  progressGradient?: DonutGradient;
  trackColor?: string;
  icon?: IconName;
  iconColor?: string;
  /**
   * Two-stop linear gradient applied to the center icon (top→bottom).
   * Overrides `iconColor` when set. Matches the Figma heartbeat-vector asset
   * which uses surface/success → surface/success-light, etc.
   */
  iconGradient?: DonutGradient;
  size?: DonutChartSize;
  appearance?: DonutChartAppearance;
  /**
   * Horizontal alignment of the title text within the donut card.
   * Defaults to 'center' (legacy behavior used by Dashboard donuts).
   * Set to 'left' when the donut sits in a column whose other components
   * (titles, chips, dividers) are left-aligned — e.g. WorkerDetailsLayout
   * right column (Figma 159:14140 / 159:14142).
   */
  titleAlign?: 'left' | 'center';
  /**
   * Override the inner icon width. Defaults to size-specific DIMS. Use when
   * matching a Figma asset where the glyph é naturalmente menor que o default
   * (e.g. dashboard-donnut-chart 18x18 dentro do small chart 156x156).
   */
  iconWidth?: number;
  iconHeight?: number;
  /** Override label font-size em px. Default = theme.fontSize.sm (12). */
  labelSize?: number;
  /** Override label font-weight. Default = 'medium'. */
  labelWeight?: 'regular' | 'medium' | 'bold';
  onLocationPress?: () => void;
  locationIcon?: IconName;
  /**
   * Label acessível do pino de localização. Default 'Open location'
   * (retrocompat) — hosts pt-BR devem sobrescrever.
   */
  locationAccessibilityLabel?: string;
  accessibilityLabel?: string;
  testID?: string;
}

export interface DonutArcProps {
  size: number;
  strokeWidth: number;
  progress: number;
  gradient: DonutGradient;
  trackColor: string;
  appearance?: DonutChartAppearance;
}
