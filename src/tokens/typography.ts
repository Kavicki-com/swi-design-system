/**
 * GENERATED FILE — do not edit by hand.
 * Source: references/figma-variables.json (collections "typo" + "Typography")
 * Regenerate with: npm run tokens:generate
 */

import { Platform, type TextStyle } from 'react-native';

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

/**
 * Resolve um nome de family para uma chave que `useFonts` registra com weight
 * específico. RN nativo (iOS/Android) não faz lookup por (family, weight) — só
 * por family-name. Esta tabela mantém um único ponto de verdade pra mapear
 * (family, weight) → family-key registrada pelo host.
 *
 * Convenção esperada no host:
 *   Inter → Inter Regular  |  Inter-Medium → Inter Medium  |  Inter-Bold → Inter Bold
 *   Montserrat → Montserrat Bold  |  Montserrat-Regular → Montserrat Regular  |  Montserrat-Medium → Montserrat Medium
 *
 * IMPORTANTE — Web: browsers selecionam o glyph correto via `font-weight` CSS;
 * a família é só "Inter" ou "Montserrat" (carregadas via @font-face / Google
 * Fonts). Nomes weight-suffixados como "Inter-Medium" NÃO existem como CSS
 * font-family e caem em fallback (Times/Arial). Por isso a early-return aqui
 * devolve o nome base no web — o fontWeight nos estilos da typography faz o
 * resto. Sem essa guarda, dezenas de elementos do admin (StatusTag, badges,
 * Button labels, subtitle/body.s/body.l/label/caption variants) renderizam em
 * fonte de fallback do browser, gerando a regressão de fontes desalinhadas.
 */
const resolveFontFamily = (
  family: 'Inter' | 'Montserrat',
  weight: '300' | '400' | '500' | '700',
): string => {
  if (Platform.OS === 'web') return family;
  if (family === 'Inter') {
    if (weight === '500') return 'Inter-Medium';
    if (weight === '700') return 'Inter-Bold';
    return 'Inter'; // 300, 400
  }
  // Montserrat
  if (weight === '400') return 'Montserrat-Regular';
  if (weight === '500') return 'Montserrat-Medium';
  return 'Montserrat'; // 700 (Bold) — a chave default aponta pro Bold
};

export const typography = {
  title: {
    l: {
      fontFamily: resolveFontFamily('Montserrat', '700'),
      fontWeight: fontWeight.bold,
      fontSize: 32,
    },
    m: {
      fontFamily: resolveFontFamily('Montserrat', '700'),
      fontWeight: fontWeight.bold,
      fontSize: 24,
    },
    s: {
      fontFamily: resolveFontFamily('Montserrat', '700'),
      fontWeight: fontWeight.bold,
      fontSize: 20,
    },
    xs: {
      fontFamily: resolveFontFamily('Montserrat', '700'),
      fontWeight: fontWeight.bold,
      fontSize: 16,
    },
  },
  subtitle: {
    l: {
      fontFamily: resolveFontFamily('Inter', '500'),
      fontWeight: fontWeight.medium,
      fontSize: 24,
    },
    m: {
      fontFamily: resolveFontFamily('Inter', '500'),
      fontWeight: fontWeight.medium,
      fontSize: 16,
    },
    s: {
      fontFamily: resolveFontFamily('Inter', '500'),
      fontWeight: fontWeight.medium,
      fontSize: 12,
    },
  },
  body: {
    l: {
      fontFamily: resolveFontFamily('Inter', '500'),
      fontWeight: fontWeight.medium,
      fontSize: 20,
    },
    m: {
      fontFamily: resolveFontFamily('Inter', '400'),
      fontWeight: fontWeight.regular,
      fontSize: 14,
    },
    s: {
      fontFamily: resolveFontFamily('Inter', '500'),
      fontWeight: fontWeight.medium,
      fontSize: 12,
    },
  },
  caption: {
    s: {
      fontFamily: resolveFontFamily('Inter', '500'),
      fontWeight: fontWeight.medium,
      fontSize: 12,
    },
    xs: {
      fontFamily: resolveFontFamily('Inter', '700'),
      fontWeight: fontWeight.bold,
      fontSize: 8,
    },
  },
  label: {
    m: {
      fontFamily: resolveFontFamily('Inter', '700'),
      fontWeight: fontWeight.bold,
      fontSize: 14,
    },
    l: {
      fontFamily: resolveFontFamily('Inter', '700'),
      fontWeight: fontWeight.bold,
      fontSize: 16,
    },
  },
  badge: {
    s: {
      fontFamily: resolveFontFamily('Inter', '700'),
      fontWeight: fontWeight.bold,
      fontSize: 12,
    },
  },
  link: {
    m: {
      fontFamily: resolveFontFamily('Montserrat', '700'),
      fontWeight: fontWeight.bold,
      fontSize: 14,
    },
  },
} as const satisfies Record<string, Record<string, TextStyle>>;

export type TypographyVariant =
  | `title.${keyof typeof typography.title}`
  | `subtitle.${keyof typeof typography.subtitle}`
  | `body.${keyof typeof typography.body}`
  | `caption.${keyof typeof typography.caption}`
  | `label.${keyof typeof typography.label}`
  | `badge.${keyof typeof typography.badge}`
  | `link.${keyof typeof typography.link}`;

export type Typography = typeof typography;
