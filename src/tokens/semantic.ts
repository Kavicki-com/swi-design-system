/**
 * GENERATED FILE — do not edit by hand.
 * Source: references/figma-variables.json (collection "tokens")
 * Regenerate with: npm run tokens:generate
 *
 * Components consume ONLY this file (or typography/effects).
 * Never import from primitive.ts inside a component.
 */

import { primitive } from './primitive';

export const semantic = {
  background: primitive.neutral[900],

  surface: {
    standard: primitive.neutral[800],
    medium: primitive.neutral[700],
    high: primitive.neutral[600],
    grey: primitive.neutral[300],
    disable: primitive.neutral[800],
    primary: primitive.green[300],
    primaryLight: primitive.green[50],
    secondary: primitive.blue[400],
    secondaryLight: primitive.blue[50],
    accent: primitive.yellow[400],
    error: primitive.red[400],
    errorLight: primitive.red[200],
    errorExtraLight: primitive.red[50],
    danger: '#c0152d',
    success: primitive.lime[700],
    successLight: primitive.lime[200],
    successExtraLight: primitive.lime[50],
    warning: primitive.yellow[600],
    warningLight: primitive.yellow[200],
    warningExtraLight: primitive.yellow[50],
    info: primitive.blue[600],
    infoLight: primitive.blue[200],
    infoExtraLight: primitive.blue[50],
    hover: '#FAFAFA14',
  },

  content: {
    dark: primitive.neutral[50],
    medium: primitive.neutral[300],
    light: primitive.neutral[700],
    primary: primitive.green[300],
    primaryLight: primitive.green[100],
    secondary: primitive.blue[200],
    secondaryLight: primitive.blue[100],
    error: primitive.red[400],
    errorLight: primitive.red[200],
    success: primitive.lime[500],
    successLight: primitive.lime[200],
    warning: primitive.yellow[500],
    warningLight: primitive.yellow[200],
    info: primitive.blue[500],
    infoLight: primitive.blue[200],
    disable: primitive.neutral[600],
    lightGrey: primitive.neutral[600],
    hover: '#FAFAFA29',
  },

  border: {
    size: {
      s: primitive.size.nano,
      m: primitive.size.micro,
      l: primitive.size.xs,
    },
    radius: {
      xs: primitive.size.micro,
      s: primitive.size.xs,
      m: primitive.size.s,
      l: primitive.size.m,
      pill: 999,
    },
  },

  padding: {
    empty: primitive.size.empty,
    xs: primitive.size.xs,
    s: primitive.size.s,
    sm: primitive.size.sm,
    m: primitive.size.m,
    ml: primitive.size.ml,
    l: primitive.size.l,
    xl: primitive.size.xxl,
    xxl: primitive.size.xxxl,
  },

  gap: {
    empty: primitive.size.empty,
    xs: primitive.size.xs,
    s: primitive.size.s,
    sm: primitive.size.sm,
    m: primitive.size.m,
    l: primitive.size.l,
    xl: primitive.size.xl,
    xxl: primitive.size.xxl,
  },

  margin: {
    empty: primitive.size.empty,
    xs: primitive.size.xs,
    s: primitive.size.s,
    sm: primitive.size.sm,
    m: primitive.size.m,
    ml: primitive.size.ml,
    l: primitive.size.l,
    xl: primitive.size.xxl,
  },
} as const;

export type Semantic = typeof semantic;
