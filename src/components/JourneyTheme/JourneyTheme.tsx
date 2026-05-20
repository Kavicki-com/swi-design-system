/**
 * JourneyTheme — composite background usado em telas da família journey/reports
 * (journey, journey-ongoing, journey-pause, task-details idle/ongoing,
 * reports, report-details, new-report).
 *
 * 3 camadas, ordem de empilhamento (z atrás → z na frente):
 *   1. Gradient base (image, full-bleed) — Figma `imgJourney` em geral
 *   2. Mesh wireframe pattern (image, 1600×1600 @ top:143, left:-449) —
 *      Figma 364:17123 smartband-background-pattern
 *   3. Dot-grid (Figma 364:16538 Repetição de grade 4) — 27 colunas × 13 dots,
 *      cor #65D040 9% opacity, centrado horizontal e anchorado no topo (-23)
 *
 * Position absolute fill — wrap dentro de um `<View style={{ flex: 1 }}>`
 * que contém o conteúdo principal. `pointerEvents: 'none'` em todas as
 * camadas — não captura toques.
 */
import React from 'react';
import { Image, View } from 'react-native';
import { BackgroundDotsGrid } from '../BackgroundDotsGrid';
import type { JourneyThemeProps } from './JourneyTheme.types';

const PATTERN_NATURAL_SIZE = 1600;
const PATTERN_TOP = 143;
const PATTERN_LEFT = -449;

// Dot-grid Figma defaults (27 colunas, ~414.92 wide → metade = 207.46):
const DOT_GRID_TOP = -23;
const DOT_GRID_WIDTH_HALF = 207.46;

export const JourneyTheme = ({
  gradient,
  pattern,
  showDotGrid = true,
  dotGridColor,
  dotGridOpacity,
  dotGridColumns,
  dotGridStyle,
  testID,
}: JourneyThemeProps) => (
  <View
    pointerEvents="none"
    testID={testID}
    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}
  >
    {gradient ? (
      <Image
        source={gradient}
        resizeMode="cover"
        accessible={false}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
      />
    ) : null}
    {pattern ? (
      <Image
        source={pattern}
        resizeMode="cover"
        accessible={false}
        style={{
          position: 'absolute',
          top: PATTERN_TOP,
          left: PATTERN_LEFT,
          width: PATTERN_NATURAL_SIZE,
          height: PATTERN_NATURAL_SIZE,
        }}
      />
    ) : null}
    {showDotGrid ? (
      <BackgroundDotsGrid
        columns={dotGridColumns}
        color={dotGridColor}
        opacity={dotGridOpacity}
        style={[
          { position: 'absolute', top: DOT_GRID_TOP, left: '50%', transform: [{ translateX: -DOT_GRID_WIDTH_HALF }] },
          dotGridStyle,
        ]}
      />
    ) : null}
  </View>
);

JourneyTheme.displayName = 'JourneyTheme';
