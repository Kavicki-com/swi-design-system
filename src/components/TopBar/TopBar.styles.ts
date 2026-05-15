import styled from 'styled-components/native';
import { Pressable, View } from 'react-native';

/**
 * TopBar — drill-down navigation primitive used across sub-pages
 * (Settings detail screens, onboarding back flows). Figma 353:11629.
 */
export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 360px;
  padding-left: ${({ theme }) => theme.padding.m}px;
  padding-right: ${({ theme }) => theme.padding.m}px;
  padding-top: ${({ theme }) => theme.padding.s}px;
  padding-bottom: ${({ theme }) => theme.padding.s}px;
`;

export const BackSlot = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xs}px;
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
