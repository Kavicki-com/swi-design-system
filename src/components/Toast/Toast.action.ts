import type { DefaultTheme } from 'styled-components/native';
import type { ToastVariant } from './Toast.types';

// Cor do botão de ação: a superfície forte da mesma família da faixa. No
// alerta de chuva do painel a faixa é error-light e o botão, error.
export function actionBackground(variant: ToastVariant, theme: DefaultTheme): string {
  switch (variant) {
    case 'error':
      return theme.surface.error;
    case 'success':
      return theme.surface.success;
    case 'warning':
      return theme.surface.warning;
    case 'info':
      return theme.surface.info;
  }
}
