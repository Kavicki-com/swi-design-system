import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Fill, Track } from './ProgressBar.styles';
import type { ProgressBarProps } from './ProgressBar.types';

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

export const ProgressBar = forwardRef<View, ProgressBarProps>(
  ({ value, disabled = false, color, trackColor, accessibilityLabel, testID }, ref) => {
    const pct = clamp(value, 0, 100);
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
        <Fill
          $disabled={disabled}
          style={{ width: `${pct}%`, ...(color ? { backgroundColor: color } : null) }}
        />
      </Track>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';
