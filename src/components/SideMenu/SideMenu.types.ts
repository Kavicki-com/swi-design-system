import type { IconName } from '../../icons';
import type { MenuItemVariant } from '../MenuItem/MenuItem.types';

export interface SideMenuItem {
  value: string;
  label: string;
  icon?: IconName;
  /** Optional badge (count/status) overlaid on the top-left of the item — e.g.
   *  unread message counts. Forwarded as-is to MenuItem.badge. */
  badge?: string | number;
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
