import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const ExpandedBar = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.m}px;
  padding-left: ${({ theme }) => theme.padding.m}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
  align-self: flex-end;
`;

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const Divider = styled(View)`
  width: 1px;
  height: 40px;
  background-color: ${({ theme }) => theme.content.medium};
`;

export const SearchSlot = styled(View)`
  width: 284px;
`;

export const OptionsRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.m}px;
  padding: ${({ theme }) => theme.padding.sm}px;
`;

export const TrailingButton = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-top-right-radius: ${({ theme }) => theme.border.radius.m}px;
  border-bottom-right-radius: ${({ theme }) => theme.border.radius.m}px;
`;

export const CollapsedButton = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.high};
  align-self: flex-end;
`;

// A barra vira âncora da lista, que fica por cima do que está embaixo (os
// outros controles do mapa) em vez de empurrar. Com a lista aberta a âncora
// sobe no empilhamento: sem isso, um controle que venha depois na ordem do
// documento pinta por cima da lista.
export const Anchor = styled(View)<{ $raised: boolean }>`
  position: relative;
  align-self: flex-end;
  z-index: ${({ $raised }) => ($raised ? 10 : 0)};
`;

export const ResultsPanel = styled(View)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${({ theme }) => theme.gap.xs}px;
  width: 100%;
  max-height: 240px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.standard};
  overflow: hidden;
  z-index: 1;
`;

export const ResultRow = styled(Pressable)`
  padding-vertical: ${({ theme }) => theme.padding.s}px;
  padding-horizontal: ${({ theme }) => theme.padding.m}px;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const ResultLabel = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

// `fontSize.s` é 8px (rótulo de gráfico); a linha secundária usa `sm` (12px),
// o menor tamanho de texto corrido do DS.
export const ResultDescription = styled.Text`
  color: ${({ theme }) => theme.content.medium};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;
