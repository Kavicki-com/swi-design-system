import type { IconName } from '../../icons';

export type MenuItemVariant = 'default' | 'compact' | 'minimal';

export interface MenuItemProps {
  label: string;
  icon?: IconName;
  active?: boolean;
  disabled?: boolean;
  variant?: MenuItemVariant;
  /** Optional unread/count badge rendered as a red pill overlaid on the
   *  top-left of the item. Use for navigation entries that carry pending
   *  counts (alerts, reports, messages). Stringified for display. */
  badge?: string | number;
  onPress?: () => void;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
