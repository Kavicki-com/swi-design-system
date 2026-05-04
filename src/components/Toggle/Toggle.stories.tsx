import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Core Components/Toggle',
  component: Toggle,
  args: {
    defaultValue: false,
    disabled: false,
    leftLabel: '',
    rightLabel: '',
  },
  argTypes: {
    defaultValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leftLabel: { control: 'text' },
    rightLabel: { control: 'text' },
    onChange: { action: 'change' },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

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

export const Off: Story = { args: { defaultValue: false } };
export const On: Story = { args: { defaultValue: true } };
export const DisabledOff: Story = { args: { defaultValue: false, disabled: true } };
export const DisabledOn: Story = { args: { defaultValue: true, disabled: true } };

export const WithLabels: Story = {
  args: { leftLabel: 'Off', rightLabel: 'On' },
};

export const LeftLabelOnly: Story = {
  args: { leftLabel: 'Disabled', defaultValue: false },
};

export const RightLabelOnly: Story = {
  args: { rightLabel: 'Active', defaultValue: true },
};

export const Controlled: Story = {
  name: 'Controlled (value + onChange)',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <View style={{ gap: 12, alignItems: 'flex-start' }}>
        <Caption>{`current: ${value}`}</Caption>
        <Toggle value={value} onChange={setValue} />
      </View>
    );
  },
};

export const Overview: Story = {
  name: 'Overview — all states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ gap: 16, alignItems: 'flex-start' }}>
      <View style={{ gap: 6 }}>
        <Caption>off</Caption>
        <Toggle defaultValue={false} />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>on</Caption>
        <Toggle defaultValue />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>disabled — off</Caption>
        <Toggle defaultValue={false} disabled />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>disabled — on</Caption>
        <Toggle defaultValue disabled />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>with labels — off</Caption>
        <Toggle defaultValue={false} leftLabel="Off" rightLabel="On" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>with labels — on</Caption>
        <Toggle defaultValue leftLabel="Off" rightLabel="On" />
      </View>
      <View style={{ gap: 6 }}>
        <Caption>with labels — disabled</Caption>
        <Toggle defaultValue leftLabel="Off" rightLabel="On" disabled />
      </View>
    </View>
  ),
};
