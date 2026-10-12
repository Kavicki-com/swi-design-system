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
    expect(tsx).toMatch(/missingReadingLabel\(employee\.name/);
    expect(tsx).toMatch(/\?\? employee\.name/);
  });
});

// v0.1.136: sem relogio pareado nao ha leitura nenhuma a mostrar. A frase do
// painel ("Sem relogio pareado") ocupa a coluna de saude no lugar dos dois
// icones e das duas leituras, em ate duas linhas, no mesmo estilo de texto.
describe('EmployeeOverviewCard: frase de ausencia', () => {
  const types = readFileSync(join(__dirname, 'EmployeeOverviewCard.types.ts'), 'utf8');
  const tsx = readFileSync(join(__dirname, 'EmployeeOverviewCard.tsx'), 'utf8');
  const styles = readFileSync(join(__dirname, 'EmployeeOverviewCard.styles.ts'), 'utf8');

  it('a frase e opcional', () => {
    expect(types).toMatch(/absenceLabel\?: string;/);
  });

  it('com a frase, a coluna mostra so ela, em ate duas linhas', () => {
    expect(tsx).toMatch(/\{absenceLabel \? \(\s*<AbsenceText numberOfLines=\{2\}>\{absenceLabel\}<\/AbsenceText>/);
  });

  it('a frase quebra linha: nao herda o nowrap das leituras', () => {
    const block = /export const AbsenceText = styled\.Text`([^`]*)`/.exec(styles)?.[1] ?? '';
    expect(block).toMatch(/theme\.content\.dark/);
    expect(block).toMatch(/theme\.fontSize\.m/);
    expect(block).not.toMatch(/white-space: nowrap/);
  });

  it('o leitor de tela ouve o nome e a frase', () => {
    expect(tsx).toMatch(/absenceLabel \? `\$\{employee\.name\}, \$\{absenceLabel\}`/);
  });
});
