import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';

export interface StateProps {
  $active: boolean;
  $hovered: boolean;
  $disabled: boolean;
}

const containerBackground = ({
  $active,
  $hovered,
  $disabled,
  theme,
}: StateProps & { theme: DefaultTheme }) => {
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

export const Container = styled(Pressable)<StateProps>`
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.padding.m}px;
  padding-right: ${({ theme }) => theme.padding.s}px;
  padding-vertical: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${(props) => containerBackground(props)};
`;

export const HoverOverlay = styled(View)`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
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
  font-size: ${({ theme }) => theme.fontSize.m}px;
  color: ${(props) => accentColor(props)};
`;

export const Divider = styled(View)<StateProps>`
  width: 2px;
  height: 100%;
  border-radius: 2px;
  background-color: ${(props) => accentColor(props)};
`;
