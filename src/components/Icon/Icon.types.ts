import type { IconName } from '../../icons';

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  testID?: string;
  accessibilityLabel?: string;
}
