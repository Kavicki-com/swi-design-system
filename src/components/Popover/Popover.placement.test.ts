import { describe, expect, it } from 'vitest';
import { chooseSide, panelOffsets, shouldDismiss } from './Popover.placement';

// O vitest do DS nao tem transform de react-native: nenhum teste aqui monta
// componente. Por isso as duas decisoes que produzem bug de verdade no Popover
// (onde o painel cai, e quando ele fecha) moram neste modulo puro, e sao
// testadas de verdade. O comportamento montado e testado no swi-admin, onde o
// react-native-web renderiza no jsdom.

describe('panelOffsets', () => {
  // top: '100%' e escolha deliberada. A alternativa era somar a altura do
  // gatilho, e medir altura exige onLayout, que depende de ResizeObserver e
  // nao dispara no jsdom: o painel cairia em cima do gatilho justamente nos
  // testes. Porcentagem resolve no layout, sem medicao, no web e no nativo.
  it('align start ancora o painel pela borda esquerda do gatilho', () => {
    expect(panelOffsets('start', 4)).toEqual({ top: '100%', marginTop: 4, left: 0 });
  });

  it('align end ancora pela borda direita, e nao fixa a esquerda', () => {
    expect(panelOffsets('end', 4)).toEqual({ top: '100%', marginTop: 4, right: 0 });
  });

  it('gap negativo nao sobe o painel por cima do gatilho', () => {
    expect(panelOffsets('start', -30).marginTop).toBe(0);
  });

  // Abrir para cima ancora pelo BAIXO do gatilho: `bottom: 100%` faz o painel
  // terminar onde o gatilho comeca. O respiro tambem inverte, senao ele encosta.
  it('lado top ancora pelo baixo do gatilho, e nao fixa o topo', () => {
    expect(panelOffsets('start', 4, 'top')).toEqual({
      bottom: '100%',
      marginBottom: 4,
      left: 0,
    });
  });

  it('lado top preserva o alinhamento horizontal', () => {
    expect(panelOffsets('end', 4, 'top').right).toBe(0);
  });
});

// O painel do chat vazava por baixo da caixa de mensagens quando a conversa
// estava rolada ate o fim: medido em 31/07/2026, o painel de um item passava
// 10px do fundo, e o de tres passaria uns 94px. Decidir o lado exige comparar
// tres numeros; ler esses numeros do DOM e a parte impura, e mora no .tsx.
describe('chooseSide', () => {
  const container = { top: 100, bottom: 500 };

  it('cabendo embaixo, abre para baixo', () => {
    expect(chooseSide({ top: 200, bottom: 220 }, container, 140, 4)).toBe('bottom');
  });

  it('sem espaco embaixo mas com espaco em cima, abre para cima', () => {
    // Gatilho colado no fundo: sobram 20px embaixo e 276px em cima.
    expect(chooseSide({ top: 460, bottom: 480 }, container, 140, 4)).toBe('top');
  });

  it('nao cabendo em lugar nenhum, escolhe o lado com mais espaco', () => {
    // 260px embaixo contra 96px em cima, e o painel pede 400.
    expect(chooseSide({ top: 200, bottom: 240 }, container, 400, 4)).toBe('bottom');
    // Espelhado: 60px embaixo contra 296px em cima.
    expect(chooseSide({ top: 400, bottom: 440 }, container, 400, 4)).toBe('top');
  });

  // Em jsdom todo retangulo e zero e o painel nao tem altura. Empate tem que
  // cair em 'bottom', senao TODO teste de tela que abre popover passaria a
  // medir um painel invertido que o navegador nunca mostraria.
  it('sem medida nenhuma, fica embaixo', () => {
    expect(chooseSide({ top: 0, bottom: 0 }, { top: 0, bottom: 0 }, 0, 4)).toBe('bottom');
  });

  it('o gap conta no espaco disponivel', () => {
    // 140 de painel + 4 de respiro nao cabem em 143px embaixo.
    expect(chooseSide({ top: 300, bottom: 357 }, container, 140, 4)).toBe('top');
  });
});

describe('shouldDismiss', () => {
  const node = (dentro: boolean) => ({ contains: () => dentro });
  const alvo = {} as never;

  it('clique dentro do painel nao fecha', () => {
    expect(shouldDismiss(alvo, node(true), node(false))).toBe(false);
  });

  it('clique no gatilho nao fecha: o proprio gatilho ja alterna', () => {
    expect(shouldDismiss(alvo, node(false), node(true))).toBe(false);
  });

  it('clique fora dos dois fecha', () => {
    expect(shouldDismiss(alvo, node(false), node(false))).toBe(true);
  });

  it('sem painel montado nao fecha: nao ha nada aberto pra fechar', () => {
    expect(shouldDismiss(alvo, null, node(false))).toBe(false);
  });

  it('sem alvo nao fecha: evento sem target nao e clique fora', () => {
    expect(shouldDismiss(null, node(false), node(false))).toBe(false);
  });
});
