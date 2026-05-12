import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Pressable)<{ $selected: boolean }>`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.xs}px;
  padding-vertical: ${({ theme }) => theme.padding.s}px;
  padding-horizontal: ${({ theme }) => theme.padding.xs}px;
  background-color: ${({ theme }) => theme.surface.standard};
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  border-width: ${({ $selected, theme }) => ($selected ? theme.border.size.m : 0)}px;
  border-color: ${({ theme }) => theme.content.primary};
`;

export const IconSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<{ $selected: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 12px;
  color: ${({ $selected, theme }) =>
    $selected ? theme.content.dark : theme.content.medium};
`;
