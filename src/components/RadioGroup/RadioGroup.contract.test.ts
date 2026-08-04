import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { isSelected } from './RadioGroup.selection';

// POR QUE ESTE COMPONENTE NASCEU
//
// QA Mobile #1 reportou a etapa 2 do cadastro: "Avancar" nao avancava e nao
// dizia o que faltava. A varredura da classe achou a MESMA parede na etapa 3,
// so que pior — la nem existia superficie de erro, porque os campos sao
// Combobox, GenderSelector e um par de Radio solto, e nenhum deles tinha
// legenda com variante.
//
// O par "Sim / Nao" era o caso sem solucao honesta: o erro pertence a PERGUNTA
// ("Pessoa com deficiencia?"), nao a um dos dois botoes. Pendurar a mensagem
// em um Radio deixaria o outro sem, e a legenda apareceria deslocada da
// pergunta. Dai o grupo virar componente, como ChipGroup e AvatarGroup ja sao.
//
// O DS nao tem transform de react-native no vitest (nenhum teste monta
// componente RN), entao a selecao sai num modulo puro e o resto e validado no
// texto-fonte — mesma abordagem do ProgressBar.inset.test.ts.

describe('isSelected', () => {
  it('casa a opcao com o valor atual', () => {
    expect(isSelected('sim', 'sim')).toBe(true);
    expect(isSelected('nao', 'sim')).toBe(false);
  });

  // Estado inicial do step-3: nada escolhido. Se null/undefined casassem com
  // algo, o grupo abriria ja parecendo respondido e o usuario poderia passar
  // batido por uma pergunta obrigatoria.
  it('nada selecionado enquanto o valor e null ou undefined', () => {
    expect(isSelected('sim', null)).toBe(false);
    expect(isSelected('nao', undefined)).toBe(false);
  });

  // Guarda contra o classico `value=""` vindo de um form vazio: string vazia
  // nao pode selecionar uma opcao de value vazio por acidente.
  it('string vazia nao seleciona', () => {
    expect(isSelected('', null)).toBe(false);
    expect(isSelected('', '')).toBe(false);
  });
});

describe('RadioGroup — decisoes do render que nao dao pra montar', () => {
  const tsx = readFileSync(join(__dirname, 'RadioGroup.tsx'), 'utf8');

  it('o grupo se anuncia como radiogroup, nao como um monte de radio solto', () => {
    // Sem isto o leitor de tela nao liga a pergunta as opcoes, e a pessoa
    // ouve "Sim" e "Nao" sem saber do que se trata.
    expect(tsx).toMatch(/accessibilityRole="radiogroup"/);
  });

  it('a legenda pertence ao grupo e sai com a variante', () => {
    expect(tsx).toMatch(/\$variant=\{descriptionVariant\}/);
  });

  it('a selecao vem do modulo puro, nao de uma comparacao inline', () => {
    expect(tsx).toMatch(/isSelected\(/);
  });

  it('a legenda so aparece quando ha texto', () => {
    // Reservar a linha sempre empurraria o layout do Figma pra baixo em todos
    // os estados, inclusive no feliz.
    expect(tsx).toMatch(/description \?/);
  });
});

describe('RadioGroup — exportado pra fora do pacote', () => {
  const index = readFileSync(join(__dirname, '..', '..', 'index.ts'), 'utf8');

  it('o app consegue importar o componente e o tipo', () => {
    expect(index).toMatch(/export \{ RadioGroup \} from '\.\/components\/RadioGroup'/);
    expect(index).toMatch(/RadioGroupProps/);
  });
});
