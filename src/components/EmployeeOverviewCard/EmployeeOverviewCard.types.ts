import type { ReactNode } from 'react';

export interface EmployeeOverviewCardEmployee {
  name: string;
  sector: string;
  avatarUri?: string;
}

export interface EmployeeOverviewCardProps {
  employee: EmployeeOverviewCardEmployee;
  progress?: number;
  /** Batimento; null mostra "--" no lugar do numero (sem leitura). */
  bpm: number | null;
  /** Pressao ja formatada; null mostra "--" (sem medicao). */
  pressure: string | null;
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
