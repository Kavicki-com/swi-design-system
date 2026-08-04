import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { useArgs } from 'storybook/preview-api';
import { Input } from './Input';

const PlaceholderIcon = () => (
  <View style={{ width: 14, height: 14, borderRadius: 2, backgroundColor: '#9F9F9F' }} />
);

const meta: Meta<typeof Input> = {
  title: 'Core Components/Input',
  component: Input,
  args: {
    label: 'label',
    placeholder: 'input-text',
    description: '',
    value: '',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    iconRight: { control: false, description: 'ReactNode shown at the end of the input' },
    onChangeText: { action: 'onChangeText' },
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
      <Input
        {...args}
        onChangeText={(next) => {
          updateArgs({ value: next });
          args.onChangeText?.(next);
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

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
      <Group caption="default">
        <Input label="label" placeholder="input-text" />
      </Group>
      <Group caption="filled">
        <Input label="label" defaultValue="input-text" />
      </Group>
      <Group caption="with description">
        <Input label="label" defaultValue="input-text" description="description" />
      </Group>
      <Group caption="with trailing icon">
        <Input label="label" defaultValue="input-text" iconRight={<PlaceholderIcon />} />
      </Group>
      <Group caption="with counter (needs maxLength)">
        <Input label="label" defaultValue="input-text" maxLength={240} counter />
      </Group>
      <Group caption="description + counter share the bottom row">
        <Input
          label="label"
          defaultValue="input-text"
          description="description"
          maxLength={240}
          counter
        />
      </Group>
      <Group caption="no label">
        <Input placeholder="input-text" />
      </Group>
      <Group caption="disabled">
        <Input label="label" defaultValue="input-text" description="description" disabled />
      </Group>
    </View>
  ),
};

export const Playground: Story = {};

export const Filled: Story = { args: { value: 'input-text' } };
export const WithDescription: Story = {
  args: { value: 'input-text', description: 'description' },
};
export const WithIcon: Story = {
  args: { value: 'input-text', iconRight: <PlaceholderIcon /> },
};
export const NoLabel: Story = { args: { label: undefined, placeholder: 'input-text' } };
export const WithCounter: Story = {
  args: { value: 'input-text', maxLength: 240, counter: true },
};
export const Disabled: Story = {
  args: { value: 'input-text', description: 'description', disabled: true },
};
