import type { StyleProp, ViewStyle } from 'react-native';
import type { ChipColorScheme, ChipVariant } from '../Chip/Chip.types';

export type ChipGroupMode = 'single' | 'multiple';

export interface ChipGroupProps {
  options: string[];
  mode?: ChipGroupMode;
  maxSelections?: number;
  initialValue?: string | string[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  /**
   * Forwarded to each `Chip`. Defaults to `outline`.
   */
  variant?: ChipVariant;
  /**
   * Forwarded to each `Chip`. Defaults to `primary` (green family).
   * Use `secondary` for blue tag lists (e.g. mobile my-stats allergies,
   * Figma `342:9892`).
   */
  colorScheme?: ChipColorScheme;
  style?: StyleProp<ViewStyle>;
}
