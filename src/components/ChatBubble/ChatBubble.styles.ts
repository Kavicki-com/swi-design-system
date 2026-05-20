import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import type { ChatBubblePosition } from './ChatBubble.types';

export const Row = styled(View)<{ $position: ChatBubblePosition }>`
  flex-direction: row;
  align-items: flex-end;
  gap: ${({ theme }) => theme.gap.sm}px;
`;

export const Bubble = styled(View)<{ $position: ChatBubblePosition }>`
  flex: 1;
  min-width: 0;
  flex-direction: column;
  background-color: ${({ theme }) => theme.surface.standard};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $position, theme }) =>
    $position === 'left' ? theme.content.secondaryLight : theme.content.primaryLight};
  border-radius: ${({ theme }) => theme.border.radius.l}px;
  padding-vertical: ${({ theme }) => theme.padding.ml}px;
  padding-left: ${({ $position, theme }) =>
    $position === 'left' ? theme.padding.s : theme.padding.m}px;
  padding-right: ${({ $position, theme }) =>
    $position === 'left' ? theme.padding.m : theme.padding.s}px;
`;

export const BubbleInner = styled(View)<{ $position: ChatBubblePosition }>`
  flex-direction: column;
  gap: 10px;
  align-items: ${({ $position }) => ($position === 'left' ? 'flex-end' : 'flex-start')};
`;

export const TopRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  width: 100%;
`;

export const MessageText = styled.Text<{ $position: ChatBubblePosition }>`
  flex: 1;
  min-width: 0;
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: ${({ $position }) => ($position === 'left' ? 'right' : 'left')};
`;

export const MenuButton = styled(Pressable)`
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.s}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
