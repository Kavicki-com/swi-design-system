import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  args: {
    label: 'Filtro',
    state: 'default',
  },
  argTypes: {
    label: { control: 'text' },
    state: { control: 'radio', options: ['default', 'active', 'disable'] },
    onPress: { action: 'onPress' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

const Group = ({ caption, children }: { caption: string; children: React.ReactNode }) => (
  <View style={{ flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
    <Text
      style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 11,
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: '#9F9F9F',
      }}
    >
      {caption}
    </Text>
    {children}
  </View>
);

export const Overview: Story = {
  name: 'Overview — all variations',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <Group caption="states">
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Chip label="Filtro" state="default" />
        <Chip label="Filtro" state="active" />
        <Chip label="Filtro" state="disable" />
      </View>
    </Group>
  ),
};

export const Playground: Story = {};

export const Default: Story = {};
export const Active: Story = { args: { state: 'active' } };
export const Disabled: Story = { args: { state: 'disable' } };
