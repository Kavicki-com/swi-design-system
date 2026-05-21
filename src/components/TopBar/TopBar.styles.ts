import styled from 'styled-components/native';
import { Pressable, View } from 'react-native';

/**
 * TopBar — drill-down navigation primitive used across sub-pages
 * (Settings detail screens, onboarding back flows). Figma 353:11629.
 */
// Container width:100% (era 360px hardcoded). Em telas com content area
// >360pt (iPhone 14 Pro/Max), o container capava no edge de 360 e o
// TitleSlot flush-right alinhava no edge ERRADO. Internal padding
// removido — convenção: consumer wrappa em parent com paddingHorizontal,
// TopBar delega ao parent (matches settings/* screens que ja passam
// paddingHorizontal:m no ScrollView contentContainerStyle).
export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: ${({ theme }) => theme.padding.s}px;
  padding-bottom: ${({ theme }) => theme.padding.s}px;
`;

// margin-left:-6 compensa o inset visual do glyph keyboard_arrow_left
// dentro do bounding box 24x24 do Icon. Sem isso, a ponta visual do '<'
// ficava ~6pt offset a direita do edge do content area.
export const BackSlot = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xs}px;
  margin-left: -6px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: ${({ theme }) => theme.padding.sm}px;
  padding-bottom: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
`;

export const TitleSlot = styled(View)`
  flex: 1;
  align-items: flex-end;
`;
