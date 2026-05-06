import type { DefaultTheme } from 'styled-components/native';
import type { HeartrateStatusCondition } from './HeartrateStatus.types';

export const conditionColor = (
  theme: DefaultTheme,
  condition: HeartrateStatusCondition,
): string => {
  switch (condition) {
    case 'low':
      return theme.surface.info;
    case 'alert':
      return theme.surface.error;
    case 'check':
    default:
      return theme.surface.success;
  }
};

export const conditionLabel: Record<HeartrateStatusCondition, string> = {
  check: 'normal',
  low: 'low',
  alert: 'alert',
};
