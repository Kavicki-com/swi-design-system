import type { PressableProps } from 'react-native';

export type RadioSize = 's' | 'm';

export interface RadioProps
  extends Pick<
    PressableProps,
    'disabled' | 'accessibilityLabel' | 'accessibilityHint' | 'testID'
  > {
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  size?: RadioSize;
  value?: string;
}
