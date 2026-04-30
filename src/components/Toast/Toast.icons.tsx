import React from 'react';
import { Text, View } from 'react-native';
import type { ToastVariant } from './Toast.types';

const SYMBOL: Record<ToastVariant, string> = {
  error: '!',
  success: '✓',
  warning: '!',
  info: 'i',
};

export const StatusIcon = ({ variant, color }: { variant: ToastVariant; color: string }) => (
  <View
    style={{
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text
      style={{
        fontFamily: 'Montserrat, system-ui, sans-serif',
        fontSize: 18,
        fontWeight: '700',
        color,
        textAlign: 'center',
        includeFontPadding: false,
      }}
    >
      {SYMBOL[variant]}
    </Text>
  </View>
);

export const CloseIcon = ({ color }: { color: string }) => (
  <View
    style={{
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <View
      style={{
        position: 'absolute',
        width: 14,
        height: 2,
        backgroundColor: color,
        transform: [{ rotate: '45deg' }],
      }}
    />
    <View
      style={{
        position: 'absolute',
        width: 14,
        height: 2,
        backgroundColor: color,
        transform: [{ rotate: '-45deg' }],
      }}
    />
  </View>
);
