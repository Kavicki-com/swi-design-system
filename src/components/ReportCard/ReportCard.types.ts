import type { StatusTagStatus } from '../StatusTag';

export interface ReportCardAuthor {
  name: string;
  avatarUri?: string;
}

export interface ReportCardProps {
  status: StatusTagStatus;
  statusLabel?: string;
  title: string;
  summary: string;
  summaryLabel?: string;
  creationDate: string;
  creationDateLabel?: string;
  author: ReportCardAuthor;
  authorLabel?: string;
  location?: string;
  responsibles?: string;
  responsiblesLabel?: string;
  onPress?: () => void;
  fullWidth?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}
