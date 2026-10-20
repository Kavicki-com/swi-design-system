import type { ViewStyle } from 'react-native';
import { STATUS_CHART_CANVAS } from './StatusChart.paths';
import type { StatusChartSize } from './StatusChart.types';

/** Fator do preset compact: 289.733 / 360 (Figma 342:9420). */
export const COMPACT_SCALE = 289.733 / STATUS_CHART_CANVAS.width;

// Grade de pontos (Figma `Repetição de grade 4`): 27 colunas de 10.6228 a
// cada 15.93 (424.8 de largura), centradas no canvas e transbordando 32.4
// para cada lado. Mesmas medidas do BackgroundDotsGrid.
export const BG_GRID_COLUMNS = 27;
const BG_GRID_COL_WIDTH = 10.6228;
const BG_GRID_COL_SPACING = 15.93;
const gridWidth = (columns: number) => (columns - 1) * BG_GRID_COL_SPACING + BG_GRID_COL_WIDTH;
const gridLeft = (columns: number) => (STATUS_CHART_CANVAS.width - gridWidth(columns)) / 2;
// Altura natural das 13 linhas (nó 245:23280).
const BG_GRID_NATURAL_HEIGHT = 157.829;
// Preset default: a grade sobe até o topo do Caminho 4122 extrapolado
// (y = -75) e ganha 7 linhas extras (r = 1.64, passo 14.32) para descer até
// o ombro da silhueta (y ≈ 158): 156.189 + 7 × 14.32 + 1.64 = 258.069.
const BG_GRID_EXTENDED_TOP = -75;
const BG_GRID_EXTENDED_ROWS = 20;
const BG_GRID_EXTENDED_HEIGHT = 258.069;

export interface BackgroundGridLayout {
  /** Linhas a desenhar; ausente usa as 13 naturais. */
  rows?: number;
  top: number;
  left: number;
  width: number;
  height: number;
}

/**
 * Arranjo da grade de pontos por preset, em unidades do canvas 360 x 374.
 *
 * No compact o nó-fonte (342:9420) mostra o grupo `background-chart` com
 * 341.98 x 127.02 em x = -25.99, y = 0: a grade natural, encostada no topo
 * e escalada por 0.80481. No default ela é a versão estendida do dashboard.
 */
export const backgroundGridLayout = (
  size: StatusChartSize,
  columns: number = BG_GRID_COLUMNS,
): BackgroundGridLayout =>
  size === 'compact'
    ? { top: 0, left: gridLeft(columns), width: gridWidth(columns), height: BG_GRID_NATURAL_HEIGHT }
    : {
        rows: BG_GRID_EXTENDED_ROWS,
        top: BG_GRID_EXTENDED_TOP,
        left: gridLeft(columns),
        width: gridWidth(columns),
        height: BG_GRID_EXTENDED_HEIGHT,
      };

/**
 * Colunas para a grade encostar nas duas bordas de uma janela de `windowWidth`
 * quando o chart é desenhado com `scale` (1 no default, COMPACT_SCALE no
 * compact, ou a escala que a tela aplicar por cima). Nunca menos que as 27
 * do desenho; duas colunas a mais cobrem o arredondamento de centralização.
 */
export const gridColumnsToCover = (windowWidth: number, scale: number): number =>
  Math.max(BG_GRID_COLUMNS, Math.ceil(windowWidth / (BG_GRID_COL_SPACING * scale)) + 2);

/**
 * Moldura do preset escalado: ocupa no layout o tamanho do nó-fonte e deixa
 * passar o que transborda, como o Figma faz com a grade de pontos (26 para
 * cada lado do chart). Cortar aqui deixava a grade com a largura do chart.
 */
export const chartFrameStyle = (scale: number): ViewStyle => ({
  width: STATUS_CHART_CANVAS.width * scale,
  height: STATUS_CHART_CANVAS.height * scale,
  overflow: 'visible',
});
