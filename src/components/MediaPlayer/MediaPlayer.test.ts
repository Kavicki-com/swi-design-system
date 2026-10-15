import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { MEDIA_ICON, mediaAccessibilityLabel } from './MediaPlayer.logic';

// v0.1.141: player de anexo multimidia do relatorio. Na web (painel) toca com
// o player do proprio navegador (<video>/<audio> com controls). No nativo o
// app nao tem biblioteca de video: o componente mostra o cartao com o tipo e
// o botao que entrega ao host a abertura (navegador interno), decisao do
// projeto para nao entrar dependencia nativa nova perto da entrega.
describe('mediaAccessibilityLabel', () => {
  it('diz o tipo e o nome', () => {
    expect(mediaAccessibilityLabel('video', 'Vídeo 1')).toBe('Vídeo Vídeo 1');
    expect(mediaAccessibilityLabel('audio', 'relato.m4a')).toBe('Áudio relato.m4a');
  });
});

describe('MEDIA_ICON', () => {
  it('video usa videocam e audio usa audio_file, os mesmos da lista de anexos', () => {
    expect(MEDIA_ICON).toEqual({ video: 'videocam', audio: 'audio_file' });
  });
});

describe('MediaPlayer: ligacao', () => {
  const web = readFileSync(join(__dirname, 'MediaPlayer.web.tsx'), 'utf8');
  const native = readFileSync(join(__dirname, 'MediaPlayer.tsx'), 'utf8');
  const types = readFileSync(join(__dirname, 'MediaPlayer.types.ts'), 'utf8');
  const paths = readFileSync(join(__dirname, '..', '..', 'icons', 'paths.ts'), 'utf8');
  const index = readFileSync(join(__dirname, '..', '..', 'index.ts'), 'utf8');

  it('web: video e audio com os controles do navegador, carregando so os metadados', () => {
    expect(web).toMatch(/<video[\s\S]*?controls[\s\S]*?preload="metadata"/);
    expect(web).toMatch(/<audio[\s\S]*?controls[\s\S]*?preload="metadata"/);
    // src direto, sem <source type>: com type o Chrome recusa o .mov antes de
    // tentar, e sem ele o navegador fareja o conteudo e toca o H.264 do iPhone.
    expect(web).not.toMatch(/<source/);
  });

  it('web: falha de reproducao vira frase no lugar do player', () => {
    expect(web).toMatch(/onError=\{\(\) => setFailed\(true\)\}/);
    expect(web).toMatch(/errorLabel/);
  });

  it('web: tokens do tema, sem cor nem medida solta', () => {
    expect(web).toMatch(/theme\.border\.radius\.m/);
    expect(web).toMatch(/theme\.surface\.standard/);
    expect(web).not.toMatch(/#[0-9a-fA-F]{3,8}\b/);
  });

  it('nativo: nao usa elemento de DOM e entrega a abertura ao host', () => {
    expect(native).not.toMatch(/<video|<audio/);
    expect(native).toMatch(/onPress=\{onOpenExternal\}/);
    expect(native).toMatch(/MEDIA_ICON\[kind\]/);
  });

  it('props: tipo, url, titulo e textos opcionais', () => {
    expect(types).toMatch(/export type MediaKind = 'video' \| 'audio';/);
    expect(types).toMatch(/kind: MediaKind;/);
    expect(types).toMatch(/uri: string;/);
    expect(types).toMatch(/title: string;/);
    expect(types).toMatch(/onOpenExternal\?: \(\) => void;/);
    expect(types).toMatch(/openLabel\?: string;/);
    expect(types).toMatch(/errorLabel\?: string;/);
  });

  it('icones vem do Material Symbols, no viewBox padrao', () => {
    expect(paths).toMatch(/videocam: \{\s*\/\/[^\n]*\n(?:\s*\/\/[^\n]*\n)*\s*viewBox: MATERIAL_VIEWBOX,/);
    expect(paths).toMatch(/audio_file: \{\s*\/\/[^\n]*\n(?:\s*\/\/[^\n]*\n)*\s*viewBox: MATERIAL_VIEWBOX,/);
  });

  it('sai pelo index do pacote', () => {
    expect(index).toMatch(/export \{ MediaPlayer \} from '\.\/components\/MediaPlayer'/);
    expect(index).toMatch(/MediaPlayerProps/);
    expect(index).toMatch(/MediaKind/);
  });
});
