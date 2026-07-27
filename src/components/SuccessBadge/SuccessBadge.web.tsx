/**
 * Web SuccessBadge — plain SVG, no react-native-svg.
 *
 * Mirrors Icon.web.tsx rationale: RN-Web forwards non-RN DOM children straight
 * through, so a plain <svg> works and avoids the react-native-svg/Vite interop
 * issues. API matches SuccessBadge.tsx exactly.
 */
import React from 'react';
import { View } from 'react-native';
import { elevation } from '../../tokens';
import { useTheme } from '../../theme';
import { Icon } from '../Icon';
import type { SuccessBadgeProps } from './SuccessBadge.types';
import { useSvgId } from '../../utils/svgId';

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
  const gradientId = useSvgId('success-badge-grad');
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
      {/* eslint-disable react/no-unknown-property */}
      <svg
        width={size}
        height={size}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={c1} />
            <stop offset="1" stopColor={c2} />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill={`url(#${gradientId})`} />
      </svg>
      {/* zIndex: 1 keeps the icon above the absolute-positioned <svg> backdrop. */}
      <View style={{ zIndex: 1 }}>
        <Icon name={iconName} size={resolvedIconSize} color={ic} />
      </View>
    </View>
  );
};

SuccessBadge.displayName = 'SuccessBadge';
