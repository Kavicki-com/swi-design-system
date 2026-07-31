// Decisoes puras do Popover, fora do .tsx de proposito.
//
// O vitest do DS nao tem transform de react-native, entao componente montado
// nao entra em teste aqui (o unico jeito seria ler o .tsx como texto, que e
// regex, nao comportamento). As duas decisoes que produzem bug de verdade num
// popover sao "onde o painel cai" e "quando ele fecha": ambas moram neste
// modulo, sob teste real. Mesmo padrao do ProgressBar.geometry.ts.

export type PopoverAlign = 'start' | 'end';
export type PopoverSide = 'bottom' | 'top';

export interface PanelOffsets {
  /** '100%' quando o painel abre para baixo: comeca onde o gatilho termina. */
  top?: '100%';
  /** Respiro entre gatilho e painel, abrindo para baixo. */
  marginTop?: number;
  /** '100%' quando o painel abre para cima: termina onde o gatilho comeca. */
  bottom?: '100%';
  /** Respiro entre gatilho e painel, abrindo para cima. */
  marginBottom?: number;
  /** Presente so quando align === 'start'. */
  left?: number;
  /** Presente so quando align === 'end'. */
  right?: number;
}

/** So o eixo vertical importa para escolher o lado. */
export interface SideRect {
  top: number;
  bottom: number;
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
export function panelOffsets(
  align: PopoverAlign,
  gap: number,
  side: PopoverSide = 'bottom',
): PanelOffsets {
  const respiro = Math.max(0, gap);
  const horizontal = align === 'end' ? { right: 0 } : { left: 0 };
  return side === 'top'
    ? { bottom: '100%', marginBottom: respiro, ...horizontal }
    : { top: '100%', marginTop: respiro, ...horizontal };
}

/**
 * Para que lado o painel abre.
 *
 * Nasceu de um bug medido: no chat, com a conversa rolada ate o fim, o painel
 * da ultima mensagem caia por baixo da caixa de mensagens e sumia. Abrir
 * sempre para cima trocaria o problema de lado, porque a primeira mensagem
 * sumiria por cima.
 *
 * A regra prefere BAIXO e so inverte quando precisa: cabendo embaixo, fica
 * embaixo. Nao cabendo embaixo mas cabendo em cima, sobe. Nao cabendo em lugar
 * nenhum, escolhe o lado com mais espaco, que e o menos ruim.
 *
 * Empate cai em 'bottom' de proposito: em jsdom todo retangulo e zero, e um
 * empate resolvido para cima faria todo teste de tela medir um painel
 * invertido que o navegador nunca mostraria.
 *
 * Esta funcao nao toca no DOM: quem le os retangulos e o componente, no web.
 */
export function chooseSide(
  trigger: SideRect,
  container: SideRect,
  panelHeight: number,
  gap: number,
): PopoverSide {
  const respiro = Math.max(0, gap);
  const espacoAbaixo = container.bottom - trigger.bottom - respiro;
  const espacoAcima = trigger.top - container.top - respiro;
  if (panelHeight <= espacoAbaixo) return 'bottom';
  if (panelHeight <= espacoAcima) return 'top';
  return espacoAcima > espacoAbaixo ? 'top' : 'bottom';
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
