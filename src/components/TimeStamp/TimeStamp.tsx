import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Text } from '../Text';
import { useTheme } from '../../theme';
import { Pill, Triangle } from './TimeStamp.styles';
import type { TimeStampProps } from './TimeStamp.types';

export const TimeStamp = forwardRef<View, TimeStampProps>(
  ({ time, testID, accessibilityLabel }, ref) => {
    const theme = useTheme();
    return (
      <Pill
        ref={ref}
        testID={testID}
        accessibilityLabel={accessibilityLabel ?? time}
      >
        <Triangle />
        {/* caption.xs = Inter Bold 8px (resolveFontFamily mapeia weight=700
            → 'Inter-Bold' nome registrado pelo host). Label styled local
            com fontFamily:body + fontWeight:bold falhava o lookup em RN. */}
        <Text variant="caption.xs" color={theme.content.light}>{time}</Text>
      </Pill>
    );
  },
);

TimeStamp.displayName = 'TimeStamp';
