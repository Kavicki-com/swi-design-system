import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// v0.1.127 — o preset `compact` passa a espelhar o nó-fonte, Figma `342:9420`.
//
// Aquele nó esconde EXATAMENTE três coisas em relação ao dashboard:
//   - Caminho 4122 (o discão de fundo)  → hidden
//   - heart-rate-button                 → hidden (já coberto por showActionButton)
//   - o cartão do container             → não existe no nó
//
// Todo o resto continua VISÍVEL e medido: Elipse 98 (bezel, 240.2), a faixa de
// pontos (127 de altura, dentro do próprio nó), Elipse 99 (trilho, 169.8),
// Ellipse 5 (arco, 218.98), Elipse 100 (poço, 141.89), silhueta e coração.
//
// A v0.1.126 tinha introduzido `backdrop={false}`, que escondia SETE camadas —
// leitura errada de um pedido do QA. O app ficou com a silhueta flutuando sobre
// o fundo, sem bezel nem arco. Esta versão remove aquela prop: a API do DS não
// pode carregar um atalho nascido de engano, e ninguém além do my-stats a usava.
const read = (f: string) => readFileSync(join(__dirname, f), 'utf8');

const types = read('StatusChart.types.ts');
const chart = read('StatusChart.tsx');
const backdropNative = read('StatusChartBackdrop.tsx');
const backdropWeb = read('StatusChartBackdrop.web.tsx');

describe('StatusChart — a prop backdrop foi removida', () => {
  it('não sobra API morta em lugar nenhum', () => {
    // A PALAVRA sobrevive na prosa que descreve as camadas ("Lower backdrop
    // layers"), e isso é legítimo. O que não pode sobrar é a prop: declaração,
    // default, repasse ou gate.
    const formasDeProp = [/backdrop\?:/, /backdrop = /, /backdrop=\{/, /backdrop \?/];
    for (const src of [types, chart, backdropNative, backdropWeb]) {
      for (const forma of formasDeProp) expect(src).not.toMatch(forma);
    }
  });
});

describe('StatusChart — preset compact espelha o nó 342:9420', () => {
  it('o container fica sem cartão: nem fundo, nem raio', () => {
    // O nó não tem retângulo por trás; sem isto sobra um cartão cinza
    // arredondado atrás do bezel (QA no aparelho, 2026-07-27).
    expect(chart).toMatch(/isCompact \|\| extrapolate \? 'transparent'/);
    expect(chart).toMatch(/isCompact \|\| extrapolate \? 0/);
  });

  it('o Caminho 4122 não é desenhado — nem como View, nem no backdrop', () => {
    // A View só existe no caminho `extrapolate`; o compact precisa ficar de
    // fora dela E sinalizar ao backdrop pra pular o círculo equivalente.
    expect(chart).toMatch(/extrapolate && !isCompact/);
    expect(chart).toMatch(/skipBackgroundCircle/);
  });

  it('bezel, pontos, trilho, arco e poço continuam desenhados', () => {
    // Nenhum deles pode ganhar gate: o Figma os mantém visíveis, e são eles
    // que dão profundidade ao botão. A grade de pontos é tintada pela
    // condição (p.backgroundTint), então também comunica estado.
    expect(chart).toMatch(/<BackgroundDotsGrid/);
    expect(chart).not.toMatch(/isCompact \? null : \(\s*<BackgroundDotsGrid/);
    for (const src of [backdropNative, backdropWeb]) {
      expect(src).toMatch(/ELLIPSE_5_X/);
      expect(src).toMatch(/r=\{TRACK_R\}/);
      expect(src).toMatch(/r=\{WELL_R\}/);
    }
  });

  it('o crescente segue dirigido só pelo progresso', () => {
    for (const src of [backdropNative, backdropWeb]) {
      const i = src.indexOf('clamped > 0');
      expect(i).toBeGreaterThan(-1);
      expect(src.slice(i, i + 300)).toMatch(/crescentGradId/);
    }
  });
});
