import React, { forwardRef } from 'react';
import { Text as RNText, type Text as RNTextRef, type TextStyle } from 'react-native';
import { useTheme } from '../../theme';
import { typography } from '../../tokens';
import { useSurfaceTone } from '../Surface';
import type { TextProps, TextVariant } from './Text.types';

const resolve = (variant: TextVariant): TextStyle => {
  const [group, key] = variant.split('.') as [keyof typeof typography, string];
  const slot = typography[group] as Record<string, TextStyle>;
  return slot?.[key] ?? typography.body.m;
};

export const Text = forwardRef<RNTextRef, TextProps>(
  ({ variant = 'body.m', color, children, style, ...rest }, ref) => {
    const theme = useTheme();
    const { tone } = useSurfaceTone();
    const styleDef = resolve(variant);
    const defaultColor =
      tone === 'disabled'
        ? theme.content.disable
        : tone === 'light'
          ? theme.content.light
          : theme.content.dark;
    return (
      <RNText
        ref={ref}
        style={[
          {
            fontFamily: styleDef.fontFamily,
            fontWeight: styleDef.fontWeight,
            fontSize: styleDef.fontSize,
            color: color ?? defaultColor,
          },
          style,
        ]}
        {...rest}
      >
        {children}
      </RNText>
    );
  },
);

Text.displayName = 'Text';
