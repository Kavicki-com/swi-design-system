// Decisoes puras do Popover, fora do .tsx de proposito.
//
// O vitest do DS nao tem transform de react-native, entao componente montado
// nao entra em teste aqui (o unico jeito seria ler o .tsx como texto, que e
// regex, nao comportamento). As duas decisoes que produzem bug de verdade num
// popover sao "onde o painel cai" e "quando ele fecha": ambas moram neste
// modulo, sob teste real. Mesmo padrao do ProgressBar.geometry.ts.

export type PopoverAlign = 'start' | 'end';

export interface PanelOffsets {
  /** Sempre '100%': o painel comeca onde o wrapper do gatilho termina. */
  top: '100%';
  /** Respiro entre gatilho e painel. */
  marginTop: number;
  /** Presente so quando align === 'start'. */
  left?: number;
  /** Presente so quando align === 'end'. */
  right?: number;
}

/** Contrato minimo que o modulo precisa de um no: saber se contem outro. */
export interface Containable {
  contains: (node: never) => boolean;
}

/**
 * Coordenadas do painel dentro do wrapper posicionado que abraca o gatilho.
 *
 * `top: '100%'` faz o painel comecar exatamente onde o gatilho termina, sem
 * ninguem medir nada. A alternativa era somar a altura do gatilho, e medir
 * altura em RN exige `onLayout`, que no react-native-web depende de
 * ResizeObserver e nao dispara no jsdom: o painel cairia por cima do gatilho
 * justamente sob teste.
 *
 * O painel alinha por UMA borda: `start` fixa a esquerda, `end` fixa a
 * direita. Fixar so uma e o que deixa o painel crescer para dentro do conteudo
 * em vez de esticar de ponta a ponta.
 *
 * O `Math.max(0, gap)` nao e decorativo: gap negativo puxaria o painel para
 * cima do proprio gatilho, tapando o que a pessoa acabou de clicar.
 */
export function panelOffsets(align: PopoverAlign, gap: number): PanelOffsets {
  const marginTop = Math.max(0, gap);
  return align === 'end'
    ? { top: '100%', marginTop, right: 0 }
    : { top: '100%', marginTop, left: 0 };
}

/**
 * Se um clique solto na pagina deve fechar o popover.
 *
 * Tres nao-fecha, cada um por um motivo diferente:
 *  - dentro do painel: a pessoa esta usando o menu;
 *  - no gatilho: o proprio gatilho ja alterna, e fechar aqui faria o clique
 *    valer duas vezes e o menu reabrir na hora;
 *  - sem painel montado: nao ha nada aberto, e chamar onDismiss a esmo faz o
 *    consumidor re-renderizar a cada clique da pagina.
 */
export function shouldDismiss(
  target: unknown,
  panel: Containable | null,
  trigger: Containable | null,
): boolean {
  if (!target || !panel) return false;
  const node = target as never;
  if (panel.contains(node)) return false;
  if (trigger?.contains(node)) return false;
  return true;
}
