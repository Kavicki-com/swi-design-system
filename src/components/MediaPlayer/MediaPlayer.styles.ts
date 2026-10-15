import { View } from 'react-native';
import styled from 'styled-components/native';

/* Mesmo cartão da linha do AttachmentList (surface.standard, raio m), para o
   player ler como parte da lista de anexos. */
export const Card = styled(View)`
  gap: ${({ theme }) => theme.gap.s}px;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
`;

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const TitleSlot = styled(View)`
  flex: 1;
  min-width: 0;
`;
