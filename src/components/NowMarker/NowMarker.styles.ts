import { View } from 'react-native';
import styled from 'styled-components/native';

export const Stack = styled(View)`
  flex-direction: column;
  align-items: center;
`;

export const Flag = styled(View)`
  padding-horizontal: ${({ theme }) => theme.padding.s}px;
  padding-vertical: ${({ theme }) => theme.padding.xs}px;
  border-bottom-left-radius: ${({ theme }) => theme.border.radius.s}px;
  border-bottom-right-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${({ theme }) => theme.content.dark};
`;

export const FlagText = styled.Text`
  color: ${({ theme }) => theme.content.light};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.s}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Pole = styled(View)<{ $height: number }>`
  width: 2px;
  height: ${({ $height }) => $height}px;
  background-color: ${({ theme }) => theme.content.dark};
`;
