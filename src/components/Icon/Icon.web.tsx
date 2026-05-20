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
import React, { useId } from 'react';
import { iconPaths } from '../../icons';
import type { IconPath } from '../../icons/paths';
import type { IconProps } from './Icon.types';

export const Icon = ({
  name,
  size = 24,
  width,
  height,
  color = 'currentColor',
  gradient,
  testID,
  accessibilityLabel,
}: IconProps) => {
  const icon: IconPath | undefined = iconPaths[name];
  const rawId = useId();
  if (!icon) return null;

  const w = width ?? size;
  const h = height ?? size;
  const gradId = `icon-grad-${rawId.replace(/:/g, '-')}`;
  const fill = gradient ? `url(#${gradId})` : color;

  return (
    <svg
      width={w}
      height={h}
      viewBox={icon.viewBox}
      fill={color}
      data-testid={testID}
      aria-label={accessibilityLabel}
      role={accessibilityLabel ? 'img' : undefined}
    >
      {gradient ? (
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={gradient[0]} />
            <stop offset="1" stopColor={gradient[1]} />
          </linearGradient>
        </defs>
      ) : null}
      <path d={icon.d} fill={fill} fillRule={icon.fillRule ?? 'nonzero'} />
    </svg>
  );
};
