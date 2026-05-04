import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { CaloriesTag } from './CaloriesTag';

const meta: Meta<typeof CaloriesTag> = {
  title: 'Charts/CaloriesTag',
  component: CaloriesTag,
  args: { value: 32, unit: 'kcal' },
  argTypes: {
    value: { control: 'text' },
    unit: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CaloriesTag>;

export const Playground: Story = {};
export const Default: Story = {};

export const Overview: Story = {
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      <CaloriesTag value={22} />
      <CaloriesTag value={49} />
      <CaloriesTag value={62} />
      <CaloriesTag value={142} unit="kcal" />
    </View>
  ),
};
