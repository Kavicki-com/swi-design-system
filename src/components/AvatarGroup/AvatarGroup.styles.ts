import { View } from 'react-native';
import styled from 'styled-components/native';

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const AvatarSlot = styled(View)<{ $marginLeft: number }>`
  margin-left: ${({ $marginLeft }) => $marginLeft}px;
`;

export const CountBadge = styled(View)<{ $size: number; $marginLeft: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin-left: ${({ $marginLeft }) => $marginLeft}px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.content.dark};
  background-color: ${({ theme }) => theme.surface.info};
  align-items: center;
  justify-content: center;
`;

export const CountText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.s}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
