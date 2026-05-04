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
