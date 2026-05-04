import type { IconName } from '../../icons';

export interface BigNumbersCardProps {
  value: number | string;
  label: string;
  icon?: IconName;
  iconColor?: string;
  fullWidth?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}
