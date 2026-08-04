import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { type TextInput as RNTextInput } from 'react-native';
import { useTheme } from '../../theme';
import { counterText, resolveLength, shouldShowCounter } from './Input.counter';
import {
  BottomRow,
  Container,
  Counter,
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
      counter = false,
      value,
      defaultValue,
      maxLength,
      onChangeText,
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

    // Num Input nao controlado o RN nao reexpoe o texto atual; o contador
    // depende de observar o onChangeText. Controlado, o `value` e a verdade.
    const [innerLength, setInnerLength] = useState(
      typeof defaultValue === 'string' ? defaultValue.length : 0,
    );
    const counterLabel =
      shouldShowCounter(counter, maxLength) && maxLength != null
        ? counterText(resolveLength(value, innerLength), maxLength)
        : null;

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
            value={value}
            defaultValue={defaultValue}
            maxLength={maxLength}
            $disabled={disabled}
            editable={!disabled}
            placeholderTextColor={disabled ? theme.content.disable : theme.content.medium}
            onChangeText={(text) => {
              // So no modo NAO controlado: controlado, resolveLength le o
              // value e o update interno seria um render a toa por tecla.
              if (value === undefined) setInnerLength(text.length);
              onChangeText?.(text);
            }}
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
        {description || counterLabel ? (
          <BottomRow>
            {description ? (
              <Description $disabled={disabled} $variant={descriptionVariant}>
                {description}
              </Description>
            ) : null}
            {counterLabel ? <Counter $disabled={disabled}>{counterLabel}</Counter> : null}
          </BottomRow>
        ) : null}
      </Container>
    );
  },
);

Input.displayName = 'Input';
