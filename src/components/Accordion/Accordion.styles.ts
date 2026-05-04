import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  overflow: hidden;
`;

export const Header = styled(Pressable)<{ $disabled: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding-horizontal: ${({ theme }) => theme.padding.s}px;
  padding-vertical: ${({ theme }) => theme.padding.xs}px;
  background-color: ${({ theme }) => theme.surface.medium};
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

export const TitleText = styled.Text`
  flex: 1;
  min-width: 0;
  text-align: center;
  color: ${({ theme }) => theme.content.primary};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.m}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Content = styled(View)`
  align-self: stretch;
  min-width: 0;
  margin-top: 2px;
  background-color: ${({ theme }) => theme.surface.standard};
  padding: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
`;

export const ContentText = styled.Text`
  min-width: 0;
  color: ${({ theme }) => theme.content.medium};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const ChevronWrap = styled(View)<{ $open: boolean }>`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xs}px;
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
`;
