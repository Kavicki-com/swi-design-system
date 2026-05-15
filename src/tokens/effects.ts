/**
 * GENERATED FILE — do not edit by hand.
 * Source: references/figma-variables.json (collection "Effects")
 * Regenerate with: npm run tokens:generate
 *
 * elevation.negative is INNER_SHADOW: works on web; skipped on mobile.
 */

import { Platform, type ViewStyle } from 'react-native';

/**
 * Canonical shadow color for elevation tokens AND any ad-hoc `shadowColor`
 * usage at the consumer side (consume via `theme.shadow.color`).
 */
export const SHADOW_COLOR = '#1D1D1D';

/**
 * Backdrop color for modal overlays / scrims. Applied as `backgroundColor`
 * on the full-screen wrapper of modal routes (consume via `theme.overlay`).
 */
export const OVERLAY_COLOR = 'rgba(0,0,0,0.4)';

export const elevation = {
  sm: Platform.select({
    ios: {
      shadowColor: SHADOW_COLOR,
      shadowOpacity: 0.08,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
    },
    android: { elevation: 2 },
    web: { boxShadow: '0 4px 8px rgba(29,29,29,0.08)' } as ViewStyle,
    default: {},
  }),
  md: Platform.select({
    ios: {
      shadowColor: SHADOW_COLOR,
      shadowOpacity: 0.12,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 4 },
    },
    android: { elevation: 4 },
    web: { boxShadow: '0 4px 12px rgba(29,29,29,0.12)' } as ViewStyle,
    default: {},
  }),
  lg: Platform.select({
    ios: {
      shadowColor: SHADOW_COLOR,
      shadowOpacity: 0.16,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 4 },
    },
    android: { elevation: 8 },
    web: { boxShadow: '0 4px 16px rgba(29,29,29,0.16)' } as ViewStyle,
    default: {},
  }),
  negative: Platform.select({
    web: { boxShadow: 'inset 0 4px 16px rgba(29,29,29,0.32)' } as ViewStyle,
    default: {},
  }),
} as const;

export type Elevation = typeof elevation;
