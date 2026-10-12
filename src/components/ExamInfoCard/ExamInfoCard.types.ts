/** Ações só-ícone do cartão, na ordem view, download, remove. */
export type ExamAction = 'view' | 'download' | 'remove';

export interface ExamInfoCardProps {
  year: string | number;
  date: string;
  examName: string;
  onExamPress?: () => void;
  actionLabel?: string;
  onActionPress?: () => void;
  actionDisabled?: boolean;
  /**
   * Cluster de ações só-ícone (visualizar, baixar, excluir) no lugar do botão
   * único de baixar. Cada ação aparece só com o handler correspondente, sempre
   * na ordem view, download, remove. Usa os mesmos ícones e cores da
   * `AttachmentList`. Quando `actions` é passado e não vazio, o botão único
   * (`onActionPress`/`actionLabel`) não é renderizado.
   */
  actions?: ReadonlyArray<ExamAction>;
  onView?: () => void;
  onDownload?: () => void;
  onRemove?: () => void;
  /** Ação em andamento (ex.: excluindo): desabilita o cluster. */
  actionsBusy?: boolean;
  /** Rótulos de acessibilidade de cada botão do cluster. */
  viewAccessibilityLabel?: string;
  downloadAccessibilityLabel?: string;
  removeAccessibilityLabel?: string;
  fullWidth?: boolean;
  /**
   * Compact layout for sidebar lists (e.g. admin profile exam history,
   * Figma `159:15646`): tight single-row, no fixed inner widths, no
   * underline on examName, action button rendered as an icon-only
   * download button instead of a labelled `Button`. Default `false`.
   */
  compact?: boolean;
  /**
   * Mute the year/date/exam-name text colors to indicate a past or
   * inactive exam. Action button styling is unaffected. Used on mobile
   * my-stats to dim out-of-window history entries (Figma `342:9907`).
   */
  past?: boolean;
  /**
   * Switch the `compact` row to the mobile metric spec instead of the
   * default admin/sidebar spec. Affects card padding (8 all-sides),
   * gap (12), year text (Inter Bold 14 instead of Montserrat Bold 16),
   * date text (Inter Medium 12 instead of Regular 14), action button
   * (4px all-sides padding + drop shadow). Required for mobile
   * `my-stats` (Figma `342:9907`) and `settings/health-data`
   * (Figma `353:12057`). No effect when `compact` is false.
   */
  mobile?: boolean;
  /**
   * Render the year text in regular weight (instead of bold) to
   * indicate an upcoming / future exam. Per Figma the last exam in a
   * history list (e.g. `342:9911`, `361:12380`) renders this way. Only
   * meaningful in `mobile compact` mode.
   */
  future?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
