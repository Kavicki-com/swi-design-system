export interface TabItem {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Tabs variant:
 * - `segmented`: classic 3-up button group (shared borders, only outer
 *   corners rounded). Default for backwards compatibility.
 * - `separated`: each tab is an independent pill with all 4 corners
 *   rounded and a fixed gap between siblings. Used in Figma 69:14770
 *   monitoring-alerts where the tabs read as 3 distinct buttons.
 */
export type TabsVariant = 'segmented' | 'separated';

export interface TabsProps {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: TabsVariant;
  accessibilityLabel?: string;
  testID?: string;
}
