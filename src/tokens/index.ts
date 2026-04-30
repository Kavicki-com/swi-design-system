import { semantic } from './semantic';
import { typography, fontFamily, fontWeight, fontSize } from './typography';
import { elevation } from './effects';

export const theme = {
  ...semantic,
  typography,
  fontFamily,
  fontWeight,
  fontSize,
  elevation,
} as const;

export type Theme = typeof theme;

export { primitive } from './primitive';
export { semantic } from './semantic';
export { typography, fontFamily, fontWeight, fontSize } from './typography';
export type { TypographyVariant } from './typography';
export { elevation } from './effects';
