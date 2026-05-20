import { Pressable, TextInput, View } from 'react-native';
import styled, { css, type DefaultTheme } from 'styled-components/native';

export interface RowProps {
  $focused: boolean;
  $hovered: boolean;
  $hasValue: boolean;
  $disabled: boolean;
}

const rowBackground = ({
  $focused,
  $hovered,
  $hasValue,
  $disabled,
  theme,
}: RowProps & { theme: DefaultTheme }) => {
  if ($disabled) return theme.surface.disable;
  if ($focused) return theme.surface.high;
  if ($hovered) return theme.surface.medium;
  if ($hasValue) return theme.surface.medium;
  return theme.surface.standard;
};

export const Container = styled(View)`
  flex-direction: column;
  align-self: stretch;
`;

export const Row = styled(Pressable)<RowProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.m}px;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${(props) => rowBackground(props)};
  ${({ $disabled, theme }) =>
    $disabled
      ? css`
          border-width: ${theme.border.size.s}px;
          border-color: ${theme.content.disable};
        `
      : ''};
`;

export const HoverOverlay = styled(View)`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.hover};
  pointer-events: none;
`;

export const FocusRing = styled(View)`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.content.primary};
  border-radius: ${({ theme }) => theme.border.radius.m + 2}px;
  pointer-events: none;
`;

export const StyledInput = styled(TextInput)<{ $disabled: boolean }>`
  flex: 1;
  min-width: 0;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.content.disable : theme.content.dark)};
  padding: 0;
  margin: 0;
  outline-width: 0;
  outline-style: none;
`;

export const IconSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled(Pressable)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
