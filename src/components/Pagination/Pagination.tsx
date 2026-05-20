import { View } from 'react-native';
import { useTheme } from '../../theme';
import { Button } from '../Button';
import { Icon } from '../Icon';
import type { PaginationProps } from './Pagination.types';

/**
 * Bottom pagination strip — ghost number buttons + overflow + next-page
 * chevron. Used by mobile reports list (Figma 461:10196) and FAQ
 * (Figma 361:12705). The numbered buttons render as ghost regardless
 * of `currentPage` — selection-state styling is not yet specified
 * in the design.
 */
export function Pagination({
  currentPage,
  pageCount = 4,
  onPageChange,
  onOverflowPress,
  testID,
}: PaginationProps) {
  const theme = useTheme();
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

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
            labelColor={theme.content.primaryLight}
            accessibilityLabel={`Página ${n}`}
            onPress={() => onPageChange(n)}
          />
        </View>
      ))}
      <View style={{ flex: 1 }}>
        <Button
          variant="ghost"
          label="..."
          labelColor={theme.content.primaryLight}
          accessibilityLabel="Mais páginas"
          onPress={onOverflowPress}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          variant="contained"
          backgroundColor={theme.surface.primary}
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
