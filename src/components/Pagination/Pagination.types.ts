export interface PaginationProps {
  /** Current 1-indexed page. */
  currentPage: number;
  /** Total number of pages. The strip hides itself when this is 1 or less. Defaults to 4. */
  pageCount?: number;
  /**
   * Quantidade maxima de botoes numerados na janela visivel. Acima disso a
   * tira desliza ao redor da pagina atual e mostra "...". Padrao 4 (Figma).
   */
  maxButtons?: number;
  /** Called when the user taps a numbered button or the next-page chevron. */
  onPageChange: (page: number) => void;
  /** Called when the user taps the overflow "..." button. */
  onOverflowPress?: () => void;
  testID?: string;
}
