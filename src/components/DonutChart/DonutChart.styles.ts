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
  /* Both children (TitleText, DonutWrapper) are individually centered in
     the cross-axis. Reverted from 'stretch' on 2026-05-19 because wide titles
     like "Média de batimentos" (~230px) made the Container wider than the
     182px DonutWrapper — with stretch the DonutWrapper sat at flex-start
     (left) of the wider Container, breaking visual alignment. With 'center',
     each child centers independently and the chart stays under its title. */
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.s}px;
`;

export const TitleText = styled.Text<{ $size: number; $align?: 'left' | 'center' }>`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ $size }) => $size}px;
  text-align: ${({ $align }) => $align ?? 'center'};
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

// Accept optional $size/$weight para override per-screen (Figma 364:16900
// caption/xs = 8px Bold; default fica em 12px Medium pra outras instâncias).
const resolveLabelWeight = (
  $w: 'regular' | 'medium' | 'bold' | undefined,
  theme: import('styled-components/native').DefaultTheme,
) => {
  if ($w === 'regular') return theme.fontWeight.regular;
  if ($w === 'bold') return theme.fontWeight.bold;
  return theme.fontWeight.medium;
};

export const LabelText = styled.Text<{ $size?: number; $weight?: 'regular' | 'medium' | 'bold' }>`
  color: ${({ theme }) => theme.content.dark};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ $weight, theme }) => resolveLabelWeight($weight, theme)};
  font-size: ${({ $size, theme }) => $size ?? theme.fontSize.sm}px;
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
  /* Inset shadow per Figma 43:2131 is applied via the consumer's global
   * stylesheet targeting [data-donut-loc-btn]. RN-Web/jsdom can't parse
   * the inset keyword in boxShadow inline values, hence the escape hatch. */
`;
