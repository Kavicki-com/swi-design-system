export type AvatarSize = 's' | 'm' | 'l';

export interface AvatarProps {
  uri?: string;
  size?: AvatarSize;
  customSize?: number;
  bordered?: boolean;
  borderColor?: string;
  fallbackBackgroundColor?: string;
  testID?: string;
  accessibilityLabel?: string;
}
