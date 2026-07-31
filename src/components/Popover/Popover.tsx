import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import { panelOffsets, shouldDismiss, type Containable } from './Popover.placement';
import { Anchor, ItemLabel, ItemList, ItemRow, Panel, Separator } from './Popover.styles';
import type { PopoverItemProps, PopoverProps } from './Popover.types';

/**
 * Menu flutuante ancorado num gatilho.
 *
 * POSICIONAMENTO — o painel e absoluto DENTRO do wrapper do gatilho, e nao
 * dentro de um Modal como o dropdown do Combobox. A troca e deliberada: o
 * Combobox mede o gatilho com `measureInWindow` para desenhar dentro de um
 * Modal, e `measureInWindow` nao existe no jsdom. O resultado pratico e que
 * nenhuma tela com Combobox consegue ser testada sem dublar o Combobox
 * inteiro. Sem Modal e sem medicao, o comportamento deste componente fica sob
 * teste de verdade no host.
 *
 * O preco: o painel obedece ao `overflow` dos ancestrais, entao quem usa
 * precisa garantir que o container do gatilho nao recorta.
 *
 * PLATAFORMA — fechar no clique fora e no Esc depende de listener de
 * documento, entao vale no web, inclusive react-native-web. No nativo os dois
 * nao acontecem e o consumidor fecha por acao explicita. Cobrir o nativo pede
 * a saida por Modal com backdrop, que entra quando o app mobile precisar.
 */
export const Popover = forwardRef<View, PopoverProps>(
  (
    {
      visible,
      onDismiss,
      trigger,
      align = 'start',
      gap = 4,
      minWidth = 176,
      children,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const panelRef = useRef<View | null>(null);
    const triggerRef = useRef<View | null>(null);

    useEffect(() => {
      if (Platform.OS !== 'web' || !visible) return;

      // Fase de captura (terceiro argumento true) para o popover decidir antes
      // de o clique virar acao em quem esta atras dele.
      const onPointerDown = (event: Event) => {
        const asNode = (r: View | null) => r as unknown as Containable | null;
        if (shouldDismiss(event.target, asNode(panelRef.current), asNode(triggerRef.current))) {
          onDismiss();
        }
      };
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') onDismiss();
      };

      document.addEventListener('pointerdown', onPointerDown, true);
      document.addEventListener('keydown', onKeyDown, true);
      return () => {
        document.removeEventListener('pointerdown', onPointerDown, true);
        document.removeEventListener('keydown', onKeyDown, true);
      };
    }, [visible, onDismiss]);

    return (
      <Anchor ref={ref} testID={testID}>
        {/* Wrapper simples, so pra segurar a referencia do gatilho: quem
            posiciona e o Anchor de fora. */}
        <View ref={triggerRef}>{trigger}</View>
        {visible ? (
          <Panel
            ref={panelRef}
            $minWidth={minWidth}
            style={panelOffsets(align, gap)}
            accessibilityRole="menu"
            accessibilityLabel={accessibilityLabel}
            testID={testID ? `${testID}-panel` : undefined}
          >
            <ItemList>{children}</ItemList>
          </Panel>
        ) : null}
      </Anchor>
    );
  },
);

Popover.displayName = 'Popover';

/**
 * Linha de acao do Popover.
 *
 * Nao reusa `MenuItem` de proposito: aquele e cromo de navegacao, com largura
 * fixa de 224px, divisores, badge de contagem e tinta cinza que fica verde no
 * hover. Servir de linha de menu flutuante exigiria quatro props novas
 * brigando entre si. Esta linha e modelada no `OptionRow` do Combobox, que ja
 * e linha de painel flutuante.
 */
export const PopoverItem = forwardRef<View, PopoverItemProps>(
  (
    { label, icon, tone = 'default', disabled = false, onPress, accessibilityLabel, testID },
    ref,
  ) => {
    const theme = useTheme();
    const [hovered, setHovered] = useState(false);

    const color = disabled
      ? theme.content.disable
      : tone === 'destructive'
        ? theme.content.error
        : theme.content.dark;

    return (
      <ItemRow
        ref={ref}
        $hovered={hovered}
        $disabled={disabled}
        disabled={disabled}
        onPress={disabled ? undefined : onPress}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        accessibilityRole="menuitem"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{ disabled }}
        testID={testID}
      >
        {icon ? <Icon name={icon} size={18} color={color} /> : null}
        <ItemLabel $color={color}>{label}</ItemLabel>
      </ItemRow>
    );
  },
);

PopoverItem.displayName = 'PopoverItem';

/** Fio entre grupos de itens. Use antes de uma acao destrutiva. */
export const PopoverSeparator = Separator;
