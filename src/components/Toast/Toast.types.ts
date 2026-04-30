export type ToastVariant = 'error' | 'success' | 'warning' | 'info';

export interface ToastProps {
  variant?: ToastVariant;
  title: string;
  message?: string;
  onClose?: () => void;
  accessibilityLabel?: string;
  testID?: string;
}
