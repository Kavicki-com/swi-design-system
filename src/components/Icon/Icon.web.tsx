/**
 * Web-specific Icon implementation.
 *
 * Why split: react-native-svg has an ESM/CJS interop bug that breaks Vite's
 * dev server (`transform.js` is CJS but consumers do named imports). React
 * Native Web passes any non-RN DOM children straight through to the DOM, so
 * on web we render a plain <svg>/<path> and skip react-native-svg entirely.
 *
 * Native build uses Icon.tsx (react-native-svg). API is identical.
 */
import React from 'react';
import { iconPaths } from '../../icons';
import type { IconProps } from './Icon.types';

export const Icon = ({
  name,
  size = 24,
  color = 'currentColor',
  testID,
  accessibilityLabel,
}: IconProps) => {
  const icon = iconPaths[name];
  if (!icon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill={color}
      data-testid={testID}
      aria-label={accessibilityLabel}
      role={accessibilityLabel ? 'img' : undefined}
    >
      <path d={icon.d} fill={color} />
    </svg>
  );
};
