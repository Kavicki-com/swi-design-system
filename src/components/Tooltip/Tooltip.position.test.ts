import { describe, expect, it } from 'vitest';
import { tooltipBubbleStyle } from './Tooltip.position';

// O balao ancora numa borda do gatilho (sem medir largura): em cima/embaixo
// cola na esquerda e cresce para a direita; nas laterais cola no topo. Botoes
// na beira direita do mapa usam `left` para o balao crescer para dentro da tela.

describe('tooltipBubbleStyle', () => {
  it('top: sobe a partir da borda de cima, colado a esquerda', () => {
    const s = tooltipBubbleStyle('top', 6);
    expect(s.bottom).toBe('100%');
    expect(s.left).toBe(0);
    expect(s.marginBottom).toBe(6);
  });

  it('bottom: desce a partir da borda de baixo', () => {
    const s = tooltipBubbleStyle('bottom', 6);
    expect(s.top).toBe('100%');
    expect(s.left).toBe(0);
    expect(s.marginTop).toBe(6);
  });

  it('left: cresce para a esquerda do gatilho', () => {
    const s = tooltipBubbleStyle('left', 8);
    expect(s.right).toBe('100%');
    expect(s.top).toBe(0);
    expect(s.marginRight).toBe(8);
  });

  it('right: cresce para a direita do gatilho', () => {
    const s = tooltipBubbleStyle('right', 8);
    expect(s.left).toBe('100%');
    expect(s.top).toBe(0);
    expect(s.marginLeft).toBe(8);
  });

  it('sempre absoluto', () => {
    for (const side of ['top', 'bottom', 'left', 'right'] as const) {
      expect(tooltipBubbleStyle(side, 4).position).toBe('absolute');
    }
  });
});
