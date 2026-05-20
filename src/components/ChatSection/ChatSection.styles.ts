import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.gap.sm}px;
  padding: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.background};
`;

export const ListScroll = styled(ScrollView)`
  align-self: stretch;
  max-height: 296px;
  /* Force the scrollbar gutter to always render (not just on overflow) so the
   * Figma 53:5790 design's persistent track stays visible even with few
   * contacts. Web-only; React Native ignores. */
  overflow-y: scroll;
  /* Custom scrollbar — Figma 53:5790 chat-section. 8px wide, surface.medium
   * track + surface.high thumb, border-radius.l on both. Webkit pseudo-
   * elements + Firefox scrollbar-* properties are web-only; React Native
   * ignores these rules silently. */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.surface.medium};
    border-radius: ${({ theme }) => theme.border.radius.l}px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.surface.high};
    border-radius: ${({ theme }) => theme.border.radius.l}px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.surface.high};
  }
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.surface.high} ${({ theme }) => theme.surface.medium};
`;

export const ListInner = styled(View)`
  gap: ${({ theme }) => theme.gap.xs}px;
`;
