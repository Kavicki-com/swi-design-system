import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { layoutPoints, linePath, segmentedPath, segmentsOf } from './LineCaloriesChart.utils';

// Periodo sem medicao e buraco no grafico, nunca zero e nunca uma linha reta
// ligando os vizinhos por cima do vazio: a linha seria um dado inventado.

const W = 1013;
const H = 110;

describe('layoutPoints com ausencia', () => {
  it('o ponto nulo ocupa o seu lugar no eixo do tempo, mas nao e desenhado', () => {
    const laid = layoutPoints(
      [
        { time: '08:00', kcal: 40 },
        { time: '09:00', kcal: null },
        { time: '10:00', kcal: 60 },
      ],
      W,
      H,
    );
    expect(laid.map((p) => p.index)).toEqual([0, 2]);
    // O terceiro ponto continua na ponta direita, como se o do meio existisse.
    expect(laid[1]!.x).toBeCloseTo(W - 40);
  });

  it('a escala vertical considera so os valores medidos', () => {
    const laid = layoutPoints(
      [
        { time: '08:00', kcal: 10 },
        { time: '09:00', kcal: null },
        { time: '10:00', kcal: 20 },
      ],
      W,
      H,
    );
    expect(laid[0]!.y).toBeGreaterThan(laid[1]!.y);
  });

  it('tudo nulo nao desenha nada', () => {
    const laid = layoutPoints([{ time: '08:00', kcal: null }], W, H);
    expect(laid).toEqual([]);
    expect(segmentedPath(laid)).toBe('');
  });
});

describe('segmentsOf e segmentedPath', () => {
  it('quebra a linha onde ha buraco', () => {
    const laid = layoutPoints(
      [
        { time: '1', kcal: 1 },
        { time: '2', kcal: 2 },
        { time: '3', kcal: null },
        { time: '4', kcal: 4 },
        { time: '5', kcal: 5 },
      ],
      W,
      H,
    );
    const segments = segmentsOf(laid);
    expect(segments.map((s) => s.map((p) => p.index))).toEqual([
      [0, 1],
      [3, 4],
    ]);
    const d = segmentedPath(laid);
    // Dois "M": dois trechos, sem curva passando pelo vazio.
    expect(d.match(/M /g)).toHaveLength(2);
  });

  it('sem buraco o caminho e identico ao de antes', () => {
    const points = [
      { time: '07:15', kcal: 46 },
      { time: '08:42', kcal: 67 },
      { time: '10:51', kcal: 61 },
    ];
    const laid = layoutPoints(points, W, H);
    expect(segmentedPath(laid)).toBe(linePath(laid));
  });
});

describe('LineCaloriesChart: renderizacao', () => {
  const types = readFileSync(join(__dirname, 'LineCaloriesChart.types.ts'), 'utf8');
  const native = readFileSync(join(__dirname, 'LineCaloriesChart.tsx'), 'utf8');
  const web = readFileSync(join(__dirname, 'LineCaloriesChart.web.tsx'), 'utf8');

  it('o ponto aceita kcal nulo', () => {
    expect(types).toMatch(/kcal: number \| null/);
  });

  it('nativo e web desenham por trechos', () => {
    expect(native).toMatch(/segmentedPath\(laid\)/);
    expect(web).toMatch(/segmentedPath\(laid\)/);
  });
});
