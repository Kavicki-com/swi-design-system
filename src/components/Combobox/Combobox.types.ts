export interface ComboboxOption {
  label: string;
  value: string;
}

export interface ComboboxProps {
  label?: string;
  description?: string;
  placeholder?: string;
  options: ComboboxOption[];
  value?: string;
  onChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
}
