import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Frame = styled(View)<{
  $size: number;
  $bordered: boolean;
  $borderWidth: number;
  $borderColor: string;
  $bg: string;
}>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  overflow: hidden;
  background-color: ${({ $bg }) => $bg};
  ${({ $bordered, $borderWidth, $borderColor }) =>
    $bordered
      ? `border-width: ${$borderWidth}px; border-style: solid; border-color: ${$borderColor};`
      : ''};
  align-items: center;
  justify-content: center;
`;

// Iniciais do fallback. 40% do diâmetro mantém a proporção legível de 24px
// (size s) a 108px (avatar do perfil) sem tabela de tamanhos paralela.
export const Initials = styled(Text)<{ $size: number }>`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: 700;
  font-size: ${({ $size }) => Math.round($size * 0.4)}px;
  line-height: ${({ $size }) => Math.round($size * 0.4)}px;
  color: ${({ theme }) => theme.content.dark};
  text-align: center;
`;
