import { View } from 'react-native';
import styled from 'styled-components/native';

export const List = styled(View)`
  gap: ${({ theme }) => theme.gap.s}px;
`;

/* Linha no molde do exame compacto do Figma (159:15646): surface.standard,
   raio 8, padding 4 e 12, gap 8. */
export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.padding.xs}px ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
  gap: ${({ theme }) => theme.gap.s}px;
`;

/* Quadro de 56, o tamanho do Image da biblioteca do Figma. Sem miniatura,
   o fundo surface.high (o surface.medium sumiria sobre a linha) segura o
   clipe no centro. */
export const Thumb = styled(View)`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${({ theme }) => theme.surface.high};
`;

export const NameSlot = styled(View)`
  flex: 1;
  min-width: 0;
`;

export const Actions = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;
