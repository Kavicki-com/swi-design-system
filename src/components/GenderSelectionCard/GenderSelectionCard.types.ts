import type { IconName } from '../../icons';

export type GenderValue = 'female' | 'male';

export interface GenderSelectionCardProps {
  /** Which gender this card represents — drives icon + accessibility. */
  gender: GenderValue;
  /** Display label below the icon (e.g. "Feminino", "Masculino"). */
  label: string;
  /** Whether the card is the selected one in its group. */
  selected: boolean;
  onPress: () => void;
  /**
   * Override the icon shown inside the card. Defaults to `female` / `male`
   * from the DS registry based on `gender`.
   */
  iconName?: IconName;
  testID?: string;
  accessibilityLabel?: string;
}
