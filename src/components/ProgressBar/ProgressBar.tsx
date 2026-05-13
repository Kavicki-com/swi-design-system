import React, { forwardRef } from 'react';
import { View as RNView, type View } from 'react-native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Rect, Stop } from 'react-native-svg';
import { Fill, Track } from './ProgressBar.styles';
import type { ProgressBarProps } from './ProgressBar.types';

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

export const ProgressBar = forwardRef<View, ProgressBarProps>(
  (
    {
      value,
      disabled = false,
      color,
      trackColor,
      gradient,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const pct = clamp(value, 0, 100);
    const useGradient = !disabled && gradient && gradient.length >= 2;

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
        {useGradient ? (
          <RNView style={{ width: `${pct}%`, height: 6, overflow: 'hidden' }}>
            <Svg
              width="100%"
              height="100%"
              viewBox="0 0 100 6"
              preserveAspectRatio="none"
            >
              <Defs>
                <SvgLinearGradient
                  id="pb-gradient"
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  {gradient!.map((stop, i) => (
                    <Stop
                      key={`${stop}-${i}`}
                      offset={`${(i / (gradient!.length - 1)) * 100}%`}
                      stopColor={stop}
                    />
                  ))}
                </SvgLinearGradient>
              </Defs>
              <Rect x={0} y={0} width={100} height={6} fill="url(#pb-gradient)" />
            </Svg>
          </RNView>
        ) : (
          <Fill
            $disabled={disabled}
            style={{ width: `${pct}%`, ...(color ? { backgroundColor: color } : null) }}
          />
        )}
      </Track>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';
