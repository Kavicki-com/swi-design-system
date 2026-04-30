import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button';

const PlaceholderIcon = () => (
  <View
    style={{
      width: 14,
      height: 14,
      borderRadius: 2,
      backgroundColor: '#222222',
    }}
  />
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'button',
    variant: 'contained',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text', description: 'Button label' },
    variant: {
      control: 'radio',
      options: ['contained', 'outline', 'ghost'],
      description: 'Visual style',
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean', description: 'Stretch to fill the parent container' },
    iconLeft: { control: false, description: 'ReactNode rendered before the label' },
    iconRight: { control: false, description: 'ReactNode rendered after the label' },
    onPress: { action: 'onPress' },
    onLongPress: { action: 'onLongPress' },
    accessibilityLabel: { control: 'text' },
    accessibilityHint: { control: 'text' },
  },
  render: (args) => <Button {...args} />,
};

export default meta;
type Story = StoryObj<typeof Button>;

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

const VariantSection = ({
  title,
  variant,
}: {
  title: string;
  variant: 'contained' | 'outline' | 'ghost';
}) => (
  <View style={{ flexDirection: 'column', gap: 16 }}>
    <Text
      style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 13,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 4,
      }}
    >
      {title}
    </Text>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 24,
        alignItems: 'flex-start',
      }}
    >
      <Group caption="default">
        <Button label="button" variant={variant} onPress={() => {}} />
      </Group>
      <Group caption="icon left">
        <Button label="button" variant={variant} iconLeft={<PlaceholderIcon />} onPress={() => {}} />
      </Group>
      <Group caption="icon right">
        <Button label="button" variant={variant} iconRight={<PlaceholderIcon />} onPress={() => {}} />
      </Group>
      <Group caption="both icons">
        <Button
          label="button"
          variant={variant}
          iconLeft={<PlaceholderIcon />}
          iconRight={<PlaceholderIcon />}
          onPress={() => {}}
        />
      </Group>
      <Group caption="disabled">
        <Button label="button" variant={variant} disabled />
      </Group>
      <Group caption="full width">
        <View style={{ width: 280 }}>
          <Button label="button" variant={variant} fullWidth onPress={() => {}} />
        </View>
      </Group>
    </View>
  </View>
);

export const Overview: Story = {
  name: 'Overview — all variations',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <View style={{ flexDirection: 'column', gap: 32 }}>
      <VariantSection title="Contained" variant="contained" />
      <VariantSection title="Outline" variant="outline" />
      <VariantSection title="Ghost" variant="ghost" />
    </View>
  ),
};

export const Playground: Story = {};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const OutlineDisabled: Story = {
  args: { variant: 'outline', disabled: true },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const GhostDisabled: Story = {
  args: { variant: 'ghost', disabled: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 320 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithIconLeft: Story = {
  args: { iconLeft: <PlaceholderIcon /> },
};

export const WithIconRight: Story = {
  args: { iconRight: <PlaceholderIcon /> },
};

export const WithBothIcons: Story = {
  args: { iconLeft: <PlaceholderIcon />, iconRight: <PlaceholderIcon /> },
};
