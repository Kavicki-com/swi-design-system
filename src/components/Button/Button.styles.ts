import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import { typography } from '../../tokens';
import type {
  ButtonLabelFamily,
  ButtonLabelWeight,
  ButtonShape,
  ButtonSize,
  ButtonVariant,
} from './Button.types';

export interface StateProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $shape: ButtonShape;
  $backgroundColor?: string;
  $borderColor?: string;
  $borderWidth?: 's' | 'm' | number;
  $hovered: boolean;
  $pressed: boolean;
  $disabled: boolean;
  $fullWidth: boolean;
}

const padding = (size: ButtonSize, theme: DefaultTheme) => {
  if (size === 'small') return theme.padding.s;
  if (size === 'large') return theme.padding.m;
  if (size === 'xlarge') return theme.padding.ml;
  return theme.padding.sm;
};

const radius = (shape: ButtonShape, theme: DefaultTheme) =>
  shape === 'pill' ? theme.border.radius.pill : theme.border.radius.m;

const containerBackground = ({
  $variant,
  $backgroundColor,
  $hovered,
  $pressed,
  $disabled,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  if ($disabled) {
    return $variant === 'contained' ? theme.surface.primaryLight : 'transparent';
  }
  // Explicit override wins for non-overlay states.
  if ($backgroundColor && !$hovered && !$pressed) return $backgroundColor;
  if ($variant === 'contained') return $backgroundColor ?? theme.surface.primary;
  if ($variant === 'surface') return $backgroundColor ?? theme.surface.standard;
  if ($variant === 'outline') {
    return $hovered || $pressed ? theme.surface.primaryLight : 'transparent';
  }
  // ghost
  if ($hovered) return theme.surface.primary;
  // Pressed: escurecimento sutil universal (funciona em dark + light themes).
  // Antes usávamos `theme.surface.primaryLight` (verde-mint pálido) que em
  // dark themes virava flash quase-branco, percebido como bug pelo usuário
  // ("button fica branco e volta") em ghost buttons como Voltar/back.
  if ($pressed) return 'rgba(255, 255, 255, 0.06)';
  return 'transparent';
};

const containerBorderColor = ({
  $variant,
  $borderColor,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  // Explicit override always wins — opts non-outline variants into a visible
  // border (e.g. two-tone FABs).
  if ($borderColor) return $borderColor;
  if ($variant === 'outline') return theme.content.primaryLight;
  return 'transparent';
};

const borderWidthPx = ($borderWidth: 's' | 'm' | number | undefined, theme: DefaultTheme) => {
  if (typeof $borderWidth === 'number') return $borderWidth;
  if ($borderWidth === 's') return theme.border.size.s;
  return theme.border.size.m;
};

export const Container = styled(Pressable)<StateProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.xs}px;
  /* small: 8px vertical / 12px horizontal — pairs visually with Tabs (~32px tall).
     default: 12px all sides — full-size CTA.
     large: 16px all sides — round icon-only action buttons (Dashboard). */
  padding-vertical: ${({ $size, theme }) => padding($size, theme)}px;
  padding-horizontal: ${({ $size, theme }) =>
    $size === 'large' || $size === 'xlarge' ? padding($size, theme) : theme.padding.sm}px;
  border-radius: ${({ $shape, theme }) => radius($shape, theme)}px;
  border-width: ${({ $borderWidth, theme }) => borderWidthPx($borderWidth, theme)}px;
  border-color: ${(props) => containerBorderColor(props)};
  background-color: ${(props) => containerBackground(props)};
  /* Surface variant carries elevation md per Figma 32:2502 — lifts the button
     visually off unpredictable backgrounds (satellite maps, photos, etc.). */
  box-shadow: ${({ $variant }) =>
    $variant === 'surface' ? '0px 4px 8px rgba(29, 29, 29, 0.16)' : 'none'};
  ${({ $fullWidth }) =>
    $fullWidth ? 'align-self: stretch; width: 100%;' : ''};
`;

export const HoverOverlay = styled(View)<{ $shape: ButtonShape }>`
  position: absolute;
  inset: 0;
  border-radius: ${({ $shape, theme }) => radius($shape, theme)}px;
  background-color: ${({ theme }) => theme.surface.hover};
  pointer-events: none;
`;

export const PressedOverlay = styled(View)<{ $shape: ButtonShape }>`
  position: absolute;
  inset: 0;
  border-radius: ${({ $shape, theme }) => radius($shape, theme)}px;
  pointer-events: none;
`;

const labelColor = ({
  $variant,
  $hovered,
  $disabled,
  $labelColor,
  theme,
}: {
  $variant: ButtonVariant;
  $hovered: boolean;
  $disabled: boolean;
  $labelColor?: string;
  theme: DefaultTheme;
}) => {
  // Explicit override wins (when not disabled, so disabled tone stays
  // recognizable).
  if ($labelColor && !$disabled) return $labelColor;
  if ($variant === 'contained') return theme.content.light;
  // Surface: dark bg → use light content for readable text/icons.
  if ($variant === 'surface') return theme.content.dark;
  if ($disabled) return theme.content.primaryLight;
  if ($variant === 'ghost' && $hovered) return theme.content.dark;
  return theme.content.primaryLight;
};

// Default to body (Inter) — Figma button labels usam Inter Bold em todas as
// telas inspecionadas (login, sign-up, complimentary-data, smartband). Passe
// `labelFamily="title"` explicitamente quando precisar Montserrat. Antes o
// default era title, gerando Montserrat 14 (visualmente errado vs Figma);
// corrigido 2026-05-18.
//
// As duas combinações default-bold (body+bold = Inter 700/14, title+bold =
// Montserrat 700/14) referenciam variantes nomeadas `typography.label.m` e
// `typography.link.m` adicionadas em v0.1.80. As variações regular/medium
// continuam emitindo via theme tokens (são overrides intencionais — sign-up
// privacy link usa body+regular underlined, etc.). Triplet final idêntico.
const labelTriplet = (
  $labelFamily: ButtonLabelFamily | undefined,
  $labelWeight: ButtonLabelWeight | undefined,
  theme: DefaultTheme,
) => {
  const weight = $labelWeight ?? 'bold';
  if (weight === 'bold') {
    if ($labelFamily === 'title') return typography.link.m; // Montserrat 700/14
    return typography.label.m; // Inter 700/14 (default)
  }
  const fontWeight =
    weight === 'regular' ? theme.fontWeight.regular : theme.fontWeight.medium;
  const fontFamily =
    $labelFamily === 'title' ? theme.fontFamily.title : theme.fontFamily.body;
  return { fontFamily, fontWeight, fontSize: theme.fontSize.m };
};

export const Label = styled.Text<{
  $variant: ButtonVariant;
  $hovered: boolean;
  $disabled: boolean;
  $underline: boolean;
  $labelColor?: string;
  $labelFamily?: ButtonLabelFamily;
  $labelWeight?: ButtonLabelWeight;
}>`
  font-family: ${({ $labelFamily, $labelWeight, theme }) =>
    labelTriplet($labelFamily, $labelWeight, theme).fontFamily};
  font-weight: ${({ $labelFamily, $labelWeight, theme }) =>
    labelTriplet($labelFamily, $labelWeight, theme).fontWeight};
  font-size: ${({ $labelFamily, $labelWeight, theme }) =>
    labelTriplet($labelFamily, $labelWeight, theme).fontSize}px;
  color: ${(props) => labelColor(props)};
  ${({ $underline }) => ($underline ? 'text-decoration-line: underline;' : '')}
`;

/* IconSlot — container que se adapta ao tamanho natural do ícone (centra-o).
   Anteriormente era fixo 24×24 (specs Figma 32:2502 onde o ícone é 24).
   Quando o ícone vinha menor (ex: size=16 em botões compactos como o action
   row de /reports/[id]), o slot continuava em 24px, comendo 8px do espaço do
   label e forçando wrap. Removido width/height fixos — flexbox sizes ao
   filho, mantendo Figma fidelity quando o ícone JÁ é 24 (caso comum). */
export const IconSlot = styled(View)`
  align-items: center;
  justify-content: center;
`;
