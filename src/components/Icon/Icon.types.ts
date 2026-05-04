import type { IconName } from '../../icons';

export interface IconProps {
  name: IconName;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  testID?: string;
  accessibilityLabel?: string;
}
