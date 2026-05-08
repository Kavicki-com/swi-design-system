import type { IconName } from '../../icons';
import type { MenuItemVariant } from '../MenuItem/MenuItem.types';

export interface SideMenuItem {
  value: string;
  label: string;
  icon?: IconName;
  disabled?: boolean;
  variant?: MenuItemVariant;
}

export interface SideMenuProps {
  items: SideMenuItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: MenuItemVariant;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
