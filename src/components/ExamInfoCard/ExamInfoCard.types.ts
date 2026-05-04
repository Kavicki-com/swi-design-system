export interface ExamInfoCardProps {
  year: string | number;
  date: string;
  examName: string;
  onExamPress?: () => void;
  actionLabel?: string;
  onActionPress?: () => void;
  actionDisabled?: boolean;
  fullWidth?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
