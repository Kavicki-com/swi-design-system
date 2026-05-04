/**
 * Native Icon implementation (RN — iOS/Android).
 *
 * Web build picks Icon.web.tsx instead. See that file for why the split
 * exists (react-native-svg ESM/CJS interop breaks Vite).
 */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconPaths } from '../../icons';
import type { IconProps } from './Icon.types';

export const Icon = ({
  name,
  size = 24,
  width,
  height,
  color = 'currentColor',
  testID,
  accessibilityLabel,
}: IconProps) => {
  const icon = iconPaths[name];
  if (!icon) return null;

  const w = width ?? size;
  const h = height ?? size;

  return (
    <Svg
      width={w}
      height={h}
      viewBox={icon.viewBox}
      fill={color}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityLabel ? 'image' : undefined}
    >
      <Path d={icon.d} fill={color} fillRule={icon.fillRule ?? 'nonzero'} />
    </Svg>
  );
};
