import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// O cartao lista funcionarios no dashboard e no mapa de alertas. Quem tem
// alerta aberto mas nenhum batimento conhecido precisa aparecer no cartao, com
// "--" no lugar do numero, e nao num texto improvisado pela tela.
describe('EmployeeOverviewCard: sem leitura', () => {
  const types = readFileSync(join(__dirname, 'EmployeeOverviewCard.types.ts'), 'utf8');
  const tsx = readFileSync(join(__dirname, 'EmployeeOverviewCard.tsx'), 'utf8');

  it('batimento e pressao aceitam null', () => {
    expect(types).toMatch(/bpm: number \| null/);
    expect(types).toMatch(/pressure: string \| null/);
  });

  it('o numero passa pelo marcador e a unidade continua ao lado', () => {
    expect(tsx).toMatch(/\$\{readingText\(bpm\)\} \$\{bpmUnit\}/);
    expect(tsx).toMatch(/readingText\(pressure\)/);
  });

  it('o rotulo de acessibilidade mantem o nome e diz sem leitura quando falta valor', () => {
    expect(tsx).toMatch(/accessibilityLabel \?\? missingReadingLabel\(employee\.name/);
    expect(tsx).toMatch(/\?\? employee\.name/);
  });
});
