import { View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import type { StepState } from './Step.types';

const dotBackground = ({ $state, theme }: { $state: StepState; theme: DefaultTheme }) => {
  if ($state === 'current' || $state === 'done') return theme.content.primary;
  return theme.content.medium;
};

export const Dot = styled(View)<{ $state: StepState }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${dotBackground};
`;

export const Label = styled.Text<{ $state: StepState }>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ $state, theme }) =>
    $state === 'current' ? theme.fontWeight.bold : theme.fontWeight.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.content.light};
  line-height: 12px;
`;
