import { Pressable, View } from 'react-native';
import styled, { type DefaultTheme } from 'styled-components/native';

export interface TriggerProps {
  $focused: boolean;
  $hovered: boolean;
  $disabled: boolean;
}

const triggerBackground = ({
  $focused,
  $hovered,
  $disabled,
  theme,
}: TriggerProps & { theme: DefaultTheme }) => {
  if ($disabled) return theme.surface.disable;
  if ($focused || $hovered) return theme.surface.medium;
  return theme.surface.standard;
};

export const Container = styled(View)<{ $open?: boolean }>`
  flex-direction: column;
  align-self: stretch;
  gap: ${({ theme }) => theme.gap.xs}px;
  /* When the menu is open we lift the whole container so its absolutely-
   * positioned Panel paints above following sibling Comboboxes/inputs.
   * Without this, the next sibling (which is static-positioned and comes
   * later in DOM order) renders on top of the floating Panel. */
  position: ${({ $open }) => ($open ? 'relative' : 'static')};
  z-index: ${({ $open }) => ($open ? 1000 : 'auto')};
`;

/* Inter Bold per Figma (e.g. 213:13619 "Tipo sanguíneo"). Antes era
   fontFamily.title (Montserrat) — corrigido 2026-05-18 quando o usuário
   detectou no step-3 que Altura/Peso/Tipo sanguíneo renderizavam Montserrat
   enquanto os outros labels Inter próximos eram Inter.
   IMPORTANTE: comentário fica FORA do template literal — styled-components
   trata "//" line comments dentro do template como CSS quebrado e o texto
   do comentário vaza pro className, anulando font-family. */
export const Label = styled.Text<{ $disabled: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.content.disable : theme.content.dark)};
`;

export const Trigger = styled(Pressable)<TriggerProps>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.m}px;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${(props) => triggerBackground(props)};
`;

export const TriggerLabel = styled.Text<{ $placeholder: boolean; $disabled: boolean }>`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  color: ${({ $placeholder, $disabled, theme }) => {
    if ($disabled) return theme.content.disable;
    if ($placeholder) return theme.content.medium;
    return theme.content.dark;
  }};
`;

export const Chevron = styled.Text<{ $disabled: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.content.disable : theme.content.dark)};
`;

export const Panel = styled(View)`
  /* Float above siblings instead of pushing them down. */
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: ${({ theme }) => theme.gap.xs}px;
  z-index: 50;
  min-width: 160px;
  /* surface.high is a touch lighter than the chart card behind it
   * (surface.medium), giving the floating panel a visible silhouette. */
  background-color: ${({ theme }) => theme.surface.high};
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.content.medium};
  padding: ${({ theme }) => theme.padding.s}px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
`;

export const OptionsList = styled(View)`
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const OptionRow = styled(Pressable)<{ $first: boolean; $hovered: boolean }>`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${({ theme }) => theme.padding.s}px;
  padding-vertical: 10px;
  border-top-width: ${({ $first }) => ($first ? 0 : 1)}px;
  border-top-color: ${({ theme }) => theme.content.medium};
  background-color: ${({ $hovered, theme }) => ($hovered ? theme.surface.hover : 'transparent')};
`;

export const OptionLabel = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  color: ${({ theme }) => theme.content.dark};
`;

export const Description = styled.Text<{ $disabled: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.content.disable : theme.content.dark)};
`;
