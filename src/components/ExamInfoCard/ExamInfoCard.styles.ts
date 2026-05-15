import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

/*
 * Compact mode has two metric specs:
 *   • admin (default): Figma 159:15646 — Montserrat Bold 16 year, 4V/12H
 *     padding, gap 8, button 8V/12H.
 *   • mobile (`$mobile`): Figma 342:9907 + 361:12377 — Inter Bold 14 year,
 *     8 all-sides padding, gap 12, button 4 all-sides + drop shadow.
 */

export const Card = styled(View)<{
  $compact?: boolean;
  $mobile?: boolean;
  $past?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme, $compact, $mobile }) => {
    if ($compact && $mobile) return `${theme.padding.s}px`;
    if ($compact) return `${theme.padding.xs}px ${theme.padding.sm}px`;
    return `${theme.padding.sm}px ${theme.padding.m}px`;
  }};
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
  gap: ${({ theme, $compact, $mobile }) => {
    if ($compact && $mobile) return theme.gap.sm;
    if ($compact) return theme.gap.s;
    return theme.gap.m;
  }}px;
`;

export const YearText = styled.Text<{
  $past?: boolean;
  $mobile?: boolean;
  $future?: boolean;
}>`
  color: ${({ theme, $past }) => ($past ? theme.content.medium : theme.content.dark)};
  font-family: ${({ theme, $mobile }) =>
    $mobile ? theme.fontFamily.body : theme.fontFamily.title};
  font-weight: ${({ theme, $future }) =>
    $future ? theme.fontWeight.regular : theme.fontWeight.bold};
  font-size: ${({ theme, $mobile }) =>
    $mobile ? theme.fontSize.m : theme.fontSize.ms}px;
`;

export const DateText = styled.Text<{
  $compact?: boolean;
  $mobile?: boolean;
  $past?: boolean;
}>`
  color: ${({ theme, $past }) => ($past ? theme.content.medium : theme.content.dark)};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme, $compact, $mobile }) => {
    if ($compact && $mobile) return theme.fontWeight.medium;
    if ($compact) return theme.fontWeight.regular;
    return theme.fontWeight.medium;
  }};
  font-size: ${({ theme, $compact, $mobile }) => {
    if ($compact && $mobile) return theme.fontSize.sm;
    if ($compact) return theme.fontSize.m;
    return theme.fontSize.ms;
  }}px;
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

export const CompactActionButton = styled(Pressable)<{ $mobile?: boolean }>`
  background-color: ${({ theme }) => theme.surface.primary};
  padding: ${({ theme, $mobile }) =>
    $mobile
      ? `${theme.padding.xs}px`
      : `${theme.padding.s}px ${theme.padding.sm}px`};
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  align-items: center;
  justify-content: center;
`;

/* Inner 24×24 slot wrapping the 16×16 download icon when mobile.
   Replica `download-icon` container (Figma 342:9908;62:13498;118:897)
   pra fechar botão 32×32 (4 padding + 24 slot + 4 padding). */
export const DownloadIconSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
