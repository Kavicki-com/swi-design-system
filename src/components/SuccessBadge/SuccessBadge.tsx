/**
 * Native SuccessBadge implementation (RN — iOS/Android).
 *
 * Web build picks SuccessBadge.web.tsx instead. The split mirrors Icon —
 * react-native-svg has ESM/CJS interop quirks under Vite, so admin web uses
 * a plain <svg>/<path> path while native uses the RN SVG primitives.
 */
import React, { useId } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { elevation } from '../../tokens';
import { useTheme } from '../../theme';
import { Icon } from '../Icon';
import type { SuccessBadgeProps } from './SuccessBadge.types';

export const SuccessBadge = ({
  size = 96,
  iconName = 'check',
  iconSize,
  colors,
  iconColor,
  testID,
  accessibilityLabel,
}: SuccessBadgeProps) => {
  const theme = useTheme();
  const rawId = useId();
  const gradientId = `success-badge-grad-${rawId.replace(/:/g, '-')}`;
  const resolvedIconSize = iconSize ?? Math.round(size * 0.583);
  const [c1, c2] = colors ?? [theme.surface.primary, theme.surface.secondary];
  const ic = iconColor ?? theme.content.dark;

  return (
    <View
      style={[
        {
          width: size,
          height: size,
          alignItems: 'center',
          justifyContent: 'center',
        },
        elevation.md,
      ]}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityLabel ? 'image' : undefined}
    >
      <Svg
        width={size}
        height={size}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Defs>
          <SvgLinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={c1} />
            <Stop offset="1" stopColor={c2} />
          </SvgLinearGradient>
        </Defs>
        <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={`url(#${gradientId})`} />
      </Svg>
      {/* zIndex: 1 keeps the icon above the absolute-positioned Svg backdrop
          (without this, RN-Web stacks the gradient over the icon on web). */}
      <View style={{ zIndex: 1 }}>
        <Icon name={iconName} size={resolvedIconSize} color={ic} />
      </View>
    </View>
  );
};

SuccessBadge.displayName = 'SuccessBadge';
