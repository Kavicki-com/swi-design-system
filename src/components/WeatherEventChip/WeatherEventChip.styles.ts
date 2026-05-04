import { View } from 'react-native';
import styled from 'styled-components/native';

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const TimePill = styled(View)`
  padding-horizontal: ${({ theme }) => theme.padding.s}px;
  padding-vertical: ${({ theme }) => theme.padding.xs}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${({ theme }) => theme.surface.standard};
`;

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.s}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
