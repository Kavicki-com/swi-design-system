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
  disabled?: boolean;
  accessibilityLabel?: string;
  removeAccessibilityLabel?: string;
  testID?: string;
}
