import type { TextInputProps } from 'react-native';

export interface SearchInputProps
  extends Omit<TextInputProps, 'editable' | 'style' | 'placeholderTextColor'> {
  disabled?: boolean;
  onClear?: () => void;
}
