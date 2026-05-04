export interface ChatUserCardProps {
  name: string;
  subtitle?: string;
  avatarUri?: string;
  unreadCount?: number;
  onPress?: () => void;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
