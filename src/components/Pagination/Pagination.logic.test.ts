import { describe, expect, it } from 'vitest';
import {
  isNextDisabled,
  isPaginationVisible,
  paginationPages,
  showOverflow,
} from './Pagination.logic';

// A tira numerada mostra uma janela de paginas ao redor da atual, nunca uma
// pagina por botao quando a lista e longa (1205 funcionarios = dezenas de
// paginas). A pagina atual fica destacada, o avancar trava na ultima e a tira
// some quando so existe uma pagina.

describe('paginationPages', () => {
  it('lista inteira cabe na janela', () => {
    expect(paginationPages(1, 4, 4)).toEqual([1, 2, 3, 4]);
    expect(paginationPages(1, 2, 4)).toEqual([1, 2]);
    expect(paginationPages(1, 1, 4)).toEqual([1]);
  });

  it('janela comeca no inicio quando a atual esta no comeco', () => {
    expect(paginationPages(1, 10, 4)).toEqual([1, 2, 3, 4]);
    expect(paginationPages(2, 10, 4)).toEqual([1, 2, 3, 4]);
  });

  it('janela desliza centrada na pagina atual', () => {
    expect(paginationPages(7, 10, 4)).toEqual([5, 6, 7, 8]);
  });

  it('janela cola no fim quando a atual esta no fim', () => {
    expect(paginationPages(10, 10, 4)).toEqual([7, 8, 9, 10]);
  });
});

describe('showOverflow', () => {
  it('mostra "..." quando ainda ha paginas depois da janela', () => {
    expect(showOverflow([1, 2, 3, 4], 10)).toBe(true);
  });

  it('esconde "..." quando a janela chega na ultima pagina', () => {
    expect(showOverflow([7, 8, 9, 10], 10)).toBe(false);
    expect(showOverflow([1, 2, 3], 3)).toBe(false);
  });
});

describe('isNextDisabled', () => {
  it('trava o avancar na ultima pagina', () => {
    expect(isNextDisabled(10, 10)).toBe(true);
    expect(isNextDisabled(1, 10)).toBe(false);
    expect(isNextDisabled(1, 1)).toBe(true);
  });
});

describe('isPaginationVisible', () => {
  it('some com uma pagina so', () => {
    expect(isPaginationVisible(1)).toBe(false);
    expect(isPaginationVisible(0)).toBe(false);
    expect(isPaginationVisible(2)).toBe(true);
  });
});
