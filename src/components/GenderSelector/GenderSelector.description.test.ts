import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// O GenderSelector ja era um grupo — se declarava accessibilityRole="radiogroup"
// desde sempre — mas nao tinha como dizer que a escolha estava faltando. No
// step-3 do cadastro "Seu genero" e obrigatorio, e sem legenda o usuario batia
// no mesmo silencio do QA Mobile #1: o botao nao avanca e nada explica por que.
//
// Como o resto do bump: sem transform de RN no vitest, valida-se o texto-fonte.

const read = (f: string) => readFileSync(join(__dirname, f), 'utf8');

describe('GenderSelector — legenda de erro', () => {
  const tsx = read('GenderSelector.tsx');
  const types = read('GenderSelector.types.ts');

  it('aceita description e a variante, mesma uniao do Input', () => {
    expect(types).toMatch(/description\?: string/);
    expect(types).toMatch(/descriptionVariant\?: DescriptionVariant/);
  });

  it('a legenda sai com a variante aplicada', () => {
    expect(tsx).toMatch(/\$variant=\{descriptionVariant\}/);
  });

  it('a legenda so aparece quando ha texto', () => {
    expect(tsx).toMatch(/description \?/);
  });

  // A regressao que este teste barra: envolver as cards num wrapper novo e
  // deixar o papel de grupo para tras, o que separaria a pergunta das opcoes
  // no leitor de tela.
  it('continua se anunciando como radiogroup depois do wrapper da legenda', () => {
    expect(tsx).toMatch(/accessibilityRole="radiogroup"/);
  });
});
