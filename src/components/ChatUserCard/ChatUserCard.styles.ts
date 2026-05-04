import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Pressable)`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${({ theme }) => theme.surface.standard};
`;

export const AvatarRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  flex: 1;
  min-width: 0;
`;

export const TextStack = styled(View)`
  flex: 1;
  min-width: 0;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Badge = styled(View)`
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.surface.error};
`;

export const BadgeText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
