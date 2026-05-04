/**
 * Web Silhouette implementation. See Icon.web.tsx for why the split exists.
 */
import React from 'react';
import { useTheme } from '../../theme';
import { SILHOUETTE_PATHS } from './Silhouette.paths';
import type { SilhouetteProps } from './Silhouette.types';

export const Silhouette = ({
  gender = 'male',
  height,
  showHeart = true,
  testID,
  accessibilityLabel,
}: SilhouetteProps) => {
  const theme = useTheme();
  const data = SILHOUETTE_PATHS[gender];
  const h = height ?? data.height;
  const w = (h * data.width) / data.height;
  const gradientId = `silhouette-gradient-${gender}`;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${data.width} ${data.height}`}
      data-testid={testID}
      aria-label={accessibilityLabel ?? `silhouette ${gender}`}
      role="img"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={theme.content.primary} />
          <stop offset="1" stopColor={theme.surface.accent} />
        </linearGradient>
      </defs>
      <path d={data.body} fill={`url(#${gradientId})`} />
      {showHeart ? <path d={data.heart} fill={theme.content.dark} /> : null}
    </svg>
  );
};

Silhouette.displayName = 'Silhouette';
