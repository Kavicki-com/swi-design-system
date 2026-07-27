import React, { forwardRef } from 'react';
import { View as RNView, type View } from 'react-native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Rect, Stop } from 'react-native-svg';
import { useTheme } from '../../theme';
import { Fill, Track } from './ProgressBar.styles';
import type { ProgressBarProps } from './ProgressBar.types';
import { useSvgId } from '../../utils/svgId';

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

const FILL_HEIGHT = 6;

export const ProgressBar = forwardRef<View, ProgressBarProps>(
  (
    {
      value,
      disabled = false,
      color,
      trackColor,
      gradient,
      gradientStops,
      gradientDirection = 'ltr',
      bordered = false,
      trackHeight = 22,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const pct = clamp(value, 0, 100);
    const useGradient = !disabled && gradient && gradient.length >= 2;

    // Id por instância. Um id fixo colide quando duas barras coexistem (o Stack
    // do expo-router mantém telas montadas, e listas renderizam N barras): o
    // <Defs> de uma sobrescreve o da outra e o fill some/erra a cor. Mesmo
    // padrão já usado em DonutArc e Icon. `:` do useId não é válido em url(#…).
    const gradientId = useSvgId('pb-gradient');

    // Resolve stops: explicit array (validated to length match) or
    // auto-distribute evenly across gradient length.
    const stops = (() => {
      if (!gradient) return [];
      if (gradientStops && gradientStops.length === gradient.length) {
        return gradientStops.map((s) => clamp(s, 0, 100));
      }
      const n = gradient.length;
      return gradient.map((_, i) => (i / (n - 1)) * 100);
    })();

    const gradX1 = gradientDirection === 'rtl' ? 100 : 0;
    const gradX2 = gradientDirection === 'rtl' ? 0 : 100;

    // The visible fill — same SVG render in both bordered/non-bordered modes.
    const fillNode = useGradient ? (
      <RNView style={{ width: `${pct}%`, height: FILL_HEIGHT, overflow: 'hidden' }}>
        <Svg
          width="100%"
          height="100%"
          viewBox={`0 0 100 ${FILL_HEIGHT}`}
          preserveAspectRatio="none"
        >
          <Defs>
            <SvgLinearGradient
              id={gradientId}
              x1={gradX1}
              y1="0"
              x2={gradX2}
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              {gradient!.map((stopColor, i) => (
                <Stop
                  key={`${stopColor}-${i}`}
                  offset={`${stops[i]}%`}
                  stopColor={stopColor}
                />
              ))}
            </SvgLinearGradient>
          </Defs>
          <Rect
            x={0}
            y={0}
            width={100}
            height={FILL_HEIGHT}
            fill={`url(#${gradientId})`}
          />
        </Svg>
      </RNView>
    ) : (
      <Fill
        $disabled={disabled}
        style={{ width: `${pct}%`, ...(color ? { backgroundColor: color } : null) }}
      />
    );

    // Bordered mode: outer pill frame with border + background, fill inside
    // with symmetric padding. Matches Figma `342:9447`.
    if (bordered) {
      const innerPad = Math.max(0, (trackHeight - FILL_HEIGHT) / 2);
      return (
        <RNView
          ref={ref}
          accessibilityRole="progressbar"
          accessibilityLabel={accessibilityLabel}
          accessibilityState={{ disabled }}
          accessibilityValue={{ min: 0, max: 100, now: pct }}
          testID={testID}
          style={{
            height: trackHeight,
            alignSelf: 'stretch',
            borderRadius: theme.border.radius.pill,
            borderWidth: 1,
            borderColor: theme.content.medium,
            backgroundColor: trackColor ?? theme.background,
            paddingHorizontal: innerPad,
            paddingVertical: innerPad,
            justifyContent: 'center',
            opacity: disabled ? 0.6 : 1,
            overflow: 'hidden',
          }}
        >
          {fillNode}
        </RNView>
      );
    }

    // Default: flat track, fill flush to edges.
    return (
      <Track
        ref={ref}
        $disabled={disabled}
        accessibilityRole="progressbar"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled }}
        accessibilityValue={{ min: 0, max: 100, now: pct }}
        testID={testID}
        style={trackColor ? { backgroundColor: trackColor } : undefined}
      >
        {fillNode}
      </Track>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';
