export interface ChatSectionUser {
  id: string;
  name: string;
  subtitle?: string;
  avatarUri?: string;
  unreadCount?: number;
}

export interface ChatSectionProps {
  users: ChatSectionUser[];
  searchValue?: string;
  onSearchChange?: (text: string) => void;
  searchPlaceholder?: string;
  onUserPress?: (id: string) => void;
  onExpand?: () => void;
  expandLabel?: string;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
