import type { ReactNode } from 'react';
import type { PressableProps } from 'react-native';

/**
 * Button variants:
 * - `contained`: primary CTA — green `surface.primary` bg, dark text. The
 *   default attention-grabber.
 * - `outline`: secondary action — transparent bg, primary-light border.
 * - `ghost`: tertiary action — fully transparent until hover, no border.
 * - `surface`: dark CTA for overlay contexts (maps, images, modals) — dark
 *   `surface.standard` bg, light text, elevation md. Used when the button
 *   must read against unpredictable backgrounds (e.g. "Voltar ao dashboard"
 *   floating over a satellite map per Figma `32:2502`).
 */
export type ButtonVariant = 'contained' | 'outline' | 'ghost' | 'surface';

/**
 * Button size:
 * - `default`: 12px padding all sides; full-size CTA.
 * - `small`: 8px vertical, 12px horizontal padding (~32px tall) — pairs
 *   visually with `Tabs` in compact filter rows.
 */
export type ButtonSize = 'default' | 'small';

export interface ButtonProps
  extends Pick<
    PressableProps,
    | 'onPress'
    | 'onLongPress'
    | 'disabled'
    | 'accessibilityLabel'
    | 'accessibilityHint'
    | 'testID'
  > {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  /**
   * Render the label with an underline. Primarily intended for `variant="ghost"`
   * link-style buttons (e.g. "Política de privacidade & Termos de uso" on the
   * Mobile sign-up screen, Figma `213:13784`). Default `false`.
   */
  underline?: boolean;
}
