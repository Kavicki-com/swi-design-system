import { Pressable, TextInput, View } from 'react-native';
import styled, { css, type DefaultTheme } from 'styled-components/native';
import { typography } from '../../tokens';
import type { InputDescriptionVariant, InputLabelWeight } from './Input.types';

export interface RowProps {
  $focused: boolean;
  $hovered: boolean;
  $disabled: boolean;
}

export interface DescriptionProps {
  $disabled: boolean;
  $variant: InputDescriptionVariant;
}

const descriptionColor = ({
  $disabled,
  $variant,
  theme,
}: DescriptionProps & { theme: DefaultTheme }) => {
  if ($disabled) return theme.content.disable;
  if ($variant === 'success') return theme.content.success;
  if ($variant === 'error') return theme.content.error;
  if ($variant === 'warning') return theme.content.warning;
  return theme.content.dark;
};

const rowBackground = ({ $focused, $hovered, $disabled, theme }: RowProps & { theme: DefaultTheme }) => {
  if ($disabled) return theme.surface.disable;
  if ($focused || $hovered) return theme.surface.medium;
  return theme.surface.standard;
};

export const Container = styled(View)`
  flex-direction: column;
  align-self: stretch;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

// Label triplet: default `bold` (Inter 700/14) references `typography.label.m`
// added in v0.1.80. `regular` / `medium` branches stay on theme tokens — they
// emit Inter 400/14 and Inter 500/14 respectively, which the variant matrix
// doesn't enumerate as named typography variants. Triplet output identical to
// the previous implementation.
const labelTriplet = (
  $weight: InputLabelWeight | undefined,
  theme: DefaultTheme,
) => {
  const weight = $weight ?? 'bold';
  if (weight === 'bold') return typography.label.m;
  const fontWeight =
    weight === 'regular' ? theme.fontWeight.regular : theme.fontWeight.medium;
  return { fontFamily: theme.fontFamily.body, fontWeight, fontSize: theme.fontSize.m };
};

export const Label = styled.Text<{ $disabled: boolean; $weight?: InputLabelWeight }>`
  font-family: ${({ $weight, theme }) => labelTriplet($weight, theme).fontFamily};
  font-weight: ${({ $weight, theme }) => labelTriplet($weight, theme).fontWeight};
  font-size: ${({ $weight, theme }) => labelTriplet($weight, theme).fontSize}px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.content.disable : theme.content.dark)};
`;

export const Row = styled(Pressable)<RowProps>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.m}px;
  padding: ${({ theme }) => theme.padding.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${(props) => rowBackground(props)};
  ${({ $disabled, theme }) =>
    $disabled
      ? css`
          border-width: ${theme.border.size.s}px;
          border-color: ${theme.content.disable};
        `
      : ''};
`;

export const HoverOverlay = styled(View)`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.surface.hover};
  pointer-events: none;
`;

export const FocusRing = styled(View)`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.content.primary};
  border-radius: ${({ theme }) => theme.border.radius.m + 2}px;
  pointer-events: none;
`;

export const StyledInput = styled(TextInput)<{ $disabled: boolean }>`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.content.disable : theme.content.dark)};
  padding: 0;
  margin: 0;
  outline-width: 0;
  outline-style: none;
`;

export const IconSlot = styled(View)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xs}px;
`;

export const Description = styled.Text<DescriptionProps>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${(props) => descriptionColor(props)};
`;
