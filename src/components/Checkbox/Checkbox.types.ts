import type { PressableProps } from 'react-native';

export type CheckboxSize = 's' | 'm';

export interface CheckboxProps
  extends Pick<
    PressableProps,
    'disabled' | 'accessibilityLabel' | 'accessibilityHint' | 'testID'
  > {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  size?: CheckboxSize;
}
