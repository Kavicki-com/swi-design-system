import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  backgroundGridLayout,
  chartFrameStyle,
  COMPACT_SCALE,
  gridColumnsToCover,
} from './StatusChart.grid';

// A grade de pontos do StatusChart tem dois arranjos no Figma, um por preset.
//
// No preset default (dashboard) ela sobe até o topo do Caminho 4122
// extrapolado (y = -75) e ganha linhas extras para descer até o ombro da
// silhueta. No preset compact (nó 342:9420, my-stats) o grupo
// `background-chart` mede 341.98 x 127.02 e fica em x = -25.99, y = 0: é a
// grade natural de 13 linhas (157.829 de altura) e 425 de largura, escalada
// por 0.80481, encostada no topo do canvas e transbordando 26 para cada lado
// do chart. O nó não corta nada: os pontos passam da borda do chart.

describe('StatusChart: grade de pontos por preset', () => {
  it('no compact a grade é a natural, encostada no topo do canvas', () => {
    const grade = backgroundGridLayout('compact');

    expect(grade.top).toBe(0);
    expect(grade.rows).toBeUndefined();
    expect(grade.height).toBeCloseTo(157.829, 3);
    expect(grade.width).toBeCloseTo(424.8, 0);
    expect(grade.left).toBeCloseTo(-32.4, 0);
  });

  it('no compact a grade escalada bate com o grupo medido no nó-fonte', () => {
    const grade = backgroundGridLayout('compact');

    expect(grade.width * COMPACT_SCALE).toBeCloseTo(341.98, 0);
    expect(grade.height * COMPACT_SCALE).toBeCloseTo(127.02, 0);
    expect(grade.left * COMPACT_SCALE).toBeCloseTo(-25.99, 0);
  });

  it('no default a grade continua estendida até o Caminho 4122', () => {
    const grade = backgroundGridLayout('default');

    expect(grade.top).toBe(-75);
    expect(grade.rows).toBe(20);
    expect(grade.height).toBeCloseTo(258.069, 3);
    expect(grade.width).toBeCloseTo(424.8, 0);
    expect(grade.left).toBeCloseTo(-32.4, 0);
  });

  it('mais colunas alargam a grade e a mantêm centrada no canvas', () => {
    const grade = backgroundGridLayout('compact', 35);

    expect(grade.width).toBeCloseTo(34 * 15.93 + 10.6228, 3);
    expect(grade.left).toBeCloseTo((360 - grade.width) / 2, 6);
    expect(grade.top).toBe(0);
  });
});

describe('StatusChart: colunas chegam à grade desenhada', () => {
  it('a prop gridColumns é repassada ao BackgroundDotsGrid, não só à largura', () => {
    // Sem o repasse, o SVG continua com 27 colunas centradas dentro de uma
    // caixa mais larga, e a grade não encosta nas bordas.
    const chart = readFileSync(join(__dirname, 'StatusChart.tsx'), 'utf8');

    expect(chart).toMatch(/<BackgroundDotsGrid[\s\S]*?columns=\{gridColumns\}/);
  });
});

describe('StatusChart: colunas para cobrir a janela', () => {
  // As 27 colunas do Figma encostam nas bordas de um frame de 360. Num
  // aparelho mais largo a grade precisa de mais colunas para continuar
  // encostando, e no compact cada coluna ocupa 15.93 x 0.80481 na tela.
  it('num aparelho de 411 o compact precisa de 35 colunas', () => {
    const colunas = gridColumnsToCover(411, COMPACT_SCALE);

    expect(colunas).toBe(35);
    expect(backgroundGridLayout('compact', colunas).width * COMPACT_SCALE).toBeGreaterThanOrEqual(411);
  });

  it('num frame de 360 sem escala, as 27 colunas do Figma já bastam', () => {
    expect(gridColumnsToCover(360, 1)).toBeLessThanOrEqual(27);
  });

  it('nunca devolve menos que as 27 colunas do desenho', () => {
    expect(gridColumnsToCover(200, 1)).toBe(27);
  });
});

describe('StatusChart: moldura do compact', () => {
  it('tem o tamanho do nó-fonte e não corta o que transborda', () => {
    const moldura = chartFrameStyle(COMPACT_SCALE);

    expect(moldura.width).toBeCloseTo(289.733, 3);
    expect(moldura.height).toBeCloseTo(301.0, 1);
    expect(moldura.overflow).toBe('visible');
  });
});
