import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Carousel } from './Carousel';

const Card = ({ n }: { n: number }) => (
  <View
    style={{
      flex: 1,
      minHeight: 72,
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#1f1f1f',
      justifyContent: 'center',
    }}
  >
    <Text style={{ color: '#f5f5f5', fontWeight: '700' }}>Título {n}</Text>
    <Text style={{ color: '#9f9f9f' }}>Texto curto</Text>
  </View>
);

const meta: Meta<typeof Carousel> = {
  title: 'Core Components/Carousel',
  component: Carousel,
  args: {
    itemMinWidth: 240,
    gap: 12,
  },
  argTypes: {
    itemMinWidth: { control: { type: 'number', min: 80 } },
    gap: { control: { type: 'number', min: 0 } },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 720 }}>
        <StoryComp />
      </View>
    ),
  ],
  render: (args) => (
    <Carousel {...args}>
      {Array.from({ length: 8 }, (_, i) => (
        <Card key={i} n={i + 1} />
      ))}
    </Carousel>
  ),
};

export default meta;

type Story = StoryObj<typeof Carousel>;

/** Muitos itens: largura minima + rolagem lateral. */
export const Default: Story = {};

/** Poucos itens: cabem sem rolagem. */
export const FewItems: Story = {
  render: (args) => (
    <Carousel {...args}>
      {Array.from({ length: 2 }, (_, i) => (
        <Card key={i} n={i + 1} />
      ))}
    </Carousel>
  ),
};
