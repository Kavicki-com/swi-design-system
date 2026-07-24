import { describe, expect, it } from 'vitest';
import { iconPaths } from './paths';

// assignment_filled (0.1.117): a sidebar do admin usa variante _filled em todos
// os itens, mas "Tarefas" ficou com o `assignment` outline porque a filled não
// existia. O glifo preenchido JÁ estava no registry — o export canônico do
// Figma raw/material/assignment.svg entrou como `report_filled` (o Figma chama
// o ícone do KPI "Novos relatórios" de `assignment`). Decisão do designer
// 2026-07-24: registrar `assignment_filled` como alias do mesmo path, mantendo
// `report_filled` intocado por retrocompat.
describe('iconPaths.assignment_filled', () => {
  it('registrado e compartilha o path do export Figma (report_filled)', () => {
    expect(iconPaths.assignment_filled).toBeDefined();
    expect(iconPaths.assignment_filled.d).toBe(iconPaths.report_filled.d);
    expect(iconPaths.assignment_filled.viewBox).toBe(iconPaths.report_filled.viewBox);
  });
});
