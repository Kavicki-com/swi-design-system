import type { ReactNode } from 'react';
import type { TextInputProps } from 'react-native';

export interface InputProps
  extends Omit<TextInputProps, 'editable' | 'style' | 'placeholderTextColor'> {
  label?: string;
  description?: string;
  iconRight?: ReactNode;
  disabled?: boolean;
}
