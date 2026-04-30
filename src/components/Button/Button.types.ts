import type { ReactNode } from 'react';
import type { PressableProps } from 'react-native';

export type ButtonVariant = 'contained' | 'outline' | 'ghost';

export interface ButtonProps
  extends Pick<
    PressableProps,
    | 'onPress'
    | 'onLongPress'
    | 'disabled'
    | 'accessibilityLabel'
    | 'accessibilityHint'
    | 'testID'
  > {
  label: string;
  variant?: ButtonVariant;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}
