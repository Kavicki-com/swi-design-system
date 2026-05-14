import type { IconName } from '../../icons';

export interface HorizontalCardProps {
  label: string;
  leftIcon?: IconName;
  /** Defaults to `'keyboard_arrow_right'` (chevron) inside the component. */
  rightIcon?: IconName;
  onPress?: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
