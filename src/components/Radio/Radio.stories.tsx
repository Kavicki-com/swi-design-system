import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useArgs } from 'storybook/preview-api';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Core Components/Radio',
  component: Radio,
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
      <Radio
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
type Story = StoryObj<typeof Radio>;

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
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const Section = ({ size }: { size: 's' | 'm' }) => {
      const [picked, setPicked] = useState<'a' | 'b'>('b');
      return (
        <View style={{ flexDirection: 'column', gap: 12 }}>
          <Radio
            label="label"
            size={size}
            checked={picked === 'a'}
            onChange={() => setPicked('a')}
          />
          <Radio
            label="label"
            size={size}
            checked={picked === 'b'}
            onChange={() => setPicked('b')}
          />
        </View>
      );
    };
    return (
      <View style={{ flexDirection: 'row', gap: 48, alignItems: 'flex-start' }}>
        <Group caption="default (m)">
          <Section size="m" />
        </Group>
        <Group caption="small (s)">
          <Section size="s" />
        </Group>
      </View>
    );
  },
};

export const Playground: Story = {};

export const Checked: Story = { args: { checked: true } };
export const Small: Story = { args: { size: 's' } };
export const SmallChecked: Story = { args: { size: 's', checked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledChecked: Story = { args: { disabled: true, checked: true } };
