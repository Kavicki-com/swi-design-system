/**
 * Ausencia de leitura nos componentes de vitais.
 *
 * Sem aparelho pareado, com a leitura velha ou com a rede fora, nao existe
 * batimento nem pressao a mostrar. Escrever 0 seria afirmar uma medicao que
 * ninguem fez, entao a ausencia vira um marcador unico, o mesmo em todo
 * componente. Quem passa numero continua vendo exatamente o mesmo de antes.
 */
export const MISSING_READING = '--';

/** Valor de vital para exibir: o proprio valor, ou o marcador quando falta. */
export const readingText = (value: number | string | null | undefined): string =>
  value === null || value === undefined ? MISSING_READING : String(value);

/** Preenchimento de barra: sem valor a barra fica vazia, nunca com um palpite. */
export const readingProgress = (value: number | null | undefined): number => value ?? 0;

/**
 * Rotulo de acessibilidade quando falta alguma leitura. Devolve undefined
 * quando todas existem, para nao mudar o rotulo de quem ja usa o componente.
 */
export const missingReadingLabel = (
  base: string | undefined,
  values: ReadonlyArray<number | string | null | undefined>,
): string | undefined => {
  const missing = values.some((v) => v === null || v === undefined);
  if (!missing) return undefined;
  return base ? `${base}, sem leitura` : 'Sem leitura';
};
