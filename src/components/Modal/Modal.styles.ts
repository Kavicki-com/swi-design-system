import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

/* Fundo que ocupa a janela e centraliza o cartão. O padding é a margem mínima
   entre o cartão e a borda da tela; a cor (theme.overlay) entra no
   ModalOverlay. */
export const Scrim = styled(Pressable)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.l}px;
`;

/* Cartão do Modal da biblioteca do Figma (461:10263): surface.standard,
   padding 16, raio 16. A sombra (elevation lg) entra por style, porque é
   objeto por plataforma. */
export const Card = styled(Pressable)`
  max-width: 100%;
  padding: ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.l}px;
  background-color: ${({ theme }) => theme.surface.standard};
  gap: ${({ theme }) => theme.gap.m}px;
`;

/* Conteúdo do Modal: tudo centralizado, como no Figma. Com o padding do
   cartão, os 227 dão os 259 do componente; o texto quebra dentro deles. */
export const Content = styled(View)`
  width: 227px;
  max-width: 100%;
  align-items: center;
  gap: ${({ theme }) => theme.gap.m}px;
`;

/* No Figma os dois botões do erro têm 94 de largura e 40 de espaço entre
   eles; a escala de gap para em 32, então o 40 vem do padding.xxl. */
export const Actions = styled(View)`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  gap: ${({ theme }) => theme.padding.xxl}px;
`;

export const ActionSlot = styled(View)`
  flex: 1;
`;
