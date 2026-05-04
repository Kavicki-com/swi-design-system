export interface ToggleProps {
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  accessibilityLabel?: string;
  testID?: string;
}
