import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import type { RadioSize } from './Radio.types';

const SIZE = {
  m: { ring: 24, border: 2, dot: 12 },
  s: { ring: 16, border: 1, dot: 8 },
} as const;

export const sizeMap = SIZE;

export const Container = styled(Pressable)<{ $disabled: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

export const Ring = styled(View)<{ $size: RadioSize }>`
  width: ${({ $size }) => SIZE[$size].ring}px;
  height: ${({ $size }) => SIZE[$size].ring}px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  border-width: ${({ $size }) => SIZE[$size].border}px;
  border-color: ${({ theme }) => theme.content.secondary};
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Dot = styled(View)<{ $size: RadioSize }>`
  width: ${({ $size }) => SIZE[$size].dot}px;
  height: ${({ $size }) => SIZE[$size].dot}px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ theme }) => theme.content.secondary};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.content.dark};
`;
