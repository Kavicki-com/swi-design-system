export interface EmployeeOverviewCardEmployee {
  name: string;
  sector: string;
  avatarUri?: string;
}

export interface EmployeeOverviewCardProps {
  employee: EmployeeOverviewCardEmployee;
  progress?: number;
  bpm: number;
  pressure: string;
  bpmUnit?: string;
  onLocationPress?: () => void;
  onPress?: () => void;
  fullWidth?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}
