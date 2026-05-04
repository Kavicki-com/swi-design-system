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
  color = 'currentColor',
  testID,
  accessibilityLabel,
}: IconProps) => {
  const icon = iconPaths[name];
  if (!icon) return null;

  return (
    <Svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill={color}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityLabel ? 'image' : undefined}
    >
      <Path d={icon.d} fill={color} />
    </Svg>
  );
};
