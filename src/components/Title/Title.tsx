import React, { forwardRef } from 'react';
import { Text as RNText, type Text as RNTextRef } from 'react-native';
import { useTheme } from '../../theme';
import { typography } from '../../tokens';
import { useSurfaceTone } from '../Surface';
import type { TitleProps } from './Title.types';

const resolve = (variant: string) => {
  const [, key] = variant.split('.') as ['title', keyof typeof typography.title];
  return typography.title[key] ?? typography.title.m;
};

export const Title = forwardRef<RNTextRef, TitleProps>(
  ({ variant = 'title.m', color, children, style, ...rest }, ref) => {
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
        accessibilityRole="header"
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

Title.displayName = 'Title';
