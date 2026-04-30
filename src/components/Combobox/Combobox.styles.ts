import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';

export interface TriggerProps {
  $focused: boolean;
  $hovered: boolean;
  $disabled: boolean;
}

const triggerBackground = ({
  $focused,
  $hovered,
  $disabled,
  theme,
}: TriggerProps & { theme: DefaultTheme }) => {
  if ($disabled) return theme.surface.disable;
  if ($focused || $hovered) return theme.surface.medium;
  return theme.surface.standard;
};

export const Container = styled(View)`
  flex-direction: column;
  align-self: stretch;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const Label = styled.Text<{ $disabled: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.content.disable : theme.content.dark)};
`;

export const Trigger = styled(Pressable)<TriggerProps>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.m}px;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${(props) => triggerBackground(props)};
`;

export const TriggerLabel = styled.Text<{ $placeholder: boolean; $disabled: boolean }>`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 14px;
  color: ${({ $placeholder, $disabled, theme }) => {
    if ($disabled) return theme.content.disable;
    if ($placeholder) return theme.content.medium;
    return theme.content.dark;
  }};
`;

export const Chevron = styled.Text<{ $disabled: boolean }>`
  font-size: 12px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.content.disable : theme.content.dark)};
`;

export const Panel = styled(View)`
  background-color: ${({ theme }) => theme.surface.standard};
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  padding: ${({ theme }) => theme.padding.s}px;
`;

export const OptionsList = styled(View)`
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const OptionRow = styled(Pressable)<{ $first: boolean; $hovered: boolean }>`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${({ theme }) => theme.padding.s}px;
  padding-vertical: 10px;
  border-top-width: ${({ $first }) => ($first ? 0 : 1)}px;
  border-top-color: ${({ theme }) => theme.content.medium};
  background-color: ${({ $hovered, theme }) => ($hovered ? theme.surface.hover : 'transparent')};
`;

export const OptionLabel = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.content.dark};
`;

export const Description = styled.Text<{ $disabled: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 12px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.content.disable : theme.content.dark)};
`;
