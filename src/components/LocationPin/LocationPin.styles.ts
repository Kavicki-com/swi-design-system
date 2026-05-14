import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(View)`
  align-items: center;
  justify-content: flex-start;
`;

/* Overlap the tail slightly with the avatar so the triangle visually attaches
   to the bottom of the circle (mirrors Figma 32:2493 layout). */
export const TailWrapper = styled(View)`
  margin-top: -2px;
`;

/* Camera-variant body: square green card with a darker green border and a
   centered camera icon child (rendered by the component). Mirrors Figma
   33:4421 camera pins. Border color is primitive.green[400] (#41955E) —
   same pattern as the status border colors hardcoded in LocationPin.tsx
   because there's no semantic surface.primaryDark token yet. */
export const CameraBody = styled(View)<{ $size: number }>`
  ${({ $size, theme }) => css`
    width: ${$size}px;
    height: ${$size}px;
    border-radius: ${Math.round($size * 0.18)}px;
    background-color: ${theme.surface.primary};
    border-width: 2px;
    border-color: #41955e;
    align-items: center;
    justify-content: center;
  `}
`;

/* Badge-variant body: solid status-colored circle with a centered glyph
   (rendered by the component). Mirrors Figma 100:5611 alert map pins. */
export const BadgeBody = styled(View)<{ $size: number; $fill: string }>`
  ${({ $size, $fill }) => css`
    width: ${$size}px;
    height: ${$size}px;
    border-radius: ${$size / 2}px;
    background-color: ${$fill};
    align-items: center;
    justify-content: center;
  `}
`;
