export type MapControlVariant = 'operators' | 'heatmap' | 'cameras';

export interface MapControlOption {
  id: string;
  label: string;
  checked: boolean;
}

export interface MapControlProps {
  variant: MapControlVariant;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  title?: string;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (text: string) => void;
  options?: MapControlOption[];
  onOptionChange?: (id: string, checked: boolean) => void;
  testID?: string;
  accessibilityLabel?: string;
}
