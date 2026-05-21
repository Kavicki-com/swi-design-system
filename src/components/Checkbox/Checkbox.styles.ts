import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import type { CheckboxSize } from './Checkbox.types';

const SIZE = {
  m: { box: 24, border: 2, check: 16, label: 14, labelWeight: '400' as const },
  s: { box: 16, border: 1, check: 12, label: 12, labelWeight: '500' as const },
} as const;

export const sizeMap = SIZE;

export const Container = styled(Pressable)<{ $disabled: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

export const Box = styled(View)<{ $size: CheckboxSize }>`
  width: ${({ $size }) => SIZE[$size].box}px;
  height: ${({ $size }) => SIZE[$size].box}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  border-width: ${({ $size }) => SIZE[$size].border}px;
  border-color: ${({ theme }) => theme.content.secondary};
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Check = styled.Text<{ $size: CheckboxSize }>`
  font-size: ${({ $size }) => SIZE[$size].check}px;
  line-height: ${({ $size }) => SIZE[$size].check}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.content.secondary};
  text-align: center;
`;

// flex:1 obrigatorio — sem isso, Label usa width intrinsico do texto e
// overflow do Container quando label e longo (ex: "Eu estou de acordo
// com as politicas e termos de uso..."), cortando palavras no edge da
// tela. Com flex:1, Label ocupa espaco restante apos Box+gap e wrap
// naturalmente.
export const Label = styled.Text<{ $size: CheckboxSize }>`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ $size }) => SIZE[$size].label}px;
  font-weight: ${({ $size }) => SIZE[$size].labelWeight};
  color: ${({ theme }) => theme.content.dark};
`;
