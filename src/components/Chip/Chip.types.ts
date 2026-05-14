import type { PressableProps } from 'react-native';

export type ChipState = 'default' | 'active' | 'disable';

/**
 * Chip visual variant.
 * - `outline` (default): filter-style chip with primary-colored border and
 *   text on a transparent background. Used in filter rows where the chip
 *   acts as a toggle.
 * - `filled`: solid badge with `surface.primary` background and dark text,
 *   small radius. Used for read-only tag lists (e.g. allergies on the
 *   admin profile, Figma `159:14138`).
 */
export type ChipVariant = 'outline' | 'filled';

/**
 * Chip accent / color scheme.
 * - `primary` (default): green family — `surface.primary` fill and
 *   `content.primary` border/text.
 * - `secondary`: blue family — `surface.secondaryLight` fill and
 *   `content.secondary` border/text. Used for the allergies tag list on the
 *   mobile my-stats screen (Figma `342:9892`).
 */
export type ChipColorScheme = 'primary' | 'secondary';

export interface ChipProps
  extends Pick<PressableProps, 'accessibilityLabel' | 'accessibilityHint' | 'testID'> {
  label: string;
  state?: ChipState;
  variant?: ChipVariant;
  colorScheme?: ChipColorScheme;
  onPress?: () => void;
}
