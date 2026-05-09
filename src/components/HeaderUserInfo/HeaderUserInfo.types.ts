import type { IconName } from '../../icons';

export interface HeaderUserInfoProps {
  bpm: number;
  pressure: string;
  progress?: number;
  avatarUri?: string;
  bpmUnit?: string;
  accessibilityLabel?: string;
  testID?: string;
  heartIconName?: IconName;
  pressureIconName?: IconName;
  bordered?: boolean;
  borderColor?: string;
}
