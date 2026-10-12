import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// O cabecalho do painel mostra os vitais de quem esta logado. Sem aparelho
// pareado nao ha batimento nem pressao, e o widget precisa dizer isso em vez
// de exigir um numero. A logica mora em utils/reading; aqui se confere a
// ligacao no componente, como no Input.counter.test.ts.
describe('HeaderUserInfo: sem leitura', () => {
  const types = readFileSync(join(__dirname, 'HeaderUserInfo.types.ts'), 'utf8');
  const tsx = readFileSync(join(__dirname, 'HeaderUserInfo.tsx'), 'utf8');

  it('batimento, pressao e progresso aceitam null', () => {
    expect(types).toMatch(/bpm: number \| null/);
    expect(types).toMatch(/pressure: string \| null/);
    expect(types).toMatch(/progress\?: number \| null/);
  });

  it('o texto passa pelo marcador de ausencia e a barra fica vazia sem valor', () => {
    expect(tsx).toMatch(/readingText\(bpm\)/);
    expect(tsx).toMatch(/readingText\(pressure\)/);
    expect(tsx).toMatch(/readingProgress\(progress\)/);
  });

  it('o rotulo de acessibilidade diz sem leitura quando falta valor', () => {
    expect(tsx).toMatch(/accessibilityLabel \?\? missingReadingLabel\(/);
  });
});

// v0.1.136: sem foto, o cabecalho mostrava o circulo vazio enquanto
// Configuracoes mostrava as iniciais. O Avatar ja faz iniciais desde a 0.1.120;
// faltava o cabecalho repassar o nome.
describe('HeaderUserInfo: iniciais sem foto', () => {
  const types = readFileSync(join(__dirname, 'HeaderUserInfo.types.ts'), 'utf8');
  const tsx = readFileSync(join(__dirname, 'HeaderUserInfo.tsx'), 'utf8');

  it('aceita o nome de quem esta logado', () => {
    expect(types).toMatch(/name\?: string;/);
  });

  it('repassa o nome ao Avatar, que desenha as iniciais quando falta a foto', () => {
    expect(tsx).toMatch(/<Avatar[^>]*uri=\{avatarUri\}[^>]*name=\{name\}/);
  });
});
