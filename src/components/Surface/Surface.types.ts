import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import type { semantic } from '../../tokens';

export type SurfaceVariant = keyof typeof semantic.surface;
export type SurfacePadding = keyof typeof semantic.padding;
export type SurfaceRadius = keyof typeof semantic.border.radius;

export interface SurfaceProps extends ViewProps {
  variant?: SurfaceVariant;
  padding?: SurfacePadding;
  radius?: SurfaceRadius;
  children: ReactNode;
}
