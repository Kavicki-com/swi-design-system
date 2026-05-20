import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { type TextInput as RNTextInput } from 'react-native';
import { useTheme } from '../../theme';
import {
  Container,
  Description,
  HoverOverlay,
  IconSlot,
  Label,
  Row,
  StyledInput,
} from './Input.styles';
import type { InputProps } from './Input.types';

export const Input = forwardRef<RNTextInput, InputProps>(
  (
    {
      label,
      labelWeight = 'bold',
      description,
      descriptionVariant = 'default',
      iconRight,
      disabled = false,
      onFocus,
      onBlur,
      ...textInputProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const innerRef = useRef<RNTextInput>(null);
    useImperativeHandle(ref, () => innerRef.current as RNTextInput, []);

    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);

    const focusInput = () => {
      if (disabled) return;
      innerRef.current?.focus();
    };

    return (
      <Container>
        {label ? <Label $disabled={disabled} $weight={labelWeight}>{label}</Label> : null}
        <Row
          $focused={focused}
          $hovered={hovered}
          $disabled={disabled}
          onPress={focusInput}
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          accessibilityRole="none"
        >
          <StyledInput
            ref={innerRef}
            {...textInputProps}
            $disabled={disabled}
            editable={!disabled}
            placeholderTextColor={disabled ? theme.content.disable : theme.content.medium}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
          />
          {iconRight ? <IconSlot>{iconRight}</IconSlot> : null}
          {hovered && !focused && !disabled ? <HoverOverlay /> : null}
        </Row>
        {description ? (
          <Description $disabled={disabled} $variant={descriptionVariant}>
            {description}
          </Description>
        ) : null}
      </Container>
    );
  },
);

Input.displayName = 'Input';
