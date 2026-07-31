import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

/**
 * Wrapper posicionado que abraca o gatilho. `align-self: flex-start` faz ele
 * ter a largura do gatilho e nao a da linha inteira, o que importa porque o
 * painel ancora nas bordas DELE.
 */
export const Anchor = styled(View)`
  position: relative;
  align-self: flex-start;
`;

/**
 * Painel flutuante. O visual e o mesmo do painel do Combobox, valor por valor,
 * de proposito: e o unico painel flutuante que o DS ja tinha, e nao existe
 * desenho de popover no Figma. Duas superficies flutuantes com aparencias
 * diferentes seriam duas linguagens dentro do mesmo produto.
 *
 * Coordenadas (top / left / right) chegam por style, de panelOffsets.
 */
export const Panel = styled(View)<{ $minWidth: number }>`
  position: absolute;
  z-index: 100;
  min-width: ${({ $minWidth }) => $minWidth}px;
  background-color: ${({ theme }) => theme.surface.high};
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.content.medium};
  padding: ${({ theme }) => theme.padding.s}px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
`;

/** Empilha os itens com o mesmo respiro do OptionsList do Combobox. */
export const ItemList = styled(View)`
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

/**
 * Linha do menu, modelada no OptionRow do Combobox: mesma altura efetiva
 * (10px vertical), mesmo respiro lateral, mesmo realce de hover. A diferenca e
 * que aqui a linha e uma acao, entao ganha raio proprio para o realce nao
 * vazar por cima dos cantos do painel.
 */
export const ItemRow = styled(Pressable)<{ $hovered: boolean; $disabled: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.s}px;
  padding-horizontal: ${({ theme }) => theme.padding.s}px;
  padding-vertical: 10px;
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  background-color: ${({ $hovered, $disabled, theme }) =>
    $hovered && !$disabled ? theme.surface.hover : 'transparent'};
`;

export const ItemLabel = styled.Text<{ $color: string }>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  color: ${({ $color }) => $color};
`;

/**
 * Fio de separacao. Mesma cor que o Combobox usa entre opcoes, para nao
 * introduzir um cinza novo so aqui.
 */
export const Separator = styled(View)`
  height: 1px;
  background-color: ${({ theme }) => theme.content.medium};
  margin-vertical: ${({ theme }) => theme.margin.xs}px;
`;
