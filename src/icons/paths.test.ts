import { describe, expect, it } from 'vitest';
import { iconPaths } from './paths';

// assignment_filled (0.1.117): a sidebar do admin usa variante _filled em todos
// os itens, mas "Tarefas" ficou com o `assignment` outline porque a filled não
// existia. O glifo preenchido JÁ estava no registry — o export canônico do
// Figma raw/material/assignment.svg entrou como `report_filled` (o Figma chama
// o ícone do KPI "Novos relatórios" de `assignment`). Decisão do designer
// 2026-07-24: registrar `assignment_filled` como alias do mesmo path, mantendo
// `report_filled` intocado por retrocompat.
// content_copy (0.1.129): o popover de acoes da mensagem do chat precisa de
// "Copiar". Nao existe export do designer pra esse glifo, e a regra de icones
// aceita Material Symbols como segunda fonte justamente para conceito generico
// como copiar. Path buscado do repositorio do Google, na URL documentada no
// cabecalho de paths.ts, nao escrito a mao.
describe('iconPaths.content_copy', () => {
  it('registrado com o viewBox do Material', () => {
    expect(iconPaths.content_copy).toBeDefined();
    expect(iconPaths.content_copy.viewBox).toBe('0 -960 960 960');
  });

  it('o path e o export canonico do Google, inclusive o ultimo segmento', () => {
    // O segmento final e facil de perder num copia-e-cola: sem ele o glifo
    // perde a folha de tras e vira um quadrado solitario.
    expect(iconPaths.content_copy.d).toBe(
      'M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z',
    );
  });
});

describe('iconPaths.assignment_filled', () => {
  it('registrado e compartilha o path do export Figma (report_filled)', () => {
    expect(iconPaths.assignment_filled).toBeDefined();
    expect(iconPaths.assignment_filled.d).toBe(iconPaths.report_filled.d);
    expect(iconPaths.assignment_filled.viewBox).toBe(iconPaths.report_filled.viewBox);
  });
});
