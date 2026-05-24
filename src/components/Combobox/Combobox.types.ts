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
  /**
   * Quando definido, limita o panel a ~N linhas visíveis e torna o resto
   * scrollável. Útil pra opções longas (alturas 140-220cm, pesos 40-160kg)
   * que estouravam o viewport. Sem cap quando undefined.
   */
  maxVisibleRows?: number;
}
