import type { IconName } from '../../icons';

export interface MenuItemProps {
  label: string;
  icon?: IconName;
  active?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
