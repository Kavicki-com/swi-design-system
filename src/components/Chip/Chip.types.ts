import type { PressableProps } from 'react-native';

export type ChipState = 'default' | 'active' | 'disable';

export interface ChipProps
  extends Pick<PressableProps, 'accessibilityLabel' | 'accessibilityHint' | 'testID'> {
  label: string;
  state?: ChipState;
  onPress?: () => void;
}
