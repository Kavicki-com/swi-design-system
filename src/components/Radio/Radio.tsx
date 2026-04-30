import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Container, Dot, Label, Ring } from './Radio.styles';
import type { RadioProps } from './Radio.types';

export const Radio = forwardRef<View, RadioProps>(
  (
    {
      label,
      checked,
      onChange,
      size = 'm',
      disabled = false,
      accessibilityLabel,
      accessibilityHint,
      testID,
    },
    ref,
  ) => {
    const handlePress = () => {
      if (disabled) return;
      onChange?.(!checked);
    };

    return (
      <Container
        ref={ref}
        $disabled={disabled}
        disabled={disabled}
        onPress={handlePress}
        accessibilityRole="radio"
        accessibilityState={{ checked, disabled }}
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint={accessibilityHint}
        testID={testID}
      >
        <Ring $size={size}>{checked ? <Dot $size={size} /> : null}</Ring>
        <Label>{label}</Label>
      </Container>
    );
  },
);

Radio.displayName = 'Radio';
