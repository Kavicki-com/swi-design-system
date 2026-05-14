import { View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import type { StatusTagStatus } from './StatusTag.types';

const surfaceForStatus = ({
  $status,
  theme,
}: {
  $status: StatusTagStatus;
  theme: DefaultTheme;
}) => {
  switch ($status) {
    case 'accept':
      return theme.surface.success;
    case 'pending':
      return theme.surface.warning;
    case 'info':
      return theme.surface.secondary;
    case 'canceled':
    default:
      return theme.surface.error;
  }
};

export const Container = styled(View)<{ $status: StatusTagStatus }>`
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({ theme }) => theme.padding.m}px;
  padding-vertical: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${(props) => surfaceForStatus(props)};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.content.light};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.s}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
