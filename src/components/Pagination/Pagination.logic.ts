// Logica pura da paginacao, separada do componente para teste. A tira mostra
// uma janela de ate `maxButtons` numeros ao redor da pagina atual, com "..."
// quando sobra pagina depois da janela e o avancar travado na ultima.

/** Numeros de pagina visiveis: janela de `maxButtons` centrada na atual. */
export const paginationPages = (
  currentPage: number,
  pageCount: number,
  maxButtons = 4,
): number[] => {
  const count = Math.max(1, pageCount);
  const size = Math.min(maxButtons, count);
  const half = Math.floor(size / 2);
  const lastStart = count - size + 1;
  const start = Math.max(1, Math.min(currentPage - half, lastStart));
  return Array.from({ length: size }, (_, i) => start + i);
};

/** "..." so quando a janela ainda nao alcancou a ultima pagina. */
export const showOverflow = (pages: number[], pageCount: number): boolean => {
  const last = pages[pages.length - 1];
  return last != null && last < pageCount;
};

/** O avancar trava quando a atual e a ultima (ou unica) pagina. */
export const isNextDisabled = (currentPage: number, pageCount: number): boolean =>
  currentPage >= Math.max(1, pageCount);

/** Com uma pagina so (ou nenhuma) a tira nao aparece. */
export const isPaginationVisible = (pageCount: number): boolean => pageCount > 1;
