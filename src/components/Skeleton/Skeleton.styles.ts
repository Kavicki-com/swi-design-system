import { Animated, View } from 'react-native';
import styled from 'styled-components/native';
import type { SkeletonShape } from './Skeleton.types';

/* Bloco de espera em surface.high, a cor do divisor das linhas das listas: a
   surface.medium quase não se distingue do cartão (surface.standard).
   Retângulo com o raio pequeno; círculo com o pill. */
export const Block = styled(Animated.View)<{ $shape: SkeletonShape }>`
  background-color: ${({ theme }) => theme.surface.high};
  border-radius: ${({ theme, $shape }) =>
    $shape === 'circle' ? theme.border.radius.pill : theme.border.radius.s}px;
`;

export const List = styled(View)`
  gap: ${({ theme }) => theme.gap.m}px;
`;

/* Linha no formato do cartão das listas do painel (administradores,
   funcionários): surface.standard, raio 8, padding 12 e 16. */
export const ListRow = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.padding.sm}px ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const Lines = styled(View)`
  flex: 1;
  gap: ${({ theme }) => theme.gap.s}px;
`;
