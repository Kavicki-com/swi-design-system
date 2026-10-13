import { describe, expect, it } from 'vitest';
import { carouselItemStyle } from './Carousel.item';

// Cada item do carrossel tem largura minima e NAO encolhe: e isso que troca o
// "espremer" (flex:1 numa linha so) pela rolagem lateral (MEL-18/19).

describe('carouselItemStyle', () => {
  it('fixa a largura minima pedida', () => {
    expect(carouselItemStyle(260).minWidth).toBe(260);
  });

  it('nunca encolhe (flexShrink 0)', () => {
    expect(carouselItemStyle(100).flexShrink).toBe(0);
  });
});
