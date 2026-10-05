export type ToastVariant = 'error' | 'success' | 'warning' | 'info';

export interface ToastAction {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
}

export interface ToastProps {
  variant?: ToastVariant;
  title: string;
  message?: string;
  /**
   * Botão no fim da faixa, como o "Evacuar área" do alerta de chuva do painel
   * (Figma Desktop 103:10746): Button contido na cor forte da variante. Fica
   * antes do fechar quando os dois são passados.
   */
  action?: ToastAction;
  onClose?: () => void;
  accessibilityLabel?: string;
  testID?: string;
}
