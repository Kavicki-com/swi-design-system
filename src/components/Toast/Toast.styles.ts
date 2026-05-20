import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';
import type { ToastVariant } from './Toast.types';

const variantBackground = ({
  $variant,
  theme,
}: {
  $variant: ToastVariant;
  theme: DefaultTheme;
}) => {
  switch ($variant) {
    case 'error':
      return theme.surface.errorLight;
    case 'success':
      return theme.surface.successLight;
    case 'warning':
      return theme.surface.warningLight;
    case 'info':
      return theme.surface.infoLight;
  }
};

export const Container = styled(View)<{ $variant: ToastVariant }>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  padding: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${(props) => variantBackground(props)};
`;

export const MessageContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.content.light};
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.content.light};
`;

export const CloseButton = styled(Pressable)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
