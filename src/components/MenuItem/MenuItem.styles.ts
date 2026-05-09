import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import type { MenuItemVariant } from './MenuItem.types';

export interface StateProps {
  $active: boolean;
  $hovered: boolean;
  $disabled: boolean;
  $variant?: MenuItemVariant;
}

const containerBackground = ({
  $active,
  $hovered,
  $disabled,
  $variant,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  // Compact: transparent at all states (active is signalled by left bar + text color only).
  if ($variant === 'compact') return 'transparent';
  if ($disabled) return theme.surface.disable;
  if ($active) return theme.surface.standard;
  if ($hovered) return theme.surface.standard;
  return theme.background;
};

const accentColor = ({
  $active,
  $hovered,
  $disabled,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  if ($disabled) return theme.content.disable;
  if ($active) return theme.content.primary;
  if ($hovered) return theme.content.dark;
  return theme.content.medium;
};

const dividerColor = ({
  $active,
  $hovered,
  $disabled,
  $variant,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  // Compact: only the active item shows the bar; otherwise transparent (keeps layout stable).
  if ($variant === 'compact') {
    return $active ? theme.content.primary : 'transparent';
  }
  return accentColor({ $active, $hovered, $disabled, $variant, theme });
};

export const Container = styled(Pressable)<StateProps>`
  height: ${({ $variant }) => ($variant === 'compact' ? '44px' : '64px')};
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $variant }) =>
    $variant === 'compact' ? 'flex-start' : 'space-between'};
  gap: ${({ $variant, theme }) => ($variant === 'compact' ? `${theme.gap.s}px` : '0px')};
  padding-left: ${({ $variant, theme }) =>
    $variant === 'compact' ? `${theme.padding.s}px` : `${theme.padding.m}px`};
  padding-right: ${({ theme }) => theme.padding.s}px;
  padding-vertical: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ $variant, theme }) =>
    $variant === 'compact' ? '0px' : `${theme.border.radius.m}px`};
  background-color: ${(props) => containerBackground(props)};
`;

export const HoverOverlay = styled(View)<Pick<StateProps, '$variant'>>`
  position: absolute;
  inset: 0;
  border-radius: ${({ $variant, theme }) =>
    $variant === 'compact' ? '0px' : `${theme.border.radius.m}px`};
  background-color: ${({ theme }) => theme.surface.hover};
  pointer-events: none;
`;

export const LabelGroup = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const IconSlot = styled(View)`
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<StateProps>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ $variant, theme }) =>
    $variant === 'compact' ? `${theme.fontSize.s}px` : `${theme.fontSize.m}px`};
  color: ${(props) => accentColor(props)};
  text-transform: ${({ $variant }) => ($variant === 'compact' ? 'uppercase' : 'none')};
  letter-spacing: ${({ $variant }) => ($variant === 'compact' ? '0.6px' : 'normal')};
`;

export const Divider = styled(View)<StateProps>`
  width: 2px;
  height: 100%;
  border-radius: 2px;
  background-color: ${(props) => dividerColor(props)};
`;
