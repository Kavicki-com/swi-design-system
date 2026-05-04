import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`;

type TabState = {
  $active: boolean;
  $first: boolean;
  $last: boolean;
  $fullWidth: boolean;
  $disabled: boolean;
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
  border-width: ${({ $active, theme }) => ($active ? 0 : theme.border.size.s)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.content.secondary};
  border-top-left-radius: ${({ $first, theme }) =>
    $first ? theme.border.radius.m : 0}px;
  border-bottom-left-radius: ${({ $first, theme }) =>
    $first ? theme.border.radius.m : 0}px;
  border-top-right-radius: ${({ $last, theme }) =>
    $last ? theme.border.radius.m : 0}px;
  border-bottom-right-radius: ${({ $last, theme }) =>
    $last ? theme.border.radius.m : 0}px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

export const TabLabel = styled.Text<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ $active, theme }) =>
    $active ? theme.content.light : theme.content.secondary};
`;
