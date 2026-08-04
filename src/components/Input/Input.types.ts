import type { ReactNode } from 'react';
import type { TextInputProps } from 'react-native';

/**
 * Color variant for the description slot below the input.
 * - `default`: neutral content.dark (default behavior — backwards-compatible)
 * - `success`: content.success — used for confirmation messages ("As senhas são iguais ✓")
 * - `error`: content.error — used for validation errors
 * - `warning`: content.warning — used for non-blocking warnings
 */
export type InputDescriptionVariant = 'default' | 'success' | 'error' | 'warning';

/**
 * Font weight of the label text. Default `'bold'` matches the DS spec
 * for login / settings / most flows. Sign-up's Figma `138:7963` calls for
 * `'regular'` labels — use this prop to override.
 */
export type InputLabelWeight = 'regular' | 'medium' | 'bold';

export interface InputProps
  extends Omit<TextInputProps, 'editable' | 'style' | 'placeholderTextColor'> {
  label?: string;
  /** Weight of the label text. Defaults to `'bold'`. */
  labelWeight?: InputLabelWeight;
  description?: string;
  descriptionVariant?: InputDescriptionVariant;
  iconRight?: ReactNode;
  disabled?: boolean;
  /**
   * Mostra o contador `usado/limite` (ex. `128/240`) abaixo do campo,
   * alinhado a direita, na mesma linha da `description`. Exige `maxLength`;
   * sem limite o contador nao aparece.
   *
   * Caveat (modo NAO controlado): `ref.current?.clear()` limpa o texto sem
   * disparar onChangeText (comportamento do RN), entao o contador so zera na
   * proxima digitacao. Controlado (`value`), o contador segue o value sempre.
   */
  counter?: boolean;
}
