/**
 * Native Silhouette implementation (RN — iOS/Android).
 *
 * Web build picks Silhouette.web.tsx instead. See Icon.web.tsx for why
 * this split exists (react-native-svg ESM/CJS interop breaks Vite).
 */
import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
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
    <Svg
      width={w}
      height={h}
      viewBox={`0 0 ${data.width} ${data.height}`}
      testID={testID}
      accessibilityLabel={accessibilityLabel ?? `silhouette ${gender}`}
      accessibilityRole="image"
    >
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={theme.content.primary} />
          <Stop offset="1" stopColor={theme.surface.accent} />
        </LinearGradient>
      </Defs>
      <Path d={data.body} fill={`url(#${gradientId})`} />
      {showHeart ? <Path d={data.heart} fill={theme.content.dark} /> : null}
    </Svg>
  );
};

Silhouette.displayName = 'Silhouette';
