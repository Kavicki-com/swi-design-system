import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { type TextInput as RNTextInput } from 'react-native';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import {
  Container,
  HoverOverlay,
  IconButton,
  IconSlot,
  Row,
  StyledInput,
} from './SearchInput.styles';
import type { SearchInputProps } from './SearchInput.types';

export const SearchInput = forwardRef<RNTextInput, SearchInputProps>(
  (
    {
      value,
      defaultValue,
      placeholder = 'input-text',
      disabled = false,
      onChangeText,
      onClear,
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
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const hasValue = !!currentValue && currentValue.length > 0;

    const handleChange = (next: string) => {
      if (!isControlled) setInternalValue(next);
      onChangeText?.(next);
    };

    const handleClear = () => {
      if (disabled) return;
      handleChange('');
      onClear?.();
      innerRef.current?.focus();
    };

    const showClose = !disabled && hasValue;
    const iconColor = disabled ? theme.content.disable : theme.content.dark;

    return (
      <Container>
        <Row
          $focused={focused}
          $hovered={hovered}
          $hasValue={hasValue}
          $disabled={disabled}
          onPress={() => !disabled && innerRef.current?.focus()}
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          accessibilityRole="search"
        >
          <StyledInput
            ref={innerRef}
            {...textInputProps}
            $disabled={disabled}
            value={currentValue}
            onChangeText={handleChange}
            placeholder={placeholder}
            placeholderTextColor={disabled ? theme.content.disable : theme.content.dark}
            editable={!disabled}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
          />
          {showClose ? (
            <IconButton
              onPress={handleClear}
              accessibilityRole="button"
              accessibilityLabel="Clear search"
            >
              <Icon name="close" size={24} color={iconColor} />
            </IconButton>
          ) : (
            <IconSlot>
              <Icon name="search" size={24} color={iconColor} />
            </IconSlot>
          )}
          {hovered && !focused && !disabled ? <HoverOverlay /> : null}
        </Row>
      </Container>
    );
  },
);

SearchInput.displayName = 'SearchInput';
