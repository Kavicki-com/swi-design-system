import type { GenderValue } from '../GenderSelectionCard';

export interface GenderSelectorProps {
  /** Currently selected gender, or `null` if nothing is selected yet. */
  value: GenderValue | null;
  onChange: (value: GenderValue) => void;
  /** Custom labels for each card. Defaults match Figma. */
  femaleLabel?: string;
  maleLabel?: string;
  testID?: string;
}
