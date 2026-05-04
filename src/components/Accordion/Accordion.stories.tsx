import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { Accordion } from './Accordion';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const meta: Meta<typeof Accordion> = {
  title: 'Core Components/Accordion',
  component: Accordion,
  args: {
    title: 'Accordion',
    children: LOREM,
    defaultOpen: true,
    showIconLeft: true,
    showIconRight: true,
    fullWidth: true,
    disabled: false,
  },
  argTypes: {
    title: { control: 'text' },
    defaultOpen: { control: 'boolean' },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onOpenChange: { action: 'openChange' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 600 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

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

export const Overview: Story = {
  name: 'Overview — all states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  decorators: [(StoryComp) => <View style={{ flexDirection: 'row', gap: 24, flexWrap: 'wrap' }}><StoryComp /></View>],
  render: () => (
    <>
      <View style={{ width: 240, gap: 8 }}>
        <Caption>open</Caption>
        <Accordion title="Accordion" defaultOpen fullWidth>{LOREM}</Accordion>
      </View>
      <View style={{ width: 240, gap: 8 }}>
        <Caption>closed</Caption>
        <Accordion title="Accordion" fullWidth>{LOREM}</Accordion>
      </View>
      <View style={{ width: 240, gap: 8 }}>
        <Caption>no left chevron</Caption>
        <Accordion title="Accordion" showIconLeft={false} defaultOpen fullWidth>{LOREM}</Accordion>
      </View>
      <View style={{ width: 240, gap: 8 }}>
        <Caption>no right chevron</Caption>
        <Accordion title="Accordion" showIconRight={false} defaultOpen fullWidth>{LOREM}</Accordion>
      </View>
      <View style={{ width: 240, gap: 8 }}>
        <Caption>disabled</Caption>
        <Accordion title="Accordion" disabled defaultOpen fullWidth>{LOREM}</Accordion>
      </View>
    </>
  ),
};

export const Playground: Story = {};

export const Open: Story = { args: { defaultOpen: true } };
export const Closed: Story = { args: { defaultOpen: false } };
export const NoLeftChevron: Story = { args: { showIconLeft: false } };
export const NoRightChevron: Story = { args: { showIconRight: false } };
export const Disabled: Story = { args: { disabled: true } };

export const Group: Story = {
  name: 'Group of accordions',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => (
    <View style={{ width: 240, gap: 8 }}>
      <Accordion title="Section one" fullWidth>{LOREM}</Accordion>
      <Accordion title="Section two" defaultOpen fullWidth>{LOREM}</Accordion>
      <Accordion title="Section three" fullWidth>{LOREM}</Accordion>
    </View>
  ),
};
