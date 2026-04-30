import React from 'react';
import { View } from 'react-native';

interface IconProps {
  color: string;
}

export const SearchIcon = ({ color }: IconProps) => (
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
        width: 12,
        height: 12,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: color,
        position: 'absolute',
        top: 4,
        left: 4,
      }}
    />
    <View
      style={{
        position: 'absolute',
        width: 6,
        height: 2,
        backgroundColor: color,
        bottom: 5,
        right: 4,
        transform: [{ rotate: '45deg' }],
      }}
    />
  </View>
);

export const CloseIcon = ({ color }: IconProps) => (
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
