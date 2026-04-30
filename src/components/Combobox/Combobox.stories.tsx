import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { useArgs } from 'storybook/preview-api';
import { Combobox } from './Combobox';

const sampleOptions = [
  { label: 'option1', value: 'option1' },
  { label: 'option2', value: 'option2' },
  { label: 'option3', value: 'option3' },
];

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  args: {
    label: 'label',
    placeholder: 'input-text',
    description: '',
    value: undefined,
    open: false,
    options: sampleOptions,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
    options: { control: 'object' },
    onChange: { action: 'onChange' },
    onOpenChange: { action: 'onOpenChange' },
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
      <Combobox
        {...args}
        onChange={(next) => {
          updateArgs({ value: next });
          args.onChange?.(next);
        }}
        onOpenChange={(next) => {
          updateArgs({ open: next });
          args.onOpenChange?.(next);
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

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
    <View style={{ flexDirection: 'column', gap: 32 }}>
      <Group caption="closed">
        <Combobox label="label" placeholder="input-text" options={sampleOptions} description="description" />
      </Group>
      <Group caption="open (preview)">
        <Combobox
          label="label"
          placeholder="input-text"
          options={sampleOptions}
          description="description"
          open
        />
      </Group>
      <Group caption="with selection">
        <Combobox
          label="label"
          options={sampleOptions}
          value="option2"
          description="description"
        />
      </Group>
      <Group caption="disabled">
        <Combobox label="label" placeholder="input-text" options={sampleOptions} disabled />
      </Group>
    </View>
  ),
};

export const Playground: Story = {};

export const Open: Story = { args: { open: true } };
export const WithSelection: Story = { args: { value: 'option2' } };
export const WithDescription: Story = { args: { description: 'description' } };
export const Disabled: Story = { args: { disabled: true } };
