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
  /** Override the icon size (in px) for every item in this menu. Forwarded
   *  to each MenuItem via its `iconSize` prop. Defaults to MenuItem default
   *  (18 for compact, 22 otherwise). */
  iconSize?: number;
  accessibilityLabel?: string;
  testID?: string;
}
