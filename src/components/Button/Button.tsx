import React, { forwardRef, useState } from 'react';
import { type View } from 'react-native';
import { elevation } from '../../tokens';
import { Container, HoverOverlay, IconSlot, Label, PressedOverlay } from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      label,
      variant = 'contained',
      iconLeft,
      iconRight,
      disabled: disabledProp = false,
      fullWidth = false,
      onPress,
      onLongPress,
      accessibilityLabel,
      accessibilityHint,
      testID,
    },
    ref,
  ) => {
    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);

    const disabled = disabledProp ?? false;
    const showDropShadow = variant === 'contained' && !disabled && !pressed;
    const showHoverOverlay = variant === 'contained' && hovered && !pressed && !disabled;
    const showPressedOverlay = pressed && !disabled;

    return (
      <Container
        ref={ref}
        $variant={variant}
        $hovered={hovered}
        $pressed={pressed}
        $disabled={disabled}
        $fullWidth={fullWidth}
        style={showDropShadow ? elevation.sm : undefined}
        disabled={disabled}
        onPress={disabled ? undefined : onPress}
        onLongPress={disabled ? undefined : onLongPress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityHint={accessibilityHint}
        testID={testID}
      >
        {iconLeft ? <IconSlot>{iconLeft}</IconSlot> : null}
        <Label $variant={variant} $hovered={hovered} $disabled={disabled}>
          {label}
        </Label>
        {iconRight ? <IconSlot>{iconRight}</IconSlot> : null}
        {showHoverOverlay ? <HoverOverlay /> : null}
        {showPressedOverlay ? <PressedOverlay style={elevation.negative} /> : null}
      </Container>
    );
  },
);

Button.displayName = 'Button';
