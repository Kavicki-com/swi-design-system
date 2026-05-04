import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Label, Pill } from './CaloriesTag.styles';
import type { CaloriesTagProps } from './CaloriesTag.types';

export const CaloriesTag = forwardRef<View, CaloriesTagProps>(
  ({ value, unit = 'kcal', testID, accessibilityLabel }, ref) => {
    const text = `${value}${unit}`;
    return (
      <Pill
        ref={ref}
        testID={testID}
        accessibilityLabel={accessibilityLabel ?? text}
      >
        <Label>{text}</Label>
      </Pill>
    );
  },
);

CaloriesTag.displayName = 'CaloriesTag';
