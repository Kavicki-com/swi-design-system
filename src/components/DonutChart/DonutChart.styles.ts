import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import type { DonutChartSize } from './DonutChart.types';

export const DIMS: Record<
  DonutChartSize,
  {
    outer: number;
    stroke: number;
    titleSize: number;
    valueSize: number;
    iconWidth: number;
    iconHeight: number;
    locationButton: number;
  }
> = {
  default: {
    outer: 182,
    stroke: 11,
    titleSize: 20,
    valueSize: 32,
    iconWidth: 38.5,
    iconHeight: 31,
    locationButton: 40,
  },
  small: {
    outer: 156,
    stroke: 10,
    titleSize: 16,
    valueSize: 20,
    iconWidth: 34.8,
    iconHeight: 28,
    locationButton: 36,
  },
};

export const Container = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const TitleText = styled.Text<{ $size: number }>`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ $size }) => $size}px;
  text-align: center;
`;

export const DonutWrapper = styled(View)<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ArcSlot = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

export const Center = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.xs}px;
  width: 96px;
`;

export const ValueText = styled.Text<{ $size: number }>`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ $size }) => $size}px;
  text-align: center;
`;

export const LabelText = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  text-align: center;
`;

export const Caption = styled.Text`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  text-align: center;
`;

export const LocationButton = styled(Pressable)<{ $size: number }>`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ theme }) => theme.surface.standard};
  align-items: center;
  justify-content: center;
`;
