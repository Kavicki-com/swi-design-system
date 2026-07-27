import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// v0.1.126 — `backdrop={false}`.
//
// O my-stats do app pediu SÓ o que comunica estado: personagem, coração no
// peito e o arco que muda de cor. O StatusChart cheio trazia junto um cartão
// cinza (fundo + raio do container), dois discos, o trilho, o poço, a grade de
// pontos — que duplicava a grade que a tela já tinha — e o "Ellipse 5", um
// arco decorativo que é PNG e por isso NUNCA muda de cor, ficando verde-água
// mesmo com o trabalhador em alerta (QA no aparelho, 2026-07-27).
//
// A régua da prop: sai tudo que é estático, fica tudo que é dirigido por
// `condition`. Um elemento que não muda de cor não comunica estado — e numa
// tela de saúde, decoração que parece indicador é pior que nada.
const read = (f: string) => readFileSync(join(__dirname, f), 'utf8');

const types = read('StatusChart.types.ts');
const chart = read('StatusChart.tsx');
const backdropNative = read('StatusChartBackdrop.tsx');
const backdropWeb = read('StatusChartBackdrop.web.tsx');

describe('StatusChart — backdrop={false}', () => {
  it('a prop existe e é opcional (retrocompatível: default mantém o cartão)', () => {
    expect(types).toMatch(/backdrop\?: boolean/);
    expect(chart).toMatch(/backdrop = true/);
  });

  it('o container perde fundo e raio — o cartão cinza sai junto', () => {
    // Sem isto o retângulo arredondado continua desenhado atrás de tudo,
    // mesmo com todas as camadas internas puladas.
    expect(chart).toMatch(/backgroundColor: !backdrop \|\| extrapolate/);
    expect(chart).toMatch(/borderRadius: !backdrop \|\| extrapolate/);
  });

  it('a grade de pontos é pulada — era ela que duplicava com a da tela', () => {
    expect(chart).toMatch(/\{backdrop \? \(\s*<BackgroundDotsGrid/);
  });

  it('a camada lower (os dois discos) é pulada', () => {
    expect(chart).toMatch(/backdrop \? \([\s\S]{0,400}layer="lower"/);
  });

  it('o disco extrapolado é pulado', () => {
    expect(chart).toMatch(/extrapolate && backdrop \?/);
  });
});

describe('StatusChartBackdrop — o que sobra na camada upper', () => {
  for (const [nome, src] of [
    ['nativo', backdropNative],
    ['web', backdropWeb],
  ] as const) {
    describe(nome, () => {
      it('recebe a prop backdrop', () => {
        expect(src).toMatch(/backdrop\??:? ?(boolean|= true)/);
      });

      it('Ellipse 5 fica atrás do gate — é PNG e nunca acompanhou a condição', () => {
        const trecho = src.slice(Math.max(0, src.indexOf('ELLIPSE_5_X') - 600));
        expect(trecho).toMatch(/backdrop \?[\s\S]{0,600}ELLIPSE_5_X/);
      });

      // O crescente é o único elemento do backdrop pintado pela paleta
      // (crescentGrad recebe gradientFrom/gradientTo da condição). Se ele for
      // gateado junto, a tela perde o indicador e o conserto vira regressão.
      it('o crescente colorido NÃO é gateado pela prop', () => {
        // `clamped > 0` é a condição de render do crescente nos dois gêmeos
        // (o comentário "status-condition-bar" só existe no nativo).
        const i = src.indexOf('clamped > 0');
        expect(i).toBeGreaterThan(-1);
        const bloco = src.slice(i, i + 300);
        expect(bloco).not.toMatch(/backdrop \?/);
        expect(bloco).toMatch(/crescentGradId/);
      });
    });
  }
});
