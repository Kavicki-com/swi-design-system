import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// v0.1.140: FAB redondo so-icone de diametro exato. O tamanho do Button saia so
// de tokens discretos (padding small/large/xlarge), que nao acertam o circulo
// de 71,43px do Home FAB do app (Figma 348:10334) com o anel de 10,29px. A prop
// `diameter` forca o container a width = height = diameter, zera o padding e
// mantem a borda por dentro (RN e border-box), centralizando o icone.
//
// O vitest do DS nao monta componente: aqui se confere por contrato de fonte; o
// comportamento montado e testado no app consumidor.
describe('Button: diametro fixo para FAB so-icone', () => {
  const dir = __dirname;
  const tsx = readFileSync(join(dir, 'Button.tsx'), 'utf8');
  const types = readFileSync(join(dir, 'Button.types.ts'), 'utf8');
  const styles = readFileSync(join(dir, 'Button.styles.ts'), 'utf8');

  it('expoe diameter nas props', () => {
    expect(types).toMatch(/diameter\?: number;/);
  });

  it('o Button encaminha o diametro para o Container', () => {
    expect(tsx).toMatch(/\$diameter=\{diameter\}/);
  });

  it('o Container conhece o diametro transiente', () => {
    expect(styles).toMatch(/\$diameter\?: number;/);
  });

  it('quando ha diametro, fixa width/height e zera o padding', () => {
    // bloco condicional que cai depois do padding por token, para vencer na
    // ordem do styled-components.
    expect(styles).toMatch(/\$diameter[\s\S]*width:\s*\$\{[^}]*\}px/);
    expect(styles).toMatch(/\$diameter[\s\S]*height:\s*\$\{[^}]*\}px/);
    expect(styles).toMatch(/\$diameter[\s\S]*padding:\s*0px/);
  });
});
