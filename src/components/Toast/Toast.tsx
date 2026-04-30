import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { useTheme } from '../../theme';
import { CloseIcon, StatusIcon } from './Toast.icons';
import {
  CloseButton,
  Container,
  Message,
  MessageContainer,
  Title,
} from './Toast.styles';
import type { ToastProps } from './Toast.types';

export const Toast = forwardRef<View, ToastProps>(
  (
    { variant = 'info', title, message, onClose, accessibilityLabel, testID },
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
        {onClose ? (
          <CloseButton
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Close"
          >
            <CloseIcon color={theme.content.light} />
          </CloseButton>
        ) : null}
      </Container>
    );
  },
);

Toast.displayName = 'Toast';
