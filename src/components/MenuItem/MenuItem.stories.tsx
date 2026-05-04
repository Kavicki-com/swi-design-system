import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { MenuItem } from './MenuItem';
import { iconPaths } from '../../icons';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/MenuItem',
  component: MenuItem,
  args: {
    label: 'HOME',
    icon: 'home',
    active: false,
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    label: { control: 'text' },
    icon: { control: { type: 'select' }, options: Object.keys(iconPaths) },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    onPress: { action: 'press' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 280 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

const Caption = ({ children }: { children: string }) => (
  <Text
    style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: 11,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: '#9F9F9F',
    }}
  >
    {children}
  </Text>
);

export const Playground: Story = {};

export const Default: Story = {};

export const Active: Story = { args: { active: true } };

export const Disabled: Story = { args: { disabled: true } };

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [(StoryComp) => <View style={{ width: 400 }}><StoryComp /></View>],
};

export const Overview: Story = {
  name: 'Overview — all states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Caption>default — hover to see hover state</Caption>
        <MenuItem label="HOME" icon="home" />
      </View>
      <View style={{ gap: 8 }}>
        <Caption>active</Caption>
        <MenuItem label="HOME" icon="home" active />
      </View>
      <View style={{ gap: 8 }}>
        <Caption>disabled</Caption>
        <MenuItem label="HOME" icon="home" disabled />
      </View>
    </View>
  ),
};

