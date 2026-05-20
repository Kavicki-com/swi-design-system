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
 * - `xlarge`: 20px padding all sides. Used for the prominent Chat action
 *   on the Dashboard (Figma `304:2742`).
 */
export type ButtonSize = 'default' | 'small' | 'large' | 'xlarge';

/**
 * Button shape:
 * - `rounded`: 8px corner radius (default; matches form/CTA buttons).
 * - `pill`: full pill radius (999px). Used for round icon-only action
 *   buttons (Dashboard map controls, etc.).
 */
export type ButtonShape = 'rounded' | 'pill';

/**
 * Font family of the label text.
 * - `'title'` (default): Montserrat — DS spec for most buttons.
 * - `'body'`: Inter — used by Mobile sign-up "Política de privacidade & Termos
 *   de uso" ghost link (Figma `213:13784`) which calls for Inter Regular
 *   underlined, distinct from login's Montserrat Bold variant.
 */
export type ButtonLabelFamily = 'title' | 'body';

/**
 * Font weight of the label text. Default `'bold'` matches the DS spec.
 * Override to `'regular'` or `'medium'` when the Figma calls for a lighter
 * inline-link style (e.g. sign-up's Inter Regular underlined ghost button).
 */
export type ButtonLabelWeight = 'regular' | 'medium' | 'bold';

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
  /**
   * Drop-shadow elevation token. Defaults to `'sm'` for `variant === 'contained'`
   * (current behavior). Use `'lg'` for prominent CTAs (Dashboard Location/Chat/Help)
   * or `'none'` to disable. Outline/ghost variants ignore this.
   */
  elevation?: 'sm' | 'md' | 'lg' | 'none';
  /**
   * Override the container background color. Most useful with
   * `variant === 'contained'`, where the default is `theme.surface.primary`.
   * Used by Dashboard's Chat (surface.success) and Help (surface.danger)
   * buttons per Figma `245:23280`.
   */
  backgroundColor?: string;
  /**
   * Override the border color. Applies to any variant — for non-outline
   * variants the default border is transparent, so setting this opts in to a
   * visible border on `contained`/`ghost`/`surface` (e.g. the two-tone
   * mobile my-stats Home FAB, Figma `348:10334`: light bg + thick dark
   * border + pill shape). For `variant === 'outline'`, defaults to
   * `theme.content.primaryLight`.
   */
  borderColor?: string;
  /**
   * Override the label color. Overrides the variant default. Useful when an
   * outline button needs a fully-saturated `content.primary` label instead of
   * the default `content.primaryLight` (e.g. Mobile my-stats "Enviar novo
   * exame" CTA, Figma `342:9907`). When `disabled` the disabled tone wins.
   */
  labelColor?: string;
  /**
   * Border thickness. Token-based or arbitrary pixel value.
   * - `'s'`: 1px (matches `border.size.s`).
   * - `'m'`: 2px (default; matches `border.size.m`). Used for emphasized
   *   outline buttons like the Dashboard "Work" CTA (Figma `304:2685`).
   * - `number`: explicit width in pixels — required for non-token thicknesses
   *   like the my-stats Home FAB's 10.286px (Figma `348:10334`).
   *
   * Pair with `borderColor` to make the border visible on non-outline
   * variants (default border color is transparent off-outline).
   */
  borderWidth?: 's' | 'm' | number;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  /**
   * Render the label with an underline. Primarily intended for `variant="ghost"`
   * link-style buttons (e.g. "Política de privacidade & Termos de uso" on the
   * Mobile sign-up screen, Figma `213:13784`). Default `false`.
   */
  underline?: boolean;
  /**
   * Font family of the label text. Defaults to `'title'` (Montserrat — DS spec).
   * Use `'body'` (Inter) for inline-link ghost buttons where the Figma calls
   * for body-family typography (sign-up's Privacy link, Figma `213:13784`).
   */
  labelFamily?: ButtonLabelFamily;
  /**
   * Font weight of the label text. Defaults to `'bold'`. Override to
   * `'regular'` / `'medium'` for lighter inline-link styles.
   */
  labelWeight?: ButtonLabelWeight;
}
