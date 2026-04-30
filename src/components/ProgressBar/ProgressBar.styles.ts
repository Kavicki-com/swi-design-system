import { View } from 'react-native';
import styled from 'styled-components/native';

export const Track = styled(View)<{ $disabled: boolean }>`
  height: 6px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.content.disable : theme.surface.secondaryLight};
  align-self: stretch;
  overflow: hidden;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

export const Fill = styled(View)<{ $disabled: boolean }>`
  height: 6px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.content.medium : theme.content.primary};
`;
