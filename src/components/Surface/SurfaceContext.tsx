import { createContext, useContext } from 'react';
import type { SurfaceVariant } from './Surface.types';

const DARK_BG_VARIANTS: Set<SurfaceVariant> = new Set([
  'standard',
  'medium',
  'high',
]);

export type SurfaceTone = 'dark' | 'light' | 'disabled';

export const toneForVariant = (variant: SurfaceVariant): SurfaceTone => {
  if (variant === 'disable') return 'disabled';
  return DARK_BG_VARIANTS.has(variant) ? 'dark' : 'light';
};

export const isLightBgVariant = (variant: SurfaceVariant): boolean =>
  toneForVariant(variant) === 'light';

export interface SurfaceContextValue {
  tone: SurfaceTone;
}

export const SurfaceContext = createContext<SurfaceContextValue>({ tone: 'dark' });

export const useSurfaceTone = () => useContext(SurfaceContext);
