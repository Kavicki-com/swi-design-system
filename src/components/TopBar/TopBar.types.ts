export interface TopBarProps {
  /** Page title shown right-aligned, content.dark. Required. */
  title: string;
  /** Back-button press handler. When provided, the chevron+label
   *  renders and is interactive; when omitted, the back slot is hidden. */
  onBack?: () => void;
  /** Override the back-button label. Defaults to "Voltar". */
  backLabel?: string;
  accessibilityLabel?: string;
  testID?: string;
}
