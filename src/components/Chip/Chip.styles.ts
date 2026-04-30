import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import type { ChipState } from './Chip.types';

export interface StateProps {
  $state: ChipState;
}

const borderColor = ({ $state, theme }: StateProps & { theme: DefaultTheme }) => {
  if ($state === 'disable') return theme.content.disable;
  return theme.content.primary;
};

const backgroundColor = ({ $state, theme }: StateProps & { theme: DefaultTheme }) => {
  if ($state === 'active') return `${theme.surface.primaryLight}14`;
  return 'transparent';
};

const textColor = ({ $state, theme }: StateProps & { theme: DefaultTheme }) => {
  if ($state === 'disable') return theme.content.disable;
  return theme.content.primary;
};

export const Container = styled(Pressable)<StateProps>`
  align-self: flex-start;
`;

export const Body = styled(View)<StateProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: ${({ theme }) => theme.padding.xs}px;
  padding-horizontal: ${({ theme }) => theme.padding.sm}px;
  border-width: 1px;
  border-color: ${(props) => borderColor(props)};
  background-color: ${(props) => backgroundColor(props)};
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  overflow: hidden;
`;

export const Label = styled.Text<StateProps>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 12px;
  color: ${(props) => textColor(props)};
`;

export const HoverOverlay = styled(View)`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.05);
  pointer-events: none;
`;
