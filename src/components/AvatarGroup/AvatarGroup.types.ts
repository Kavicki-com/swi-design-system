import type { AvatarSize } from '../Avatar';

export interface AvatarGroupItem {
  uri?: string;
  alt?: string;
}

export interface AvatarGroupProps {
  avatars: AvatarGroupItem[];
  totalCount?: number;
  maxVisible?: number;
  size?: AvatarSize;
  bordered?: boolean;
  borderColor?: string;
  testID?: string;
  accessibilityLabel?: string;
}
