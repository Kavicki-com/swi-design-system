import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from './Icon';
import { iconPaths } from '../../icons';

const meta: Meta<typeof Icon> = {
  title: 'Core Components/Icon',
  component: Icon,
  args: { name: 'add_a_photo', size: 24, color: '#62bb81' },
  argTypes: {
    name: { control: { type: 'select' }, options: Object.keys(iconPaths) },
    size: { control: { type: 'range', min: 12, max: 96, step: 4 } },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const All: Story = {
  name: 'All registered icons',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'row', gap: 32, flexWrap: 'wrap' }}>
      {(Object.keys(iconPaths) as Array<keyof typeof iconPaths>).map((name) => (
        <View key={name} style={{ alignItems: 'center', gap: 6 }}>
          <Icon name={name} size={32} color="#62bb81" />
          <Text style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 11, color: '#9F9F9F' }}>
            {name}
          </Text>
        </View>
      ))}
    </View>
  ),
};
