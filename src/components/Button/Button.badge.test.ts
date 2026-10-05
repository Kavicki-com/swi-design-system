import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// v0.1.135: o Button ganha um contador opcional no canto, como o sino do
// dashboard do app (notification-count-badge): círculo de 24 px em
// surface.error, número em Inter Bold 12 com content.light, sobre o canto
// superior direito do botão. O contador não pode capturar o toque: ele é a
// parte mais chamativa e o usuário tende a mirar nele. Contrato de fonte, como
// os outros testes do DS; o comportamento montado é testado no swi-admin.
describe('Button: contador', () => {
  const types = readFileSync(join(__dirname, 'Button.types.ts'), 'utf8');
  const tsx = readFileSync(join(__dirname, 'Button.tsx'), 'utf8');
  const styles = readFileSync(join(__dirname, 'Button.styles.ts'), 'utf8');

  it('o contador é um texto opcional', () => {
    expect(types).toMatch(/badge\?: string;/);
  });

  it('só aparece com texto e não captura o toque', () => {
    expect(tsx).toMatch(/const hasBadge = typeof badge === 'string' && badge\.length > 0;/);
    expect(tsx).toMatch(
      /\{hasBadge \? \(\s*<Badge accessibilityElementsHidden importantForAccessibility="no-hide-descendants">\s*<BadgeText numberOfLines=\{1\}>\{badge\}<\/BadgeText>/,
    );
    const badge = /export const Badge = styled\(View\)`([^`]*)`/.exec(styles)?.[1] ?? '';
    // Mesmo jeito das camadas de hover e pressionado do próprio Button.
    expect(badge).toMatch(/pointer-events: none;/);
  });

  // O número fica fora do leitor de tela (lido como "4" solto, sem contexto) e
  // entra no rótulo do botão quando quem usa não passa um rótulo próprio.
  it('o leitor de tela ouve o número junto do rótulo do botão', () => {
    expect(tsx).toMatch(
      /accessibilityLabel=\{\s*accessibilityLabel \?\? \(hasBadge \? \[label, badge\]\.filter\(Boolean\)\.join\(', '\) : label\)\s*\}/,
    );
  });

  it('pílula de no mínimo 24 px em surface.error, no canto superior direito', () => {
    const badge = /export const Badge = styled\(View\)`([^`]*)`/.exec(styles)?.[1] ?? '';
    expect(badge).toMatch(/position: absolute;/);
    expect(badge).toMatch(/top: 0;/);
    expect(badge).toMatch(/right: 0;/);
    // Largura mínima, e não fixa: "99+" cabe sem vazar do círculo.
    expect(badge).toMatch(/min-width: 24px;/);
    expect(badge).not.toMatch(/(^|[^-])width: 24px;/);
    expect(badge).toMatch(/padding: 0 \$\{\(\{ theme \}\) => theme\.padding\.xs\}px;/);
    expect(badge).toMatch(/height: 24px;/);
    expect(badge).toMatch(/theme\.border\.radius\.pill/);
    expect(badge).toMatch(/theme\.surface\.error/);
  });

  it('número em Inter Bold 12 com content.light', () => {
    const text = /export const BadgeText = styled\.Text`([^`]*)`/.exec(styles)?.[1] ?? '';
    expect(text).toMatch(/theme\.fontFamily\.body/);
    expect(text).toMatch(/theme\.fontWeight\.bold/);
    expect(text).toMatch(/theme\.fontSize\.sm/);
    expect(text).toMatch(/theme\.content\.light/);
  });
});
