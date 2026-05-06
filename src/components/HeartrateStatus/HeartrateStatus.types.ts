export type HeartrateStatusCondition = 'check' | 'low' | 'alert';

export interface HeartrateStatusProps {
  condition?: HeartrateStatusCondition;
  size?: number;
  testID?: string;
  accessibilityLabel?: string;
}

export interface HeartrateStatusPaths {
  width: number;
  height: number;
  circle: string;
  symbol: string;
}
