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

export interface InputProps
  extends Omit<TextInputProps, 'editable' | 'style' | 'placeholderTextColor'> {
  label?: string;
  description?: string;
  descriptionVariant?: InputDescriptionVariant;
  iconRight?: ReactNode;
  disabled?: boolean;
}
