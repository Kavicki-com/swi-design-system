import type { MenuItemVariant } from '../MenuItem/MenuItem.types';
import type { SideMenuItem } from './SideMenu.types';

/**
 * Dica de hover de um item: so a variante minimal (icone sozinho, sem rotulo
 * visivel) ganha balao, e o texto e o proprio label. Nas demais o rotulo ja
 * aparece, entao nao ha dica.
 */
export const itemTooltip = (
  item: Pick<SideMenuItem, 'label' | 'variant'>,
  menuVariant: MenuItemVariant | undefined,
): string | null => {
  const variant = item.variant ?? menuVariant;
  return variant === 'minimal' ? item.label : null;
};
