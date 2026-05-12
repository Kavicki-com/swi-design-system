import type { IconName } from '../../icons';

export interface SuccessBadgeProps {
  /** Diameter of the circular badge in pixels. Default 96 (Figma `211:12997`). */
  size?: number;
  /**
   * Icon name from the DS registry to render centered inside the badge.
   * Default `'check'`. Use any registered IconName when reusing this component
   * for non-success contexts.
   */
  iconName?: IconName;
  /**
   * Icon size in pixels. Default ~58% of `size` (≈56 when size=96, per Figma).
   * Override when a different icon needs a different inner ratio.
   */
  iconSize?: number;
  /**
   * Gradient color stops `[from, to]` (top → bottom).
   * Default `[theme.surface.primary, theme.surface.secondary]` per Figma.
   */
  colors?: [string, string];
  /** Color of the inner icon. Default `theme.content.dark`. */
  iconColor?: string;
  testID?: string;
  accessibilityLabel?: string;
}
