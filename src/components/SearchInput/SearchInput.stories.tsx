import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { useArgs } from 'storybook/preview-api';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Core Components/SearchInput',
  component: SearchInput,
  args: {
    placeholder: 'input-text',
    value: '',
    disabled: false,
  },
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    onChangeText: { action: 'onChangeText' },
    onClear: { action: 'onClear' },
    onFocus: { action: 'onFocus' },
    onBlur: { action: 'onBlur' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 328 }}>
        <StoryComp />
      </View>
    ),
  ],
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <SearchInput
        {...args}
        onChangeText={(next) => {
          updateArgs({ value: next });
          args.onChangeText?.(next);
        }}
        onClear={() => {
          updateArgs({ value: '' });
          args.onClear?.();
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

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
  decorators: [
    (StoryComp) => (
      <View style={{ width: 360 }}>
        <StoryComp />
      </View>
    ),
  ],
  render: () => (
    <View style={{ flexDirection: 'column', gap: 24 }}>
      <Group caption="default (empty)">
        <SearchInput />
      </Group>
      <Group caption="filled">
        <SearchInput defaultValue="input-text" />
      </Group>
      <Group caption="disabled">
        <SearchInput disabled />
      </Group>
    </View>
  ),
};

export const Playground: Story = {};

export const Filled: Story = { args: { value: 'input-text' } };
export const Disabled: Story = { args: { disabled: true } };
