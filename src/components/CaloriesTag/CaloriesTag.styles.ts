import { View } from 'react-native';
import styled from 'styled-components/native';

export const Pill = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xs}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${({ theme }) => theme.background};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;
