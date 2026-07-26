// Partículas que não carregam identidade: "Maria da Silva" tem iniciais MS,
// não MD. Minúsculas de propósito — comparamos sobre o token já normalizado.
const PARTICLES = new Set(['da', 'de', 'di', 'do', 'du', 'das', 'dos', 'e', 'del', 'van', 'von']);

/**
 * Iniciais para o fallback do Avatar sem foto.
 *
 * Até 0.1.119 um `uri` vazio renderizava só a moldura — um disco cinza liso,
 * indistinguível entre pessoas. Numa lista de operadores isso é pior que feio:
 * some a única pista de QUEM é aquela linha.
 *
 * Regra: primeira letra do primeiro nome + primeira letra do último sobrenome
 * relevante. Um nome só devolve uma inicial (não inventa a segunda letra).
 */
export function initialsFrom(name?: string): string {
  if (!name) return '';
  const tokens = name
    // "(Manut.)", "[TI]" — qualificadores de cargo/turno, não fazem parte do nome.
    .replace(/[([{].*?[)\]}]/g, ' ')
    .split(/[\s.]+/)
    .map((t) => t.replace(/[^\p{L}]/gu, ''))
    .filter((t) => t.length > 0);

  const relevant = tokens.filter((t) => !PARTICLES.has(t.toLowerCase()));
  // Nome inteiro feito de partículas ("da") — melhor uma inicial que nenhuma.
  const parts = relevant.length > 0 ? relevant : tokens;
  if (parts.length === 0) return '';

  const first = parts[0]!;
  const last = parts[parts.length - 1]!;
  const initials = parts.length === 1 ? first[0]! : `${first[0]}${last[0]}`;
  return initials.toLocaleUpperCase();
}
