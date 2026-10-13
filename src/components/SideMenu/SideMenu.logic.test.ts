import { describe, expect, it } from 'vitest';
import { itemTooltip } from './SideMenu.logic';

// So o item icone-sozinho (variante minimal) ganha balao de dica no hover: com
// rotulo visivel, o nome ja esta na tela e o balao seria redundante. O rotulo
// do balao e o proprio label do item.

describe('itemTooltip', () => {
  it('minimal pelo menu: usa o label como dica', () => {
    expect(itemTooltip({ label: 'Início' }, 'minimal')).toBe('Início');
  });

  it('default: sem dica (o rotulo ja aparece)', () => {
    expect(itemTooltip({ label: 'Início' }, 'default')).toBeNull();
    expect(itemTooltip({ label: 'Início' }, 'compact')).toBeNull();
    expect(itemTooltip({ label: 'Início' }, undefined)).toBeNull();
  });

  it('a variante do item vence a do menu', () => {
    expect(itemTooltip({ label: 'A', variant: 'minimal' }, 'default')).toBe('A');
    expect(itemTooltip({ label: 'A', variant: 'default' }, 'minimal')).toBeNull();
  });
});
