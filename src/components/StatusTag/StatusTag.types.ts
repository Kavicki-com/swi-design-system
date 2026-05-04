export type StatusTagStatus = 'canceled' | 'pending' | 'accept';

export interface StatusTagProps {
  status?: StatusTagStatus;
  label?: string;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
