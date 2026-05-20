import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  align-self: stretch;
  border-width: 1px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.content.primary};
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  padding: ${({ theme }) => theme.padding.m}px;
  gap: ${({ theme }) => theme.gap.m}px;
  align-items: center;
`;

export const HelperText = styled.Text`
  align-self: stretch;
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const PreviewSlot = styled(View)`
  align-self: stretch;
  height: 56px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.surface.medium};
`;

export const RemoveButton = styled(Pressable)`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ theme }) => theme.surface.error};
  align-items: center;
  justify-content: center;
`;
