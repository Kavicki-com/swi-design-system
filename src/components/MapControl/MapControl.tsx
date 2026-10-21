import React, { forwardRef, useCallback, useState } from 'react';
import { ScrollView, type View } from 'react-native';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { SearchInput } from '../SearchInput';
import { Tooltip } from '../Tooltip';
import { useTheme } from '../../theme';
import { elevation } from '../../tokens';
import type { IconName } from '../../icons';
import {
  Anchor,
  CollapsedButton,
  Divider,
  ExpandedBar,
  OptionsRow,
  ResultDescription,
  ResultLabel,
  ResultRow,
  ResultsPanel,
  SearchSlot,
  TitleText,
  TrailingButton,
} from './MapControl.styles';
import { resultsToShow } from './MapControl.logic';
import type { MapControlProps, MapControlVariant } from './MapControl.types';

const ICON_BY_VARIANT: Record<MapControlVariant, IconName> = {
  operators: 'person_apron',
  heatmap: 'mode_heat',
  cameras: 'video_camera_back',
};

const DEFAULT_TITLE: Record<MapControlVariant, string> = {
  operators: 'Operador',
  heatmap: 'Mapa de calor',
  cameras: 'Câmeras',
};

const DEFAULT_PLACEHOLDER: Record<MapControlVariant, string> = {
  operators: 'Buscar operador',
  heatmap: '',
  cameras: 'Buscar câmera',
};

export const MapControl = forwardRef<View, MapControlProps>(
  (
    {
      variant,
      expanded: controlledExpanded,
      defaultExpanded = true,
      onExpandedChange,
      title,
      searchPlaceholder,
      searchValue,
      onSearchChange,
      options,
      onOptionChange,
      results,
      onResultPress,
      emptyResultsText = 'Nenhum resultado',
      accessibilityLabel,
      testID,
      tooltip,
      tooltipSide = 'left',
    },
    ref,
  ) => {
    const theme = useTheme();
    const isExpandedControlled = controlledExpanded !== undefined;
    const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded);
    const expanded = isExpandedControlled ? controlledExpanded : uncontrolledExpanded;

    const toggleExpanded = useCallback(() => {
      const next = !expanded;
      if (!isExpandedControlled) setUncontrolledExpanded(next);
      onExpandedChange?.(next);
    }, [expanded, isExpandedControlled, onExpandedChange]);

    const iconName = ICON_BY_VARIANT[variant];
    const resolvedTitle = title ?? DEFAULT_TITLE[variant];
    const resolvedPlaceholder = searchPlaceholder ?? DEFAULT_PLACEHOLDER[variant];

    if (!expanded) {
      return (
        <Tooltip label={tooltip ?? resolvedTitle} side={tooltipSide}>
          <CollapsedButton
            ref={ref}
            onPress={toggleExpanded}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel ?? resolvedTitle}
            testID={testID}
            style={elevation.md}
          >
            <Icon name={iconName} size={24} color={theme.content.dark} />
          </CollapsedButton>
        </Tooltip>
      );
    }

    const renderCenter = () => {
      if (variant === 'heatmap') {
        return (
          <OptionsRow>
            {options?.map((opt) => (
              <Checkbox
                key={opt.id}
                label={opt.label}
                size="s"
                checked={opt.checked}
                onChange={(checked) => onOptionChange?.(opt.id, checked)}
              />
            ))}
          </OptionsRow>
        );
      }
      return (
        <SearchSlot>
          <SearchInput
            value={searchValue}
            onChangeText={onSearchChange}
            placeholder={resolvedPlaceholder}
          />
        </SearchSlot>
      );
    };

    // A variante `heatmap` não tem busca, logo nunca tem lista.
    const shown = variant === 'heatmap' ? null : resultsToShow(results, searchValue);

    return (
      <Anchor $raised={shown !== null}>
        <ExpandedBar
          ref={ref}
          accessibilityLabel={accessibilityLabel ?? resolvedTitle}
          testID={testID}
        >
          <TitleText numberOfLines={1}>{resolvedTitle}</TitleText>
          <Divider />
          {renderCenter()}
          <Divider />
          <TrailingButton
            onPress={toggleExpanded}
            accessibilityRole="button"
            accessibilityLabel="Recolher"
            style={elevation.md}
          >
            <Icon name={iconName} size={24} color={theme.content.dark} />
          </TrailingButton>
        </ExpandedBar>
        {shown ? (
          <ResultsPanel
            style={elevation.md}
            testID={testID ? `${testID}-results` : undefined}
          >
            <ScrollView keyboardShouldPersistTaps="handled">
              {shown.length === 0 ? (
                <ResultRow disabled>
                  <ResultDescription>{emptyResultsText}</ResultDescription>
                </ResultRow>
              ) : (
                shown.map((r) => (
                  <ResultRow
                    key={r.id}
                    accessibilityRole="button"
                    accessibilityLabel={r.label}
                    testID={testID ? `${testID}-result-${r.id}` : undefined}
                    onPress={() => onResultPress?.(r.id)}
                  >
                    <ResultLabel numberOfLines={1}>{r.label}</ResultLabel>
                    {r.description ? (
                      <ResultDescription numberOfLines={1}>
                        {r.description}
                      </ResultDescription>
                    ) : null}
                  </ResultRow>
                ))
              )}
            </ScrollView>
          </ResultsPanel>
        ) : null}
      </Anchor>
    );
  },
);

MapControl.displayName = 'MapControl';
