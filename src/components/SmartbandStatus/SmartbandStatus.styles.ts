import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.m}px;
  align-self: stretch;
`;

export const SyncRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  align-self: stretch;
`;

export const SyncCell = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xs}px;
  padding: ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
`;

export const IconSlot = styled(View)`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text<{ $active: boolean }>`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 32px;
  text-align: center;
  color: ${({ $active, theme }) =>
    $active ? theme.content.dark : theme.content.medium};
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.content.dark};
  align-self: stretch;
`;
