import type { IconName } from '../../icons';

export interface SideMenuItem {
  value: string;
  label: string;
  icon?: IconName;
  disabled?: boolean;
}

export interface SideMenuProps {
  items: SideMenuItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
