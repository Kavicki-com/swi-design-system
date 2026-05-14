export interface ImageUploaderValue {
  uri: string;
}

export interface ImageUploaderProps {
  value?: ImageUploaderValue | null;
  progress?: number;
  onTakePhoto?: () => void;
  onPickFile?: () => void;
  onRemove?: () => void;
  helperText?: string;
  takePhotoLabel?: string;
  pickFileLabel?: string;
  showTakePhoto?: boolean;
  /**
   * Accent color applied to the icon and label of the inner CTA buttons
   * ("Tirar Foto" / "Enviar arquivo"). Defaults to `theme.content.primary`
   * for icons and the Button outline default (`content.primaryLight`) for
   * labels. Set this to `theme.content.primary` to get the fully-saturated
   * green look the mobile my-stats screen uses (Figma `342:9907`).
   */
  accentColor?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  removeAccessibilityLabel?: string;
  testID?: string;
}
