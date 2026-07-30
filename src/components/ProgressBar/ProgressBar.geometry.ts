// Geometria pura do ProgressBar, fora do .tsx de proposito.
//
// O DS nao tem transform de react-native no vitest: nenhum teste importa
// componente RN, e o unico teste antigo do ProgressBar valida o .tsx lendo-o
// como TEXTO. Manter a matematica aqui deixa o comportamento sob teste de
// verdade, em vez de sob regex.

/** Altura do fill nos modos flat e bordered. Fixa por design. */
export const FILL_HEIGHT = 6;

export interface InsetGeometry {
  /** Altura do fill: o que sobra do track depois do inset dos dois lados. */
  fillHeight: number;
  /** Raio do fill, concentrico com o do track. */
  innerRadius: number;
}

/**
 * Geometria do modo inset: track solido de `trackHeight` com o fill embutido
 * `inset` px em cada lado.
 *
 * Os dois `Math.max(0, ...)` nao sao decorativos. Um inset maior que a metade
 * da altura (ou maior que o raio) sairia negativo, e altura/raio negativos
 * fazem o RN reclamar no console no web e desenhar errado no nativo. Clampar
 * degrada pra um fill de altura zero: visivelmente errado, mas inerte.
 */
export function insetGeometry(
  trackHeight: number,
  inset: number,
  outerRadius: number,
): InsetGeometry {
  return {
    fillHeight: Math.max(0, trackHeight - inset * 2),
    innerRadius: Math.max(0, outerRadius - inset),
  };
}
