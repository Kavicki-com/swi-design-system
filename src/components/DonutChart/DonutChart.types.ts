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
  size?: DonutChartSize;
  appearance?: DonutChartAppearance;
  onLocationPress?: () => void;
  locationIcon?: IconName;
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
