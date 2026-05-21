import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Text } from '../Text';
import { useTheme } from '../../theme';
import { Pill } from './CaloriesTag.styles';
import type { CaloriesTagProps } from './CaloriesTag.types';

export const CaloriesTag = forwardRef<View, CaloriesTagProps>(
  ({ value, unit = 'kcal', testID, accessibilityLabel }, ref) => {
    const theme = useTheme();
    const text = `${value}${unit}`;
    return (
      <Pill
        ref={ref}
        testID={testID}
        accessibilityLabel={accessibilityLabel ?? text}
      >
        {/* body.s = Inter Medium 12px (resolveFontFamily mapeia weight=500
            → 'Inter-Medium' nome registrado pelo host). Label styled local
            com fontFamily:theme.fontFamily.body + fontWeight:medium causava
            text width:0 em RN porque o lookup (family, weight) falha — RN
            so encontra fonte por nome exato registrado. */}
        <Text variant="body.s" color={theme.content.dark}>{text}</Text>
      </Pill>
    );
  },
);

CaloriesTag.displayName = 'CaloriesTag';
