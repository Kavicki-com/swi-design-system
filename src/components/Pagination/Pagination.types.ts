export interface PaginationProps {
  /** Current 1-indexed page. */
  currentPage: number;
  /** Total number of pages to render as numbered buttons. Defaults to 4. */
  pageCount?: number;
  /** Called when the user taps a numbered button or the next-page chevron. */
  onPageChange: (page: number) => void;
  /** Called when the user taps the overflow "..." button. */
  onOverflowPress?: () => void;
  testID?: string;
}
