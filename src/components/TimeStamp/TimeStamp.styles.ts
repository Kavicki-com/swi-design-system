import { View } from 'react-native';
import styled from 'styled-components/native';

export const Pill = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xs}px;
  border-radius: ${({ theme }) => theme.border.radius.s}px;
  background-color: ${({ theme }) => theme.surface.primaryLight};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.content.light};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s}px;
`;

export const Triangle = styled(View)`
  position: absolute;
  top: -9px;
  left: 50%;
  margin-left: -4.5px;
  width: 0;
  height: 0;
  border-left-width: 4.5px;
  border-right-width: 4.5px;
  border-bottom-width: 9px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${({ theme }) => theme.surface.primaryLight};
`;
