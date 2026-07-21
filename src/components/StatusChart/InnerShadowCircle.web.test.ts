import { describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { InnerShadowCircle } from './InnerShadowCircle.web';

// Parâmetros do call site Elipse 34 (botão heart-rate) — Figma 295:2178.
const render = () =>
  renderToStaticMarkup(
    createElement(InnerShadowCircle, {
      size: 68.974,
      fill: '#1F1F1F',
      dy: 2.18,
      blur: 2.18,
      alpha: 0.6314,
    }),
  );

describe('InnerShadowCircle (web)', () => {
  it('desenha o círculo com a filter chain de inner shadow em SVG DOM', () => {
    const html = render();
    expect(html).toContain('<filter');
    expect(html).toContain('flood-opacity="0"');
    expect(html).toContain('dy="2.18"');
    expect(html).toContain('stdDeviation="2.18"');
    expect(html).toContain('operator="arithmetic"');
    expect(html).toContain('0.6314');
    expect(html).toContain('r="34.487"');
    expect(html).toContain('fill="#1F1F1F"');
    expect(html).toMatch(/filter="url\(#[^)]+\)"/);
  });

  it('gera filter ids únicos por instância (duas instâncias no mesmo DOM não colidem)', () => {
    const a = render().match(/<filter id="([^"]+)"/)?.[1];
    const html2 = renderToStaticMarkup(
      createElement(
        'div',
        null,
        createElement(InnerShadowCircle, { size: 10, fill: '#000', dy: 1, blur: 1, alpha: 0.5 }),
        createElement(InnerShadowCircle, { size: 10, fill: '#000', dy: 1, blur: 1, alpha: 0.5 }),
      ),
    );
    const ids = [...html2.matchAll(/<filter id="([^"]+)"/g)].map((m) => m[1]);
    expect(a).toBeTruthy();
    expect(ids).toHaveLength(2);
    expect(ids[0]).not.toBe(ids[1]);
  });
});
