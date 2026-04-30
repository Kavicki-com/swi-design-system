import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useArgs } from 'storybook/preview-api';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'label',
    checked: false,
    size: 'm',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'radio', options: ['s', 'm'] },
    onChange: { action: 'onChange' },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <Checkbox
        {...args}
        onChange={(next) => {
          updateArgs({ checked: next });
          args.onChange?.(next);
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

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

const Pair = ({ size }: { size: 's' | 'm' }) => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  return (
    <View style={{ flexDirection: 'column', gap: 12 }}>
      <Checkbox label="label" size={size} checked={a} onChange={setA} />
      <Checkbox label="label" size={size} checked={b} onChange={setB} />
    </View>
  );
};

export const Overview: Story = {
  name: 'Overview — all variations',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <View style={{ flexDirection: 'row', gap: 48, alignItems: 'flex-start' }}>
      <Group caption="default (m)">
        <Pair size="m" />
      </Group>
      <Group caption="small (s)">
        <Pair size="s" />
      </Group>
    </View>
  ),
};

export const Playground: Story = {};

export const Checked: Story = { args: { checked: true } };
export const Small: Story = { args: { size: 's' } };
export const SmallChecked: Story = { args: { size: 's', checked: true } };
export const NoLabel: Story = { args: { label: undefined } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledChecked: Story = { args: { disabled: true, checked: true } };
