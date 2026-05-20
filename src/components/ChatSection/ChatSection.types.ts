import type { ReactNode } from 'react';

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
  /**
   * Optional render-slot to wrap each ChatUserCard. Consumers can use this to
   * inject motion wrappers (e.g. framer-motion's `motion.div` with `layoutId`)
   * without the DS depending on any animation library.
   * Returns a new node that takes the place of the original card.
   */
  renderCard?: (card: ReactNode, user: ChatSectionUser) => ReactNode;
}
