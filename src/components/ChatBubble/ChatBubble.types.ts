export type ChatBubblePosition = 'left' | 'right';

export interface ChatBubbleProps {
  message: string;
  time: string;
  position?: ChatBubblePosition;
  avatarUri?: string;
  onMenuPress?: () => void;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
