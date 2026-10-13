import { View } from 'react-native';
import styled from 'styled-components/native';

/** Envolve o gatilho; o balao ancora relativo a este wrapper. */
export const Anchor = styled(View)`
  position: relative;
  align-self: flex-start;
`;

/**
 * Balao escuro sobre `surface.standard`, texto claro, cantos suaves. Nao
 * captura toque (pointerEvents none fica no componente). `maxWidth` evita o
 * balao esticar demais num rotulo longo.
 */
export const Bubble = styled(View)`
  max-width: 220px;
  padding: ${({ theme }) => theme.padding.xs}px ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${({ theme }) => theme.surface.standard};
`;

export const BubbleText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.content.dark};
`;
