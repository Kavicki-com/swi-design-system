export type AvatarSize = 's' | 'm' | 'l';

export interface AvatarProps {
  uri?: string;
  size?: AvatarSize;
  customSize?: number;
  bordered?: boolean;
  /**
   * Border thickness in px. Defaults to 2. Only applied when `bordered: true`.
   * Used by Dashboard avatar which Figma renders with ~4px ring.
   */
  borderWidth?: number;
  borderColor?: string;
  fallbackBackgroundColor?: string;
  testID?: string;
  accessibilityLabel?: string;
}
