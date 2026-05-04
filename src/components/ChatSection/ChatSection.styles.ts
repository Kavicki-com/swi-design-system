import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.gap.sm}px;
  padding: ${({ theme }) => theme.padding.s}px;
  border-radius: ${({ theme }) => theme.border.radius.m}px;
  background-color: ${({ theme }) => theme.background};
`;

export const ListScroll = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
  max-height: 296px;
`;

export const ListInner = styled(View)`
  gap: ${({ theme }) => theme.gap.xs}px;
`;
