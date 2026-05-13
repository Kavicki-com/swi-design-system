export interface ExamInfoCardProps {
  year: string | number;
  date: string;
  examName: string;
  onExamPress?: () => void;
  actionLabel?: string;
  onActionPress?: () => void;
  actionDisabled?: boolean;
  fullWidth?: boolean;
  /**
   * Compact layout for sidebar lists (e.g. admin profile exam history,
   * Figma `159:15646`): tight single-row, no fixed inner widths, no
   * underline on examName, action button rendered as an icon-only
   * download button instead of a labelled `Button`. Default `false`.
   */
  compact?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
