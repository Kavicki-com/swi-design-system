import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { FlatList, Modal, Pressable, View } from 'react-native';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import {
  Container,
  Description,
  Label,
  OptionLabel,
  OptionRow,
  OptionsList,
  Panel,
  Trigger,
  TriggerLabel,
} from './Combobox.styles';
import type { ComboboxProps } from './Combobox.types';

// Altura estimada por OptionRow: padding-vertical 10x2 + OptionLabel (fontSize.m
// ~14, line-height ~1.4) ~ 44px. Buffer de 6px (gap.xs entre rows + border-top
// 1px) -> 50px por linha. maxHeight = 50 * maxVisibleRows.
const OPTION_ROW_HEIGHT_ESTIMATE = 50;

// Default quando o consumer não passa maxVisibleRows.
const DEFAULT_MAX_VISIBLE_ROWS = 6;

// Gap entre o trigger e o panel (Figma usa ~4px de respiro).
const TRIGGER_PANEL_GAP = 4;

interface TriggerRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const Combobox = forwardRef<View, ComboboxProps>(
  (
    {
      label,
      description,
      descriptionVariant = 'default',
      placeholder = 'Select…',
      options,
      value,
      onChange,
      open,
      onOpenChange,
      disabled = false,
      accessibilityLabel,
      accessibilityHint,
      testID,
      maxVisibleRows,
    },
    ref,
  ) => {
    const theme = useTheme();
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = open ?? internalOpen;
    const setOpen = (next: boolean) => {
      if (open === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    };

    const [hovered, setHovered] = useState(false);
    const [hoveredOption, setHoveredOption] = useState<string | null>(null);

    // measureInWindow do trigger pra posicionar o Panel dentro do Modal nas
    // coordenadas absolutas de tela. Sem isso, o Panel renderizaria no canto
    // superior esquerdo da janela do Modal.
    const triggerRef = useRef<View>(null);
    useImperativeHandle(ref, () => triggerRef.current as View, []);
    const [triggerRect, setTriggerRect] = useState<TriggerRect | null>(null);

    const selected = options.find((o) => o.value === value);
    const displayText = selected?.label ?? placeholder;
    const isPlaceholder = !selected;

    const handleSelect = (next: string) => {
      onChange?.(next);
      setOpen(false);
    };

    const openMenu = useCallback(() => {
      if (disabled) return;
      const node = triggerRef.current;
      if (!node || typeof node.measureInWindow !== 'function') {
        // Fallback: abre sem medir; sem rect o Modal não renderiza Panel
        // (o usuário verá o trigger expandir mas sem panel).
        setOpen(true);
        return;
      }
      node.measureInWindow((x, y, width, height) => {
        setTriggerRect({ x, y, width, height });
        setOpen(true);
      });
    }, [disabled]);

    const closeMenu = useCallback(() => {
      setOpen(false);
    }, []);

    // Backup: se `open` controlado externamente flippar pra true sem passar
    // pelo onPress (ex: coordenação cross-Combobox no consumer), garantir
    // que medimos o trigger pra Modal renderizar o Panel.
    useEffect(() => {
      if (!isOpen || disabled || triggerRect) return;
      const node = triggerRef.current;
      if (!node || typeof node.measureInWindow !== 'function') return;
      node.measureInWindow((x, y, width, height) => {
        setTriggerRect({ x, y, width, height });
      });
    }, [isOpen, disabled, triggerRect]);

    // Limpa o rect ao fechar pra próxima abertura medir do zero (cobre rotation
    // de device + casos onde o trigger se mexeu entre aberturas).
    useEffect(() => {
      if (!isOpen) setTriggerRect(null);
    }, [isOpen]);

    // Cap default = 6 garante scroll automático em listas longas.
    // Consumer pode passar 0/Infinity pra opt-out e voltar ao render plano.
    const effectiveMax = maxVisibleRows ?? DEFAULT_MAX_VISIBLE_ROWS;
    const shouldVirtualize = effectiveMax > 0 && options.length > effectiveMax;
    const panelMaxHeight = shouldVirtualize
      ? OPTION_ROW_HEIGHT_ESTIMATE * effectiveMax
      : undefined;

    const renderOptionRow = (option: typeof options[number], idx: number) => (
      <OptionRow
        key={option.value}
        $first={idx === 0}
        $hovered={hoveredOption === option.value}
        onPress={() => handleSelect(option.value)}
        onHoverIn={() => setHoveredOption(option.value)}
        onHoverOut={() =>
          setHoveredOption((current) => (current === option.value ? null : current))
        }
        accessibilityRole="menuitem"
        accessibilityState={{ selected: option.value === value }}
      >
        <OptionLabel>{option.label}</OptionLabel>
      </OptionRow>
    );

    return (
      <Container testID={testID}>
        {label ? <Label $disabled={disabled}>{label}</Label> : null}
        <Trigger
          ref={triggerRef}
          $focused={isOpen}
          $hovered={hovered}
          $disabled={disabled}
          disabled={disabled}
          onPress={() => (isOpen ? closeMenu() : openMenu())}
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          accessibilityRole="button"
          accessibilityState={{ disabled, expanded: isOpen }}
          accessibilityLabel={accessibilityLabel ?? label}
          accessibilityHint={accessibilityHint}
        >
          <TriggerLabel $placeholder={isPlaceholder} $disabled={disabled} numberOfLines={1}>
            {displayText}
          </TriggerLabel>
          <Icon
            name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            size={20}
            color={disabled ? theme.content.disable : theme.content.dark}
          />
        </Trigger>

        {/* Panel renderizado dentro de Modal — escapa qualquer ScrollView /
            FlatList ancestral, eliminando bugs de z-index e nested scroll.
            transparent + animationType=none mantém o feel de "dropdown" em
            vez de transição de tela cheia. */}
        <Modal
          visible={isOpen && !disabled && triggerRect !== null}
          transparent
          animationType="none"
          onRequestClose={closeMenu}
          statusBarTranslucent
        >
          {/* Backdrop ocupa a tela toda e fecha ao toque fora do panel. */}
          <Pressable
            style={{ flex: 1 }}
            onPress={closeMenu}
            accessibilityLabel="Fechar menu"
          >
            {triggerRect ? (
              <View
                pointerEvents="box-none"
                style={{
                  position: 'absolute',
                  top: triggerRect.y + triggerRect.height + TRIGGER_PANEL_GAP,
                  left: triggerRect.x,
                  width: triggerRect.width,
                }}
              >
                <Panel accessibilityRole="menu">
                  {shouldVirtualize ? (
                    <FlatList
                      data={options}
                      keyExtractor={(o) => o.value}
                      renderItem={({ item, index }) => renderOptionRow(item, index)}
                      style={{ maxHeight: panelMaxHeight }}
                      showsVerticalScrollIndicator
                      keyboardShouldPersistTaps="handled"
                    />
                  ) : (
                    <OptionsList>{options.map(renderOptionRow)}</OptionsList>
                  )}
                </Panel>
              </View>
            ) : null}
          </Pressable>
        </Modal>

        {description ? (
          <Description $disabled={disabled} $variant={descriptionVariant}>
            {description}
          </Description>
        ) : null}
      </Container>
    );
  },
);

Combobox.displayName = 'Combobox';
