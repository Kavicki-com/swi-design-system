import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(View)<{ $compact?: boolean; $past?: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme, $compact }) =>
    $compact
      ? `${theme.padding.xs}px ${theme.padding.sm}px`
      : `${theme.padding.sm}px ${theme.padding.m}px`};
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
  gap: ${({ theme, $compact }) => ($compact ? theme.gap.s : theme.gap.m)}px;
`;

export const YearText = styled.Text<{ $past?: boolean }>`
  color: ${({ theme, $past }) => ($past ? theme.content.medium : theme.content.dark)};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.ms}px;
`;

export const DateText = styled.Text<{ $compact?: boolean; $past?: boolean }>`
  color: ${({ theme, $past }) => ($past ? theme.content.medium : theme.content.dark)};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme, $compact }) =>
    $compact ? theme.fontWeight.regular : theme.fontWeight.medium};
  font-size: ${({ theme, $compact }) =>
    $compact ? theme.fontSize.m : theme.fontSize.ms}px;
  ${({ $compact }) =>
    $compact
      ? ''
      : `
    text-align: center;
    width: 240px;
  `}
`;

export const ExamLink = styled(Pressable)<{ $compact?: boolean }>`
  ${({ $compact }) =>
    $compact
      ? `
    flex: 1;
    align-items: flex-start;
    justify-content: center;
  `
      : `
    width: 320px;
    align-items: center;
    justify-content: center;
  `}
`;

export const ExamLinkText = styled.Text<{ $compact?: boolean; $past?: boolean }>`
  color: ${({ theme, $past }) =>
    $past ? theme.content.medium : theme.content.secondary};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme, $compact }) =>
    $compact ? theme.fontSize.sm : theme.fontSize.ms}px;
  text-align: ${({ $compact }) => ($compact ? 'left' : 'center')};
  text-decoration-line: ${({ $compact }) => ($compact ? 'none' : 'underline')};
  text-decoration-color: ${({ theme, $past }) =>
    $past ? theme.content.medium : theme.content.secondary};
`;

export const CompactActionButton = styled(Pressable)`
  background-color: ${({ theme }) => theme.surface.primary};
  padding: ${({ theme }) => theme.padding.s}px ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  align-items: center;
  justify-content: center;
`;
