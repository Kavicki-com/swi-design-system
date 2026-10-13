import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Pressable, type TextInput as RNTextInput } from 'react-native';
import { useTheme } from '../../theme';
import { Icon } from '../Icon';
import { counterText, resolveLength, shouldShowCounter } from './Input.counter';
import { passwordEyeIcon, passwordEyeLabel } from './Input.password';
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
      passwordToggle = false,
      secureTextEntry,
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
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Com o olho embutido o Input manda no segredo; senao respeita o que veio.
    const secure = passwordToggle ? !passwordVisible : secureTextEntry;
    const rightSlot = passwordToggle ? (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={passwordEyeLabel(passwordVisible)}
        disabled={disabled}
        onPress={() => setPasswordVisible((v) => !v)}
        hitSlop={8}
      >
        <Icon
          name={passwordEyeIcon(passwordVisible)}
          size={20}
          color={disabled ? theme.content.disable : theme.content.dark}
        />
      </Pressable>
    ) : (
      iconRight
    );

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
            secureTextEntry={secure}
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
          {rightSlot ? <IconSlot>{rightSlot}</IconSlot> : null}
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
