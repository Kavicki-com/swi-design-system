/**
 * GENERATED FILE — do not edit by hand.
 * Source: references/figma-variables.json (collections "typo" + "Typography")
 * Regenerate with: npm run tokens:generate
 */

import type { TextStyle } from 'react-native';

export const fontFamily = {
  title: 'Montserrat',
  body: 'Inter',
} as const;

export const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
} as const satisfies Record<string, TextStyle['fontWeight']>;

export const fontSize = {
  s: 8,
  sm: 12,
  m: 14,
  ms: 16,
  ml: 20,
  l: 24,
  xl: 28,
  xxl: 32,
} as const;

export const typography = {
  title: {
    l: {
      fontFamily: fontFamily.title,
      fontWeight: fontWeight.bold,
      fontSize: 32,
    },
    m: {
      fontFamily: fontFamily.title,
      fontWeight: fontWeight.bold,
      fontSize: 24,
    },
    s: {
      fontFamily: fontFamily.title,
      fontWeight: fontWeight.bold,
      fontSize: 20,
    },
    xs: {
      fontFamily: fontFamily.title,
      fontWeight: fontWeight.bold,
      fontSize: 16,
    },
  },
  subtitle: {
    l: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.medium,
      fontSize: 24,
    },
    m: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.medium,
      fontSize: 16,
    },
    s: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.medium,
      fontSize: 12,
    },
  },
  body: {
    l: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.medium,
      fontSize: 20,
    },
    m: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.regular,
      fontSize: 14,
    },
    s: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.medium,
      fontSize: 12,
    },
  },
  caption: {
    s: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.medium,
      fontSize: 12,
    },
    xs: {
      fontFamily: fontFamily.body,
      fontWeight: fontWeight.bold,
      fontSize: 8,
    },
  },
} as const satisfies Record<string, Record<string, TextStyle>>;

export type TypographyVariant =
  | `title.${keyof typeof typography.title}`
  | `subtitle.${keyof typeof typography.subtitle}`
  | `body.${keyof typeof typography.body}`
  | `caption.${keyof typeof typography.caption}`;

export type Typography = typeof typography;
