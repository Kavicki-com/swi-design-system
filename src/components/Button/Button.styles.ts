import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import type { ButtonVariant } from './Button.types';

export interface StateProps {
  $variant: ButtonVariant;
  $hovered: boolean;
  $pressed: boolean;
  $disabled: boolean;
  $fullWidth: boolean;
}

const containerBackground = ({
  $variant,
  $hovered,
  $pressed,
  $disabled,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  if ($disabled) {
    return $variant === 'contained' ? theme.surface.primaryLight : 'transparent';
  }
  if ($variant === 'contained') return theme.surface.primary;
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
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  if ($variant !== 'outline') return 'transparent';
  return theme.content.primaryLight;
};

export const Container = styled(Pressable)<StateProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.xs}px;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  border-width: ${({ theme }) => theme.border.size.m}px;
  border-color: ${(props) => containerBorderColor(props)};
  background-color: ${(props) => containerBackground(props)};
  ${({ $fullWidth }) =>
    $fullWidth ? 'align-self: stretch; width: 100%;' : ''};
`;

export const HoverOverlay = styled(View)`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.hover};
  pointer-events: none;
`;

export const PressedOverlay = styled(View)`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  pointer-events: none;
`;

const labelColor = ({
  $variant,
  $hovered,
  $disabled,
  theme,
}: {
  $variant: ButtonVariant;
  $hovered: boolean;
  $disabled: boolean;
  theme: DefaultTheme;
}) => {
  if ($variant === 'contained') return theme.content.light;
  if ($disabled) return theme.content.primaryLight;
  if ($variant === 'ghost' && $hovered) return theme.content.dark;
  return theme.content.primaryLight;
};

export const Label = styled.Text<{
  $variant: ButtonVariant;
  $hovered: boolean;
  $disabled: boolean;
}>`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  color: ${(props) => labelColor(props)};
`;

export const IconSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xs}px;
`;
