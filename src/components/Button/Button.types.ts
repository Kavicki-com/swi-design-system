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
 * - `large`: 16px padding all sides. Used for round icon-only action buttons
 *   on the Dashboard (Figma `245:23280` — location, camera, work, etc.).
 */
export type ButtonSize = 'default' | 'small' | 'large';

/**
 * Button shape:
 * - `rounded`: 8px corner radius (default; matches form/CTA buttons).
 * - `pill`: full pill radius (999px). Used for round icon-only action
 *   buttons (Dashboard map controls, etc.).
 */
export type ButtonShape = 'rounded' | 'pill';

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
  /**
   * Button label. Optional — omit for icon-only buttons (pass `iconLeft`
   * and/or `iconRight`). When omitted, the label slot is not rendered.
   */
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
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
