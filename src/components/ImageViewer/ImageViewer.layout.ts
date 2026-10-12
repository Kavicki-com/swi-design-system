/** Largura máxima do cartão: larga o bastante para ver detalhe numa foto de
 *  inspeção, sem esticar a imagem pela tela inteira de um monitor grande. */
export const VIEWER_MAX_WIDTH = 960;

/** Proporção do palco quando a altura sobra (4:3, a das câmeras de celular). */
export const STAGE_RATIO = 3 / 4;

/** Abaixo disso a imagem deixa de ser reconhecível. */
export const STAGE_MIN_HEIGHT = 160;

export interface ViewerChrome {
  /** Margem entre o cartão e a borda da janela. */
  gutter: number;
  /** Padding interno do cartão. */
  padding: number;
  /** Espaço entre cabeçalho, palco e rodapé. */
  gap: number;
  /** Altura do cabeçalho (nome do arquivo e fechar). */
  header: number;
  /** Altura do rodapé (Baixar); 0 quando não há rodapé. */
  footer: number;
}

/**
 * Tamanho do cartão e do palco da imagem para uma janela. O cartão ocupa a
 * largura menos a margem, até 960; o palco segue 4:3 e encolhe para caber na
 * altura, sem passar de 160 para baixo. A imagem entra no palco inteira
 * (`contain`), então qualquer proporção cabe sem corte.
 */
export function viewerLayout(
  window: { width: number; height: number },
  chrome: ViewerChrome,
): { cardWidth: number; stageWidth: number; stageHeight: number } {
  const cardWidth = Math.floor(Math.min(VIEWER_MAX_WIDTH, window.width - 2 * chrome.gutter));
  const stageWidth = cardWidth - 2 * chrome.padding;
  const gaps = chrome.footer > 0 ? 2 * chrome.gap : chrome.gap;
  const available =
    window.height - 2 * chrome.gutter - 2 * chrome.padding - chrome.header - chrome.footer - gaps;
  const stageHeight = Math.floor(
    Math.max(STAGE_MIN_HEIGHT, Math.min(stageWidth * STAGE_RATIO, available)),
  );
  return { cardWidth, stageWidth, stageHeight };
}
