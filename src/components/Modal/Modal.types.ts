import type { IconName } from '../../icons';

/**
 * Variante do Modal da biblioteca do Figma (461:10263):
 * - `error`: confirmação de ação irreversível ("EXCLUIR", Sim e Não).
 * - `success`: aviso de conclusão ("sucesso!", Continuar).
 */
export type ModalValidation = 'error' | 'success';

export interface ModalProps {
  visible: boolean;
  /** Padrão `error`, como o Figma. */
  validation?: ModalValidation;
  title: string;
  description?: string;
  /** Ícone acima do título. Padrão: lixeira no erro, check no sucesso. */
  icon?: IconName;
  /** Padrão: "Sim" no erro, "Continuar" no sucesso. */
  confirmLabel?: string;
  /** Rótulo do botão fantasma do erro. Padrão "Não". O sucesso não tem cancelar. */
  cancelLabel?: string;
  onConfirm: () => void;
  /**
   * Não no erro. Esc e clique fora chamam o mesmo handler; no erro sem ele,
   * fechar por fora não faz nada, para não confirmar sem querer. No sucesso,
   * fechar por fora cai no `onConfirm` quando este não vem.
   */
  onCancel?: () => void;
  testID?: string;
}
