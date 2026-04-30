import type { StyleProp, ViewStyle } from 'react-native';

export type ChipGroupMode = 'single' | 'multiple';

export interface ChipGroupProps {
  options: string[];
  mode?: ChipGroupMode;
  maxSelections?: number;
  initialValue?: string | string[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  style?: StyleProp<ViewStyle>;
}
