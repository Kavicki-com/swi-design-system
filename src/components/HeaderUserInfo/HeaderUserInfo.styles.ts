import { View } from 'react-native';
import styled from 'styled-components/native';

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

export const VitalsCard = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.s}px;
  padding-left: ${({ theme }) => theme.padding.xl}px;
  padding-right: 56px;
  padding-vertical: ${({ theme }) => theme.padding.sm}px;
  border-width: ${({ theme }) => theme.border.size.s}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.content.medium};
  border-top-left-radius: ${({ theme }) => theme.border.radius.pill}px;
  border-bottom-left-radius: ${({ theme }) => theme.border.radius.pill}px;
  margin-right: -32px;
`;

export const StatsRow = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const StatItem = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xs}px;
`;

export const StatText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StatValueBold = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ProgressSlot = styled(View)`
  width: 138px;
`;
