import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import type { ButtonShape, ButtonSize, ButtonVariant } from './Button.types';

export interface StateProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $shape: ButtonShape;
  $backgroundColor?: string;
  $borderColor?: string;
  $borderWidth?: 's' | 'm';
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
  if ($pressed) return theme.surface.primaryLight;
  return 'transparent';
};

const containerBorderColor = ({
  $variant,
  $borderColor,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  if ($variant !== 'outline') return 'transparent';
  return $borderColor ?? theme.content.primaryLight;
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
  border-width: ${({ $borderWidth, theme }) =>
    $borderWidth === 's' ? theme.border.size.s : theme.border.size.m}px;
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

export const Label = styled.Text<{
  $variant: ButtonVariant;
  $hovered: boolean;
  $disabled: boolean;
  $underline: boolean;
  $labelColor?: string;
}>`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  color: ${(props) => labelColor(props)};
  ${({ $underline }) => ($underline ? 'text-decoration-line: underline;' : '')}
`;

/* IconSlot — 24×24 container that matches Figma button specs (e.g. 32:2502).
   No internal padding: the icon (rendered at size:24) fills the slot directly,
   relying on the Container gap (theme.gap.xs = 4) for label↔icon spacing.
   Earlier versions added 4px of internal padding here, which inflated the
   surface-variant button by ~8px horizontal and broke Figma fidelity for
   compact contexts like the maps "Voltar ao dashboard" CTA. */
export const IconSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
