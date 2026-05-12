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
  /** Override the rendered icon size (in px). Defaults to 18 for `compact`
   *  and 22 for all other variants. Use this when a tight Figma spec wants
   *  a smaller glyph inside the standard MenuItem chrome (e.g. compact map
   *  side-menus where the design calls for 20px icons). */
  iconSize?: number;
  onPress?: () => void;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
