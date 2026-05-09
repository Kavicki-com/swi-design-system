import type { IconName } from '../../icons';

export type MenuItemVariant = 'default' | 'compact';

export interface MenuItemProps {
  label: string;
  icon?: IconName;
  active?: boolean;
  disabled?: boolean;
  variant?: MenuItemVariant;
  onPress?: () => void;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
