import type { IconName } from '../../icons';

export type DonutChartSize = 'default' | 'small';

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
}
