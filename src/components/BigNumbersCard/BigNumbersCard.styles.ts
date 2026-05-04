import { View } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(View)`
  flex-direction: column;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.s}px;
  padding: ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
`;

export const IconSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  text-align: center;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;
