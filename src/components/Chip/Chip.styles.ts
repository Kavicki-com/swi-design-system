import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import type { ChipColorScheme, ChipState, ChipVariant } from './Chip.types';

export interface StateProps {
  $state: ChipState;
  $variant: ChipVariant;
  $colorScheme: ChipColorScheme;
}

const borderColor = ({
  $state,
  $variant,
  $colorScheme,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  if ($variant === 'filled') return 'transparent';
  if ($state === 'disable') return theme.content.disable;
  return $colorScheme === 'secondary' ? theme.content.secondary : theme.content.primary;
};

const backgroundColor = ({
  $state,
  $variant,
  $colorScheme,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  if ($variant === 'filled') {
    if ($state === 'disable') return theme.surface.disable;
    return $colorScheme === 'secondary'
      ? theme.surface.secondaryLight
      : theme.surface.primary;
  }
  if ($state === 'active') {
    const tint = $colorScheme === 'secondary'
      ? theme.surface.secondaryLight
      : theme.surface.primaryLight;
    return `${tint}14`;
  }
  return 'transparent';
};

const textColor = ({
  $state,
  $variant,
  $colorScheme,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
  if ($variant === 'filled') {
    if ($state === 'disable') return theme.content.disable;
    return theme.content.light;
  }
  if ($state === 'disable') return theme.content.disable;
  return $colorScheme === 'secondary' ? theme.content.secondary : theme.content.primary;
};

export const Container = styled(Pressable)<StateProps>`
  align-self: flex-start;
`;

export const Body = styled(View)<StateProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: ${({ theme }) => theme.padding.xs}px;
  padding-horizontal: ${({ $variant, theme }) =>
    $variant === 'filled' ? theme.padding.s : theme.padding.sm}px;
  border-width: ${({ $variant }) => ($variant === 'filled' ? 0 : 1)}px;
  border-color: ${(props) => borderColor(props)};
  background-color: ${(props) => backgroundColor(props)};
  border-radius: ${({ $variant, theme }) =>
    $variant === 'filled' ? theme.border.radius.s : theme.border.radius.m}px;
  overflow: hidden;
`;

export const Label = styled.Text<StateProps>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${(props) => textColor(props)};
`;

export const HoverOverlay = styled(View)`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.05);
  pointer-events: none;
`;
