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
      size = 'default',
      shape = 'rounded',
      elevation: elevationProp = 'sm',
      backgroundColor,
      borderColor,
      borderWidth,
      iconLeft,
      iconRight,
      disabled: disabledProp = false,
      fullWidth = false,
      underline = false,
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
    const showDropShadow =
      variant === 'contained' && !disabled && !pressed && elevationProp !== 'none';
    const shadowStyle =
      elevationProp === 'none' ? undefined : elevation[elevationProp as 'sm' | 'md' | 'lg'];
    const showHoverOverlay = variant === 'contained' && hovered && !pressed && !disabled;
    const showPressedOverlay = pressed && !disabled;
    const hasLabel = typeof label === 'string' && label.length > 0;

    return (
      <Container
        ref={ref}
        $variant={variant}
        $size={size}
        $shape={shape}
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        $borderWidth={borderWidth}
        $hovered={hovered}
        $pressed={pressed}
        $disabled={disabled}
        $fullWidth={fullWidth}
        style={showDropShadow ? shadowStyle : undefined}
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
        {hasLabel ? (
          <Label $variant={variant} $hovered={hovered} $disabled={disabled} $underline={underline}>
            {label}
          </Label>
        ) : null}
        {iconRight ? <IconSlot>{iconRight}</IconSlot> : null}
        {showHoverOverlay ? <HoverOverlay $shape={shape} /> : null}
        {showPressedOverlay ? (
          <PressedOverlay $shape={shape} style={elevation.negative} />
        ) : null}
      </Container>
    );
  },
);

Button.displayName = 'Button';
