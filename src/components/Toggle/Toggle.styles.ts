import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const SideLabel = styled.Text<{ $active: boolean; $disabled: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ $active, $disabled, theme }) =>
    $disabled
      ? theme.content.disable
      : $active
        ? theme.content.dark
        : theme.content.medium};
`;

export const Track = styled(Pressable)<{ $disabled: boolean; $on: boolean }>`
  width: 32px;
  height: 16px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ theme }) => theme.surface.high};
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $on }) => ($on ? 'flex-end' : 'flex-start')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

export const Thumb = styled(View)<{ $on: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ $on, theme }) =>
    $on ? theme.content.primary : theme.content.medium};
`;
