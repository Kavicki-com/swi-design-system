import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// 0.1.123: o <LinearGradient> cravava id="pb-gradient". Dois consumidores vivos
// ao mesmo tempo (o Stack do expo-router mantém telas montadas; listas rendem N
// barras) compartilhavam o mesmo id no documento SVG — o <Defs> da última
// montada vencia e a barra das outras perdia o fill. O app mobile chegou a
// manter uma CÓPIA LOCAL do componente só por causa disto (violando a regra de
// usar o DS como está), e o painel não podia usar o modo gradiente na lista de
// tarefas. Id por instância (useId) libera os dois.
describe('ProgressBar — id do gradiente por instância', () => {
  const tsx = readFileSync(join(__dirname, 'ProgressBar.tsx'), 'utf8');

  it('não crava mais um id fixo no <Defs>', () => {
    expect(tsx).not.toMatch(/id="pb-gradient"/);
    expect(tsx).not.toMatch(/url\(#pb-gradient\)/);
  });

  // Sanitizar só ':' era a premissa do React 18; no 19 o useId devolve '«R0»'
  // e o id saía inválido — o app iOS abortava na abertura (2026-07-27). A regra
  // agora vive no useSvgId, que mantém apenas o que é seguro.
  it('usa o useSvgId compartilhado, e não uma sanitização própria', () => {
    expect(tsx).toMatch(/useSvgId\('pb-gradient'\)/);
    expect(tsx).not.toMatch(/replace\(\/:\/g/);
  });

  it('o fill referencia o MESMO id declarado no <Defs> (nada de string solta)', () => {
    expect(tsx).toMatch(/id=\{gradientId\}/);
    expect(tsx).toMatch(/fill=\{`url\(#\$\{gradientId\}\)`\}/);
  });
});
