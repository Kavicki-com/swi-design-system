import { describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
// semantic, e nao o theme de tokens/index: o index puxa o react-native (por
// causa do Platform das sombras), que o vitest do DS nao transforma.
import { semantic as theme } from '../../tokens/semantic';
import { dismissAction, modalDefaults, modalTone } from './Modal.logic';

// v0.1.136: o DS ganha o Modal da biblioteca do Figma (variantes
// validation=error e validation=success, 461:10263). O vitest do DS nao monta
// componente (ver Popover.placement.test.ts): as decisoes moram em
// Modal.logic.ts e sao testadas de verdade aqui; a ligacao no componente e
// conferida por contrato de fonte; o comportamento montado e testado no
// swi-admin, onde o react-native-web renderiza no jsdom.
describe('modalDefaults', () => {
  it('erro: lixeira com X (delete-icon do Figma), Sim e Nao', () => {
    expect(modalDefaults('error')).toEqual({
      icon: 'delete_forever',
      confirmLabel: 'Sim',
      cancelLabel: 'Não',
    });
  });

  it('sucesso: check e Continuar, sem cancelar', () => {
    expect(modalDefaults('success')).toEqual({
      icon: 'check_circle',
      confirmLabel: 'Continuar',
      cancelLabel: null,
    });
  });
});

describe('modalTone', () => {
  it('erro pinta titulo e icone de content.error e o botao de surface.error', () => {
    expect(modalTone('error', theme)).toEqual({
      accent: theme.content.error,
      confirmBackground: theme.surface.error,
    });
  });

  it('sucesso pinta de content.success e o botao de surface.success', () => {
    expect(modalTone('success', theme)).toEqual({
      accent: theme.content.success,
      confirmBackground: theme.surface.success,
    });
  });
});

describe('dismissAction', () => {
  const onCancel = vi.fn();
  const onConfirm = vi.fn();

  it('no erro, Esc e clique fora valem como Nao', () => {
    expect(dismissAction('error', onCancel, onConfirm)).toBe(onCancel);
  });

  // Sem cancelar, fechar por fora confirmaria uma exclusao sem querer.
  it('no erro sem onCancel, Esc e clique fora nao fazem nada', () => {
    expect(dismissAction('error', undefined, onConfirm)).toBeUndefined();
  });

  it('no sucesso, fechar por fora e o mesmo que Continuar', () => {
    expect(dismissAction('success', undefined, onConfirm)).toBe(onConfirm);
    expect(dismissAction('success', onCancel, onConfirm)).toBe(onCancel);
  });
});

describe('Modal: ligacao', () => {
  const tsx = readFileSync(join(__dirname, 'Modal.tsx'), 'utf8');
  const overlay = readFileSync(join(__dirname, 'ModalOverlay.tsx'), 'utf8');
  const styles = readFileSync(join(__dirname, 'Modal.styles.ts'), 'utf8');
  const types = readFileSync(join(__dirname, 'Modal.types.ts'), 'utf8');
  const index = readFileSync(join(__dirname, '..', '..', 'index.ts'), 'utf8');

  it('a sobreposicao usa o Modal do react-native, transparente e sem animacao', () => {
    expect(overlay).toMatch(/import \{[^}]*Modal as RNModal[^}]*\} from 'react-native'/);
    expect(overlay).toMatch(/transparent/);
    expect(overlay).toMatch(/animationType="none"/);
    expect(overlay).toMatch(/onRequestClose=\{onDismiss\}/);
  });

  it('o fundo escurecido usa theme.overlay e fecha no toque', () => {
    expect(overlay).toMatch(/theme\.overlay/);
    expect(overlay).toMatch(/onPress=\{onDismiss\}/);
  });

  it('o cartao segura o toque e se marca como modal', () => {
    expect(overlay).toMatch(/accessibilityViewIsModal/);
  });

  it('o cartao segue o Figma: surface.standard, padding m, raio l, sombra lg', () => {
    const card = /export const Card = styled\(Pressable\)`([^`]*)`/.exec(styles)?.[1] ?? '';
    expect(card).toMatch(/theme\.surface\.standard/);
    expect(card).toMatch(/theme\.padding\.m/);
    expect(card).toMatch(/theme\.border\.radius\.l/);
    expect(overlay).toMatch(/elevation\.lg/);
  });

  it('titulo title.xs e descricao body.s, centralizados', () => {
    expect(tsx).toMatch(/<Title[\s\S]*variant="title\.xs"/);
    expect(tsx).toMatch(/<Text[\s\S]*variant="body\.s"/);
    expect(tsx.match(/textAlign: 'center'/g)?.length ?? 0).toBeGreaterThanOrEqual(2);
  });

  it('o confirmar e o Button contido com a cor da variante e sombra lg', () => {
    expect(tsx).toMatch(/backgroundColor=\{tone\.confirmBackground\}/);
    expect(tsx).toMatch(/elevation="lg"/);
    expect(tsx).toMatch(/onPress=\{onConfirm\}/);
  });

  it('o cancelar so aparece no erro e e o Button fantasma', () => {
    expect(tsx).toMatch(/variant="ghost"/);
    expect(tsx).toMatch(/validation === 'error'/);
  });

  it('props: visible, validation, title, description, rotulos e handlers', () => {
    expect(types).toMatch(/visible: boolean;/);
    expect(types).toMatch(/validation\?: ModalValidation;/);
    expect(types).toMatch(/title: string;/);
    expect(types).toMatch(/description\?: string;/);
    expect(types).toMatch(/onConfirm: \(\) => void;/);
    expect(types).toMatch(/onCancel\?: \(\) => void;/);
  });

  it('sai pelo index do pacote', () => {
    expect(index).toMatch(/export \{ Modal \} from '\.\/components\/Modal'/);
    expect(index).toMatch(/ModalProps/);
    expect(index).toMatch(/ModalValidation/);
  });
});
