import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { useTheme } from '../../theme';
import { Button } from '../Button';
import { actionBackground } from './Toast.action';
import { CloseIcon, StatusIcon } from './Toast.icons';
import {
  ActionSlot,
  CloseButton,
  Container,
  Message,
  MessageContainer,
  Title,
} from './Toast.styles';
import type { ToastProps } from './Toast.types';

export const Toast = forwardRef<View, ToastProps>(
  (
    { variant = 'info', title, message, action, onClose, accessibilityLabel, testID },
    ref,
  ) => {
    const theme = useTheme();
    return (
      <Container
        ref={ref}
        $variant={variant}
        accessibilityRole="alert"
        accessibilityLabel={accessibilityLabel ?? title}
        testID={testID}
      >
        <StatusIcon variant={variant} color={theme.content.light} />
        <MessageContainer>
          <Title>{title}</Title>
          {message ? <Message>{message}</Message> : null}
        </MessageContainer>
        {action ? (
          <ActionSlot>
            <Button
              variant="contained"
              elevation="lg"
              label={action.label}
              onPress={action.onPress}
              accessibilityLabel={action.accessibilityLabel}
              backgroundColor={actionBackground(variant, theme)}
            />
          </ActionSlot>
        ) : null}
        {onClose ? (
          <CloseButton
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Fechar"
          >
            <CloseIcon color={theme.content.light} />
          </CloseButton>
        ) : null}
      </Container>
    );
  },
);

Toast.displayName = 'Toast';
