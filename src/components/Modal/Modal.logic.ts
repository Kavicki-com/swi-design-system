import type { IconName } from '../../icons';
import type { Theme } from '../../tokens';
import type { ModalValidation } from './Modal.types';

/** Textos e ícone de cada variante, como o Figma desenha (461:10263). */
export function modalDefaults(validation: ModalValidation): {
  icon: IconName;
  confirmLabel: string;
  cancelLabel: string | null;
} {
  return validation === 'error'
    ? { icon: 'delete_forever', confirmLabel: 'Sim', cancelLabel: 'Não' }
    : { icon: 'check_circle', confirmLabel: 'Continuar', cancelLabel: null };
}

/** Cor do ícone e do título (`accent`) e fundo do botão de confirmar. */
export function modalTone(
  validation: ModalValidation,
  theme: Pick<Theme, 'content' | 'surface'>,
): { accent: string; confirmBackground: string } {
  return validation === 'error'
    ? { accent: theme.content.error, confirmBackground: theme.surface.error }
    : { accent: theme.content.success, confirmBackground: theme.surface.success };
}

/**
 * O que Esc e o clique fora fazem. No erro, valem como "Não"; sem `onCancel`,
 * nada, para uma exclusão nunca ser confirmada sem querer. No sucesso, fechar
 * por fora é dar ciência, o mesmo que "Continuar".
 */
export function dismissAction(
  validation: ModalValidation,
  onCancel: (() => void) | undefined,
  onConfirm: () => void,
): (() => void) | undefined {
  if (validation === 'error') return onCancel;
  return onCancel ?? onConfirm;
}
