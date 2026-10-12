/** O bloco vai até 40% de opacidade e volta: some o bastante para se ver que
 *  está vivo, sem piscar. */
export const PULSE_MIN_OPACITY = 0.4;

/** Meia volta do pulso. Uma volta inteira leva 1,8 s: lento, de espera. */
export const PULSE_HALF_PERIOD_MS = 900;

// Linhas de texto encurtando, como nome, subtítulo e detalhes; a quarta volta
// a crescer para não terminar num toco.
const LINE_WIDTHS: ReadonlyArray<`${number}%`> = ['60%', '40%', '30%', '50%'];

/** Larguras das linhas de texto de uma linha da lista, de 1 a 4. */
export function skeletonLineWidths(lines: number): Array<`${number}%`> {
  const count = Math.min(LINE_WIDTHS.length, Math.max(1, Math.floor(lines)));
  return LINE_WIDTHS.slice(0, count);
}

/** Pelo menos uma linha de espera, em número inteiro. */
export function clampRows(rows: number): number {
  return Math.max(1, Math.floor(rows));
}
