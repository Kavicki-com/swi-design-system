import { semantic } from './semantic';
import { typography, fontFamily, fontWeight, fontSize } from './typography';
import { elevation, SHADOW_COLOR, OVERLAY_COLOR } from './effects';

/**
 * `shadow.color` is the canonical drop-shadow color for ad-hoc
 * `shadowColor` callsites (RN `Image`/`View` shadow API). For preset
 * elevations prefer the `elevation` token bundle.
 *
 * `overlay` is the backdrop scrim color for modal routes. Apply as
 * `backgroundColor` on the modal's outer wrapper.
 */
const shadow = { color: SHADOW_COLOR } as const;
const overlay = OVERLAY_COLOR;

export const theme = {
  ...semantic,
  typography,
  fontFamily,
  fontWeight,
  fontSize,
  elevation,
  shadow,
  overlay,
} as const;

export type Theme = typeof theme;

export { primitive } from './primitive';
export { semantic } from './semantic';
export { typography, fontFamily, fontWeight, fontSize } from './typography';
export type { TypographyVariant } from './typography';
export { elevation, SHADOW_COLOR, OVERLAY_COLOR } from './effects';
