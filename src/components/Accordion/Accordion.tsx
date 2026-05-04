import React, { forwardRef, useCallback, useState } from 'react';
import { type View } from 'react-native';
import { Icon } from '../Icon';
import { useTheme } from '../../theme';
import {
  ChevronWrap,
  Container,
  Content,
  ContentText,
  Header,
  TitleText,
} from './Accordion.styles';
import type { AccordionProps } from './Accordion.types';

export const Accordion = forwardRef<View, AccordionProps>(
  (
    {
      title,
      children,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      showIconLeft = true,
      showIconRight = true,
      fullWidth = false,
      disabled = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const theme = useTheme();
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;

    const handleToggle = useCallback(() => {
      if (disabled) return;
      const next = !open;
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    }, [disabled, isControlled, onOpenChange, open]);

    const chevronColor = theme.content.primary;

    return (
      <Container
        ref={ref}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start', width: 320 }
        }
        testID={testID}
      >
        <Header
          $disabled={disabled}
          onPress={handleToggle}
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel ?? title}
          accessibilityState={{ expanded: open, disabled }}
        >
          {showIconLeft ? (
            <ChevronWrap $open={open}>
              <Icon name="keyboard_arrow_down" size={16} color={chevronColor} />
            </ChevronWrap>
          ) : null}
          <TitleText numberOfLines={1}>{title}</TitleText>
          {showIconRight ? (
            <ChevronWrap $open={open}>
              <Icon name="keyboard_arrow_down" size={16} color={chevronColor} />
            </ChevronWrap>
          ) : null}
        </Header>
        {open && children !== undefined ? (
          <Content>
            {typeof children === 'string' ? <ContentText>{children}</ContentText> : children}
          </Content>
        ) : null}
      </Container>
    );
  },
);

Accordion.displayName = 'Accordion';
