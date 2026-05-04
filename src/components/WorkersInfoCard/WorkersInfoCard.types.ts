import type { IconName } from '../../icons';

export interface WorkersInfoCardEmployee {
  name: string;
  age: number | string;
  bloodType: string;
  role: string;
  secondaryRole?: string;
  avatarUri?: string;
}

export interface WorkersInfoCardAlert {
  icon: IconName;
  title: string;
  description: string;
}

export interface WorkersInfoCardProps {
  employee: WorkersInfoCardEmployee;
  enabled?: boolean;
  onEnabledChange?: (enabled: boolean) => void;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  alerts?: WorkersInfoCardAlert[];
  onDelete?: () => void;
  onChat?: () => void;
  onLocation?: () => void;
  onExamHistory?: () => void;
  onCallEmployee?: () => void;
  onSendBreakAlert?: () => void;
  examHistoryLabel?: string;
  callEmployeeLabel?: string;
  sendBreakAlertLabel?: string;
  fullWidth?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}
