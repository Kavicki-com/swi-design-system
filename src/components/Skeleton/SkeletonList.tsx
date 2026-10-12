import React from 'react';
import { useTheme } from '../../theme';
import { Skeleton } from './Skeleton';
import { clampRows, skeletonLineWidths } from './Skeleton.pulse';
import { Lines, List, ListRow } from './Skeleton.styles';
import type { SkeletonListProps } from './Skeleton.types';

/**
 * Espera de uma lista: linhas no formato do cartão das listas do painel, com
 * o círculo do avatar e linhas de texto encurtando. O leitor de tela ouve uma
 * vez que está carregando, não cada bloco.
 */
export function SkeletonList({
  rows = 3,
  lines = 2,
  avatarSize = 56,
  animated = true,
  accessibilityLabel = 'Carregando',
  testID,
}: SkeletonListProps) {
  const theme = useTheme();
  const widths = skeletonLineWidths(lines);

  return (
    <List accessibilityRole="progressbar" accessibilityLabel={accessibilityLabel} testID={testID}>
      {Array.from({ length: clampRows(rows) }, (_, row) => (
        <ListRow key={row}>
          {avatarSize ? <Skeleton shape="circle" height={avatarSize} animated={animated} /> : null}
          <Lines>
            {widths.map((width, line) => (
              <Skeleton key={line} width={width} height={theme.fontSize.m} animated={animated} />
            ))}
          </Lines>
        </ListRow>
      ))}
    </List>
  );
}
