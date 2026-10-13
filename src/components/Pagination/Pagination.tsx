import { Text, View } from 'react-native';
import { useTheme } from '../../theme';
import { Button } from '../Button';
import { Icon } from '../Icon';
import {
  isNextDisabled,
  isPaginationVisible,
  paginationPages,
  showOverflow,
} from './Pagination.logic';
import type { PaginationProps } from './Pagination.types';

/**
 * Bottom pagination strip — ghost number buttons + overflow + next-page
 * chevron. Used by mobile reports list (Figma 461:10196), FAQ
 * (Figma 361:12705) and the desktop employees list (Figma 53:5786).
 *
 * A pagina atual fica em `content.primary` (verde) e as outras em
 * `content.primaryLight`, como na Figma. Quando a lista e longa a tira mostra
 * so uma janela de `maxButtons` numeros ao redor da atual, com "..." enquanto
 * ha paginas depois. O chevron de avancar trava na ultima pagina, e a tira
 * inteira some quando so existe uma pagina.
 */
export function Pagination({
  currentPage,
  pageCount = 4,
  maxButtons = 4,
  onPageChange,
  onOverflowPress,
  testID,
}: PaginationProps) {
  const theme = useTheme();

  if (!isPaginationVisible(pageCount)) return null;

  const pages = paginationPages(currentPage, pageCount, maxButtons);
  const overflow = showOverflow(pages, pageCount);
  const nextDisabled = isNextDisabled(currentPage, pageCount);

  return (
    <View
      testID={testID}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      {pages.map((n) => (
        <View key={n} style={{ flex: 1 }}>
          <Button
            variant="ghost"
            label={String(n)}
            labelColor={n === currentPage ? theme.content.primary : theme.content.primaryLight}
            accessibilityLabel={`Página ${n}`}
            onPress={() => onPageChange(n)}
          />
        </View>
      ))}
      {overflow ? (
        onOverflowPress ? (
          <View style={{ flex: 1 }}>
            <Button
              variant="ghost"
              label="..."
              labelColor={theme.content.primaryLight}
              accessibilityLabel="Mais páginas"
              onPress={onOverflowPress}
            />
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
          >
            <Text style={{ color: theme.content.primaryLight }}>...</Text>
          </View>
        )
      ) : null}
      <View style={{ flex: 1 }}>
        <Button
          variant="contained"
          backgroundColor={theme.surface.primary}
          disabled={nextDisabled}
          accessibilityLabel="Próxima página"
          onPress={() => onPageChange(currentPage + 1)}
          iconLeft={
            <Icon
              name="keyboard_arrow_right"
              width={7.4}
              height={12}
              color={theme.content.light}
            />
          }
        />
      </View>
    </View>
  );
}
