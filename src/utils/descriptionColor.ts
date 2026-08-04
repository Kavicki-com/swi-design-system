import type { DefaultTheme } from 'styled-components/native';

/**
 * Variantes da legenda de um campo de formulario.
 *
 * Fonte unica pra Input, Combobox, GenderSelector e RadioGroup. Antes cada um
 * declarava a sua, e a do Combobox ja tinha nascido incompleta.
 */
export type DescriptionVariant = 'default' | 'success' | 'error' | 'warning';

export interface DescriptionColorArgs {
  $disabled?: boolean;
  $variant?: DescriptionVariant;
  theme: DefaultTheme;
}

/**
 * Cor da legenda a partir da variante.
 *
 * `disabled` vence a variante de proposito: campo desabilitado nao deve gritar
 * em vermelho por um erro que o usuario nao tem como corrigir agora.
 */
export const descriptionColor = ({
  $disabled,
  $variant,
  theme,
}: DescriptionColorArgs): string => {
  if ($disabled) return theme.content.disable;
  if ($variant === 'success') return theme.content.success;
  if ($variant === 'error') return theme.content.error;
  if ($variant === 'warning') return theme.content.warning;
  return theme.content.dark;
};
