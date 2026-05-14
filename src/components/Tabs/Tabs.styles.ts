import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)<{ $separated?: boolean }>`
  flex-direction: row;
  align-items: center;
  ${({ $separated, theme }) => ($separated ? `gap: ${theme.gap.s}px;` : '')};
`;

type TabState = {
  $active: boolean;
  $first: boolean;
  $last: boolean;
  $fullWidth: boolean;
  $disabled: boolean;
  $separated: boolean;
};

export const Tab = styled(Pressable)<TabState>`
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({ theme }) => theme.padding.s}px;
  padding-vertical: ${({ theme }) => theme.padding.s}px;
  min-height: 36px;
  ${({ $fullWidth }) => ($fullWidth ? 'flex: 1; min-width: 0;' : '')};
  background-color: ${({ $active, theme }) =>
    $active ? theme.surface.secondary : 'transparent'};
  /* Separated tabs always carry a border, including the active one — the
     border outlines each pill so the cyan bg of the active tab still reads
     as an enclosed button (Figma 69:14770). Segmented tabs keep the legacy
     behaviour where the active tab drops its border. */
  border-width: ${({ $active, $separated, theme }) =>
    !$active || $separated ? theme.border.size.s : 0}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.content.secondary};
  /* Separated tabs are independent pills: all four corners rounded.
     Segmented keeps the legacy "first/last only" rounding so the row reads
     as one segmented control. */
  border-top-left-radius: ${({ $first, $separated, theme }) =>
    $separated || $first ? theme.border.radius.m : 0}px;
  border-bottom-left-radius: ${({ $first, $separated, theme }) =>
    $separated || $first ? theme.border.radius.m : 0}px;
  border-top-right-radius: ${({ $last, $separated, theme }) =>
    $separated || $last ? theme.border.radius.m : 0}px;
  border-bottom-right-radius: ${({ $last, $separated, theme }) =>
    $separated || $last ? theme.border.radius.m : 0}px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

export const TabLabel = styled.Text<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ $active, theme }) =>
    $active ? theme.content.light : theme.content.secondary};
`;
