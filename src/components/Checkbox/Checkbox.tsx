import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Box, Check, Container, Label } from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<View, CheckboxProps>(
  (
    {
      checked,
      onChange,
      label,
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
        accessibilityRole="checkbox"
        accessibilityState={{ checked, disabled }}
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint={accessibilityHint}
        testID={testID}
      >
        <Box $size={size}>{checked ? <Check $size={size}>✓</Check> : null}</Box>
        {label ? <Label $size={size}>{label}</Label> : null}
      </Container>
    );
  },
);

Checkbox.displayName = 'Checkbox';
