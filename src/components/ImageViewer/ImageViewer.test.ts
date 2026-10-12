import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { viewerLayout } from './ImageViewer.layout';

// v0.1.136: visualizador de imagem em tamanho grande, no molde do Modal da
// biblioteca do Figma (cartao surface.standard, raio l, padding m, sombra lg),
// largo, com o nome do arquivo, a imagem inteira sem corte, Baixar e fechar.
// O tamanho do palco depende da janela e e a unica conta do componente: mora
// em ImageViewer.layout.ts e e testada de verdade. O resto e contrato de fonte.
const chrome = { gutter: 24, padding: 16, gap: 16, header: 24, footer: 41 };

describe('viewerLayout', () => {
  it('na tela do painel o cartao para em 960 e o palco cabe na altura', () => {
    expect(viewerLayout({ width: 1366, height: 768 }, chrome)).toEqual({
      cardWidth: 960,
      stageWidth: 928,
      stageHeight: 591,
    });
  });

  it('em tela estreita o cartao ocupa a largura menos a margem e o palco segue 4:3', () => {
    expect(viewerLayout({ width: 390, height: 844 }, chrome)).toEqual({
      cardWidth: 342,
      stageWidth: 310,
      stageHeight: 232,
    });
  });

  it('janela muito baixa nao esmaga o palco abaixo de 160', () => {
    expect(viewerLayout({ width: 800, height: 300 }, chrome).stageHeight).toBe(160);
  });

  it('sem rodape (sem Baixar) o palco ganha a altura dele e de um espaco', () => {
    expect(viewerLayout({ width: 1366, height: 768 }, { ...chrome, footer: 0 }).stageHeight).toBe(648);
  });
});

describe('ImageViewer: ligacao', () => {
  const tsx = readFileSync(join(__dirname, 'ImageViewer.tsx'), 'utf8');
  const types = readFileSync(join(__dirname, 'ImageViewer.types.ts'), 'utf8');
  const index = readFileSync(join(__dirname, '..', '..', 'index.ts'), 'utf8');

  it('reusa a sobreposicao do Modal e fecha por Esc e clique fora', () => {
    expect(tsx).toMatch(/import \{ ModalOverlay \} from '\.\.\/Modal\/ModalOverlay'/);
    expect(tsx).toMatch(/onDismiss=\{onClose\}/);
  });

  it('a imagem aparece inteira, sem corte', () => {
    expect(tsx).toMatch(/resizeMode="contain"/);
  });

  it('falha ao carregar troca a imagem pela frase de erro', () => {
    expect(tsx).toMatch(/onError=\{\(\) => setFailed\(true\)\}/);
    expect(tsx).toMatch(/\{failed \?/);
    expect(types).toMatch(/errorLabel\?: string;/);
  });

  it('o Baixar so aparece com onDownload e e o Button contido com o icone de download', () => {
    expect(tsx).toMatch(/\{onDownload \?/);
    expect(tsx).toMatch(/label=\{downloadLabel\}/);
    expect(tsx).toMatch(/name="download"/);
  });

  it('o fechar e um botao com rotulo de acessibilidade e o icone close', () => {
    expect(tsx).toMatch(/accessibilityLabel=\{closeAccessibilityLabel\}/);
    expect(tsx).toMatch(/name="close"/);
  });

  it('props: visible, uri, title, onClose e onDownload opcional', () => {
    expect(types).toMatch(/visible: boolean;/);
    expect(types).toMatch(/uri: string \| null;/);
    expect(types).toMatch(/title: string;/);
    expect(types).toMatch(/onClose: \(\) => void;/);
    expect(types).toMatch(/onDownload\?: \(\) => void;/);
  });

  it('sai pelo index do pacote', () => {
    expect(index).toMatch(/export \{ ImageViewer \} from '\.\/components\/ImageViewer'/);
    expect(index).toMatch(/ImageViewerProps/);
  });
});
