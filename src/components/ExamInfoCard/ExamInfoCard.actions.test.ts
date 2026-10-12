import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// v0.1.137: no cadastro de usuario os exames precisam de visualizar, baixar e
// excluir, no lugar do botao unico de baixar. O card ganha um cluster de acoes
// so-icone, com os mesmos icones e cores da AttachmentList (uma fonte so). O
// vitest do DS nao monta componente: aqui se confere a ligacao por contrato de
// fonte; o comportamento montado e testado no swi-admin.
describe('ExamInfoCard: cluster de acoes', () => {
  const dir = __dirname;
  const tsx = readFileSync(join(dir, 'ExamInfoCard.tsx'), 'utf8');
  const types = readFileSync(join(dir, 'ExamInfoCard.types.ts'), 'utf8');

  it('reusa os icones e as cores da AttachmentList (nao duplica)', () => {
    const importBlock = /import \{([\s\S]*?)\} from '\.\.\/AttachmentList\/AttachmentList\.actions'/.exec(
      tsx,
    )?.[1];
    expect(importBlock).toBeTruthy();
    for (const name of ['ACTION_ICON', 'actionBackground', 'visibleActions']) {
      expect(importBlock).toContain(name);
    }
  });

  it('o cluster aparece quando ha acoes, no lugar do botao unico', () => {
    expect(tsx).toMatch(/actions && actions\.length > 0/);
    expect(tsx).toMatch(/visibleActions\(/);
  });

  it('cada botao e o Button contido pequeno so com icone, na cor da acao', () => {
    expect(tsx).toMatch(/size="small"/);
    expect(tsx).toMatch(/variant="contained"/);
    expect(tsx).toMatch(/iconLeft=\{<Icon name=\{ACTION_ICON\[action\]\} size=\{24\}/);
    expect(tsx).toMatch(/backgroundColor=\{actionBackground\(action, theme\)\}/);
  });

  it('cada botao desabilita com actionsBusy', () => {
    expect(tsx).toMatch(/disabled=\{actionsBusy\}/);
  });

  it('props: actions e os handlers/rotulos por acao', () => {
    expect(types).toMatch(/export type ExamAction = 'view' \| 'download' \| 'remove';/);
    expect(types).toMatch(/actions\?: ReadonlyArray<ExamAction>;/);
    expect(types).toMatch(/onView\?: \(\) => void;/);
    expect(types).toMatch(/onDownload\?: \(\) => void;/);
    expect(types).toMatch(/onRemove\?: \(\) => void;/);
    expect(types).toMatch(/actionsBusy\?: boolean;/);
    expect(types).toMatch(/viewAccessibilityLabel\?: string;/);
    expect(types).toMatch(/downloadAccessibilityLabel\?: string;/);
    expect(types).toMatch(/removeAccessibilityLabel\?: string;/);
  });

  it('o tipo ExamAction sai pelo index do pacote', () => {
    const index = readFileSync(join(dir, '..', '..', 'index.ts'), 'utf8');
    expect(index).toMatch(/ExamAction/);
  });
});
