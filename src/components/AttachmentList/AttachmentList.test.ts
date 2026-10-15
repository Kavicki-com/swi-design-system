import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
// semantic, e nao o theme de tokens/index: o index puxa o react-native (por
// causa do Platform das sombras), que o vitest do DS nao transforma.
import { semantic as theme } from '../../tokens/semantic';
import {
  ACTION_ICON,
  DEFAULT_ACTION_LABELS,
  actionAccessibilityLabel,
  actionBackground,
  thumbIcon,
  visibleActions,
} from './AttachmentList.actions';

// v0.1.136: lista unica de anexos para o painel (exames no cadastro de
// administrador e de funcionario, anexos do Novo relatorio e imagens do
// Visualizar relatorio). Uma linha por anexo, no molde do exame compacto
// (Figma 159:15646): miniatura de 56 (o Image da biblioteca) ou icone de
// arquivo, nome e botoes so de icone. Quais botoes aparecem e a decisao que
// muda por tela: mora em AttachmentList.actions.ts e e testada de verdade.
const noop = () => {};

describe('visibleActions', () => {
  it('com os tres handlers e sem restricao do item, mostra visualizar, baixar e excluir', () => {
    expect(visibleActions({}, { view: noop, download: noop, remove: noop })).toEqual([
      'view',
      'download',
      'remove',
    ]);
  });

  // Ex.: arquivo ainda nao enviado nao tem o que baixar.
  it('o item restringe as acoes e a ordem continua a da linha', () => {
    expect(
      visibleActions({ actions: ['remove', 'view'] }, { view: noop, download: noop, remove: noop }),
    ).toEqual(['view', 'remove']);
  });

  // Ex.: Visualizar relatorio nao exclui.
  it('sem o handler na lista, a acao some mesmo que o item a permita', () => {
    expect(visibleActions({ actions: ['view', 'remove'] }, { view: noop, download: noop })).toEqual([
      'view',
    ]);
  });

  it('sem handler nenhum, nenhum botao', () => {
    expect(visibleActions({}, {})).toEqual([]);
  });
});

describe('rotulos, icones e cores', () => {
  it('o rotulo de acessibilidade junta a acao e o nome do arquivo', () => {
    expect(actionAccessibilityLabel('view', 'exame.pdf', DEFAULT_ACTION_LABELS)).toBe(
      'Visualizar exame.pdf',
    );
    expect(actionAccessibilityLabel('download', 'exame.pdf', DEFAULT_ACTION_LABELS)).toBe(
      'Baixar exame.pdf',
    );
    expect(actionAccessibilityLabel('remove', 'exame.pdf', DEFAULT_ACTION_LABELS)).toBe(
      'Excluir exame.pdf',
    );
  });

  // A lixeira e a do Modal de exclusao do Figma, o mesmo glifo da confirmacao.
  it('icones: olho, download e a lixeira com X do Figma', () => {
    expect(ACTION_ICON).toEqual({ view: 'visibility', download: 'download', remove: 'delete_forever' });
  });

  it('excluir usa surface.error; as outras acoes, o verde do botao de baixar do exame', () => {
    expect(actionBackground('remove', theme)).toBe(theme.surface.error);
    expect(actionBackground('view', theme)).toBe(theme.surface.primary);
    expect(actionBackground('download', theme)).toBe(theme.surface.primary);
  });
});

// v0.1.141: anexo multimidia do relatorio. Video e audio ganham icone proprio
// na miniatura (Material Symbols videocam e audio_file); documento segue com
// o clipe, e imagem sem miniatura tambem.
describe('thumbIcon', () => {
  it.each([
    ['image', 'attach_file'],
    ['file', 'attach_file'],
    ['video', 'videocam'],
    ['audio', 'audio_file'],
  ] as const)('%s mostra %s', (kind, icon) => {
    expect(thumbIcon(kind)).toBe(icon);
  });
});

describe('AttachmentList: ligacao', () => {
  const tsx = readFileSync(join(__dirname, 'AttachmentList.tsx'), 'utf8');
  const styles = readFileSync(join(__dirname, 'AttachmentList.styles.ts'), 'utf8');
  const types = readFileSync(join(__dirname, 'AttachmentList.types.ts'), 'utf8');
  const index = readFileSync(join(__dirname, '..', '..', 'index.ts'), 'utf8');

  it('a linha segue o exame compacto: surface.standard, raio m, padding xs/sm, gap s', () => {
    const row = /export const Row = styled\(View\)`([^`]*)`/.exec(styles)?.[1] ?? '';
    expect(row).toMatch(/theme\.surface\.standard/);
    expect(row).toMatch(/theme\.border\.radius\.m/);
    expect(row).toMatch(/theme\.padding\.xs\}px \$\{\(\{ theme \}\) => theme\.padding\.sm/);
    expect(row).toMatch(/theme\.gap\.s/);
  });

  it('a miniatura tem 56 e a imagem cobre o quadro; sem miniatura mostra o icone do tipo', () => {
    const thumb = /export const Thumb = styled\(View\)`([^`]*)`/.exec(styles)?.[1] ?? '';
    expect(thumb).toMatch(/width: 56px;/);
    expect(thumb).toMatch(/height: 56px;/);
    // surface.medium sumiria sobre a linha (surface.standard).
    expect(thumb).toMatch(/theme\.surface\.high/);
    expect(tsx).toMatch(/resizeMode="cover"/);
    expect(tsx).toMatch(/<Icon name=\{thumbIcon\(item\.kind\)\} size=\{24\}/);
  });

  it('cada botao e o Button contido pequeno so com icone de 24', () => {
    expect(tsx).toMatch(/size="small"/);
    expect(tsx).toMatch(/variant="contained"/);
    expect(tsx).toMatch(/iconLeft=\{<Icon name=\{ACTION_ICON\[action\]\} size=\{24\}/);
    expect(tsx).toMatch(/backgroundColor=\{actionBackground\(action, theme\)\}/);
  });

  it('item ocupado desabilita os botoes da linha', () => {
    expect(tsx).toMatch(/busyIds\?\.includes\(item\.id\)/);
    expect(tsx).toMatch(/disabled=\{busy\}/);
  });

  it('o nome corta em uma linha', () => {
    expect(tsx).toMatch(/numberOfLines=\{1\}/);
  });

  it('props: itens com id, nome, tipo, miniatura e acoes; handlers opcionais', () => {
    expect(types).toMatch(/export type AttachmentKind = 'image' \| 'file' \| 'video' \| 'audio';/);
    expect(types).toMatch(/id: string;/);
    expect(types).toMatch(/name: string;/);
    expect(types).toMatch(/kind: AttachmentKind;/);
    expect(types).toMatch(/thumbnailUri\?: string;/);
    expect(types).toMatch(/actions\?: ReadonlyArray<AttachmentAction>;/);
    expect(types).toMatch(/onView\?: \(item: AttachmentItem\) => void;/);
    expect(types).toMatch(/onDownload\?: \(item: AttachmentItem\) => void;/);
    expect(types).toMatch(/onRemove\?: \(item: AttachmentItem\) => void;/);
  });

  it('sai pelo index do pacote', () => {
    expect(index).toMatch(/export \{ AttachmentList \} from '\.\/components\/AttachmentList'/);
    for (const name of ['AttachmentListProps', 'AttachmentItem', 'AttachmentAction', 'AttachmentKind']) {
      expect(index).toMatch(new RegExp(name));
    }
  });
});
