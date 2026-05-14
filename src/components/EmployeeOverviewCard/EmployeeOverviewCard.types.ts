import type { ReactNode } from 'react';

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
  /** Override the default LocationButton on the right side with a custom
   *  element (e.g. a contained `Button` for the alerts-rescue-route card,
   *  Figma 101:7209). When provided, `onLocationPress` is ignored. */
  actionElement?: ReactNode;
  /** Override the card's border color. Used to highlight the card when an
   *  employee is in an alerting state (Figma 101:7209 uses content.error). */
  borderColor?: string;
  testID?: string;
  accessibilityLabel?: string;
}
