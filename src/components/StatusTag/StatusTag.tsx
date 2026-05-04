import React, { forwardRef } from 'react';
import { type View } from 'react-native';
import { Container, Label } from './StatusTag.styles';
import type { StatusTagProps, StatusTagStatus } from './StatusTag.types';

const DEFAULT_LABELS: Record<StatusTagStatus, string> = {
  canceled: 'Cancelado',
  pending: 'Pendente',
  accept: 'Aceito',
};

export const StatusTag = forwardRef<View, StatusTagProps>(
  (
    {
      status = 'canceled',
      label,
      fullWidth = false,
      accessibilityLabel,
      testID,
    },
    ref,
  ) => {
    const text = label ?? DEFAULT_LABELS[status];
    return (
      <Container
        ref={ref}
        $status={status}
        style={
          fullWidth
            ? { alignSelf: 'stretch', width: '100%' }
            : { alignSelf: 'flex-start' }
        }
        accessibilityRole="text"
        accessibilityLabel={accessibilityLabel ?? text}
        testID={testID}
      >
        <Label numberOfLines={1}>{text}</Label>
      </Container>
    );
  },
);

StatusTag.displayName = 'StatusTag';
