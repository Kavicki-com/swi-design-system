import { describe, expect, it, vi } from 'vitest';
import { createElement } from 'react';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { renderToStaticMarkup } from 'react-dom/server';
import { theme } from '../../tokens';
import { StatusChart } from './StatusChart';
import { conditionLabel, palette } from './StatusChart.theme';
import type { StatusChartCondition } from './StatusChart.types';

// v0.1.134: a condição `neutral` é o estado "sem leitura" da silhueta.
//
// Até aqui só existiam good | alert | low. Sem dado, o app caía no default
// (good) e pintava tudo de verde: um falso "bom", que é mentira de saúde. A
// neutra clona a good trocando as cores de estado por neutras e tirando o selo
// do peito, que só faz sentido quando há leitura pra julgar.
//
// O teste renderiza a árvore WEB de verdade (backdrop, silhueta e sombra são
// os gêmeos .web, como o bundler web resolve). Só ficam de fora o react-native
// (aqui vira div), o hook do tema (devolve o tema padrão, sem provider) e os
// três componentes vizinhos que interessam como marcador: pontilhado, selo do
// coração e ícone.
vi.mock('react-native', async () => {
  const { createElement: h } = await import('react');
  const box = ({ children }: { children?: React.ReactNode }) => h('div', null, children);
  return {
    View: box,
    Pressable: box,
    Image: () => null,
    Platform: {
      OS: 'web',
      select: (o: Record<string, unknown>) => o.web ?? o.default,
    },
  };
});
vi.mock('../../theme', async () => {
  const { theme: t } = await import('../../tokens');
  return { useTheme: () => t };
});
vi.mock('./StatusChartBackdrop', () => import('./StatusChartBackdrop.web'));
vi.mock('./SilhouetteBody', () => import('./SilhouetteBody.web'));
vi.mock('./InnerShadowCircle', () => import('./InnerShadowCircle.web'));
vi.mock('../BackgroundDotsGrid', async () => {
  const { createElement: h } = await import('react');
  return {
    BackgroundDotsGrid: ({ color }: { color?: string }) => h('i', { 'data-dots': color }),
  };
});
vi.mock('../HeartStatus', async () => {
  const { createElement: h } = await import('react');
  return {
    HeartStatus: ({ condition }: { condition?: string }) =>
      h('i', { 'data-heart-status': condition }),
  };
});
vi.mock('../Icon', async () => {
  const { createElement: h } = await import('react');
  return {
    Icon: ({ name, color }: { name: string; color?: string }) =>
      h('i', { 'data-icon': name, 'data-color': color }),
  };
});

const read = (f: string) => readFileSync(join(__dirname, f), 'utf8');

const render = (props: Parameters<typeof StatusChart>[0]) =>
  renderToStaticMarkup(createElement(StatusChart, props));

/** Stops (topo, base) do primeiro gradiente cujo id começa com o prefixo. */
const stopsOf = (html: string, idPrefix: string): string[] => {
  const block =
    html.match(
      new RegExp(`<linearGradient id="${idPrefix}[^"]*"[^>]*>(.*?)</linearGradient>`),
    )?.[1] ?? '';
  return [...block.matchAll(/stop-color="([^"]+)"/g)].map((m) => m[1] ?? '');
};

const attr = (html: string, name: string): string | undefined =>
  html.match(new RegExp(`${name}="([^"]*)"`))?.[1];

const iconColor = (html: string): string | undefined =>
  html.match(/data-icon="health_activity" data-color="([^"]*)"/)?.[1];

// Se o tipo não aceitar 'neutral', o typecheck quebra nesta linha.
const NEUTRAL: StatusChartCondition = 'neutral';

// As três condições que já existiam, com os tokens de antes do bump. A barra
// (crescente) repetia o gradiente da silhueta; isso não pode mudar.
const ANTES = {
  good: {
    from: theme.surface.success,
    to: theme.surface.successLight,
    accent: theme.surface.success,
    tint: theme.surface.successLight,
    heart: 'check',
  },
  alert: {
    from: theme.surface.error,
    to: theme.surface.errorLight,
    accent: theme.surface.error,
    tint: theme.surface.errorLight,
    heart: 'alert',
  },
  low: {
    from: theme.surface.info,
    to: theme.surface.infoLight,
    accent: theme.surface.info,
    tint: theme.surface.infoLight,
    heart: 'low',
  },
} as const;

const EXISTENTES = ['good', 'alert', 'low'] as const;

describe('StatusChart: palette da condição neutral', () => {
  it('silhueta em cinza, barra e ícone em content.medium, sem selo', () => {
    expect(palette(theme, NEUTRAL)).toEqual({
      gradientFrom: theme.surface.high,
      gradientTo: theme.surface.grey,
      barFrom: theme.content.medium,
      barTo: theme.content.medium,
      accent: theme.content.medium,
      backgroundTint: theme.surface.grey,
      heartStatus: null,
    });
  });

  it('não carrega nenhuma cor de estado', () => {
    const deEstado: string[] = EXISTENTES.flatMap((c) => [
      ANTES[c].from,
      ANTES[c].to,
      ANTES[c].accent,
      ANTES[c].tint,
    ]);
    const p = palette(theme, NEUTRAL);
    for (const cor of [p.gradientFrom, p.gradientTo, p.barFrom, p.barTo, p.accent, p.backgroundTint]) {
      expect(deEstado).not.toContain(cor);
    }
  });

  it('o tipo e o rótulo de acessibilidade conhecem a condição', () => {
    expect(read('StatusChart.types.ts')).toMatch(
      /StatusChartCondition = 'good' \| 'alert' \| 'low' \| 'neutral'/,
    );
    expect(conditionLabel[NEUTRAL]).toBe('neutral');
  });
});

describe('StatusChart: good, alert e low seguem idênticos', () => {
  it.each(EXISTENTES)('palette de %s: mesmos tokens, e a barra repete a silhueta', (c) => {
    const antes = ANTES[c];
    expect(palette(theme, c)).toEqual({
      gradientFrom: antes.from,
      gradientTo: antes.to,
      barFrom: antes.from,
      barTo: antes.to,
      accent: antes.accent,
      backgroundTint: antes.tint,
      heartStatus: antes.heart,
    });
  });

  it.each(EXISTENTES)('render de %s: silhueta, barra, ícone, pontilhado e selo', (c) => {
    const antes = ANTES[c];
    const html = render({ condition: c });
    expect(stopsOf(html, 'paint0_linear_silhouette')).toEqual([antes.from, antes.to]);
    expect(stopsOf(html, 'status-gauge-gradient')).toEqual([antes.from, antes.to]);
    expect(stopsOf(html, 'status-crescent-gradient')).toEqual([antes.from, antes.to]);
    expect(iconColor(html)).toBe(antes.accent);
    expect(attr(html, 'data-dots')).toBe(antes.tint);
    expect(attr(html, 'data-heart-status')).toBe(antes.heart);
  });

  it('good continua ancorada nos hex do Caminho 4123.svg', () => {
    // Mesma âncora do StatusChart.paths.test.ts: se o token mudar de valor, a
    // variante good mudou visualmente e isso precisa aparecer aqui.
    expect(palette(theme, 'good').gradientFrom).toBe('#3EAB2E');
    expect(palette(theme, 'good').gradientTo).toBe('#B7E9A4');
  });

  it('sem condition o default continua sendo good', () => {
    expect(attr(render({}), 'data-heart-status')).toBe('check');
  });
});

describe('StatusChart: render da condição neutral', () => {
  const html = render({ condition: NEUTRAL });

  it('a silhueta vai de surface.high (topo) a surface.grey (base)', () => {
    expect(stopsOf(html, 'paint0_linear_silhouette')).toEqual([
      theme.surface.high,
      theme.surface.grey,
    ]);
  });

  it('a barra de condição tem cor própria, content.medium, e não o gradiente da silhueta', () => {
    expect(stopsOf(html, 'status-crescent-gradient')).toEqual([
      theme.content.medium,
      theme.content.medium,
    ]);
  });

  it('o ícone do botão de batimento fica em content.medium', () => {
    expect(iconColor(html)).toBe(theme.content.medium);
  });

  it('o pontilhado de fundo fica em surface.grey', () => {
    expect(attr(html, 'data-dots')).toBe(theme.surface.grey);
  });

  it('o selo do coração não aparece, nem com renderHeartStatus verdadeiro', () => {
    expect(html).not.toContain('data-heart-status');
    expect(render({ condition: NEUTRAL, renderHeartStatus: true })).not.toContain(
      'data-heart-status',
    );
  });

  it('renderHeartStatus falso continua escondendo o selo nas outras condições', () => {
    expect(render({ condition: 'good', renderHeartStatus: false })).not.toContain(
      'data-heart-status',
    );
  });
});

describe('StatusChart: gêmeos e stories em sincronia', () => {
  it('nativo e web pintam o crescente com barFrom/barTo', () => {
    // O gêmeo nativo não roda aqui (react-native-svg), então a ligação é
    // conferida no fonte, nos dois arquivos, pra que não divirjam.
    for (const f of ['StatusChartBackdrop.tsx', 'StatusChartBackdrop.web.tsx']) {
      const src = read(f);
      const i = src.indexOf('id={crescentGradId}');
      expect(i).toBeGreaterThan(-1);
      const bloco = src.slice(i, i + 400);
      expect(bloco).toMatch(/stopColor=\{p\.barFrom\}/);
      expect(bloco).toMatch(/stopColor=\{p\.barTo\}/);
      expect(bloco).not.toMatch(/p\.gradient(From|To)/);
    }
  });

  it('o selo do peito depende da palette, não só da prop', () => {
    expect(read('StatusChart.tsx')).toMatch(/renderHeartStatus && p\.heartStatus !== null/);
  });

  it('as stories oferecem a neutra no controle, numa story própria e no Overview', () => {
    const stories = read('StatusChart.stories.tsx');
    expect(stories).toMatch(/options: \['good', 'alert', 'low', 'neutral'\]/);
    expect(stories).toMatch(/export const Neutral: Story/);
    expect(stories).toMatch(/<StatusChart condition="neutral" \/>/);
  });
});
