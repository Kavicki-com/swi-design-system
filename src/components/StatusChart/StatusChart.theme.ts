import type { DefaultTheme } from 'styled-components/native';
import type { HeartrateStatusCondition } from '../HeartrateStatus/HeartrateStatus.types';
import type { StatusChartCondition } from './StatusChart.types';

export interface StatusChartPalette {
  /** Top stop of the silhouette gradient. */
  gradientFrom: string;
  /** Bottom stop of the silhouette gradient. */
  gradientTo: string;
  /** Color of the partial progress arc and the heart-rate icon. */
  accent: string;
  /** Tint applied to the dotted background grid. */
  backgroundTint: string;
  /** Maps the chart condition to a heart-status badge condition. */
  heartStatus: HeartrateStatusCondition;
}

export const palette = (
  theme: DefaultTheme,
  condition: StatusChartCondition,
): StatusChartPalette => {
  switch (condition) {
    case 'alert':
      return {
        gradientFrom: theme.surface.error,
        gradientTo: theme.surface.errorLight,
        accent: theme.surface.error,
        backgroundTint: theme.surface.errorLight,
        heartStatus: 'alert',
      };
    case 'low':
      return {
        gradientFrom: theme.surface.info,
        gradientTo: theme.surface.infoLight,
        accent: theme.surface.info,
        backgroundTint: theme.surface.infoLight,
        heartStatus: 'low',
      };
    case 'good':
    default:
      return {
        gradientFrom: theme.surface.success,
        gradientTo: theme.surface.successLight,
        accent: theme.surface.success,
        backgroundTint: theme.surface.successLight,
        heartStatus: 'check',
      };
  }
};

export const conditionLabel: Record<StatusChartCondition, string> = {
  good: 'good',
  alert: 'alert',
  low: 'low',
};
