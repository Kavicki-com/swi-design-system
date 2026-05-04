import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.sm}px ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
  gap: ${({ theme }) => theme.gap.m}px;
`;

export const YearText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.ms}px;
`;

export const DateText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.ms}px;
  text-align: center;
  width: 240px;
`;

export const ExamLink = styled(Pressable)`
  width: 320px;
  align-items: center;
  justify-content: center;
`;

export const ExamLinkText = styled.Text`
  color: ${({ theme }) => theme.content.secondary};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.ms}px;
  text-align: center;
  text-decoration-line: underline;
  text-decoration-color: ${({ theme }) => theme.content.secondary};
`;
