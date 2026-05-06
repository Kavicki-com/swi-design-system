import type { HeartrateStatusCondition } from '../HeartrateStatus/HeartrateStatus.types';

export type HeartStatusCondition = HeartrateStatusCondition;

export interface HeartStatusProps {
  condition?: HeartStatusCondition;
  size?: number;
  testID?: string;
  accessibilityLabel?: string;
}
