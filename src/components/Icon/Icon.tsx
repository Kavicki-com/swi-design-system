/**
 * Native Icon implementation (RN — iOS/Android).
 *
 * Web build picks Icon.web.tsx instead. See that file for why the split
 * exists (react-native-svg ESM/CJS interop breaks Vite).
 */
import React, { useId } from 'react';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Path, Stop } from 'react-native-svg';
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
    <Svg
      width={w}
      height={h}
      viewBox={icon.viewBox}
      fill={color}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityLabel ? 'image' : undefined}
    >
      {gradient ? (
        <Defs>
          <SvgLinearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={gradient[0]} />
            <Stop offset="1" stopColor={gradient[1]} />
          </SvgLinearGradient>
        </Defs>
      ) : null}
      <Path d={icon.d} fill={fill} fillRule={icon.fillRule ?? 'nonzero'} />
    </Svg>
  );
};
