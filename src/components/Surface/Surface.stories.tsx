import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../Text';
import { Title } from '../Title';
import { Surface } from './Surface';

const meta: Meta<typeof Surface> = {
  title: 'Core Components/Surface',
  component: Surface,
  args: {
    variant: 'standard',
    padding: 'm',
    radius: 'm',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'standard',
        'medium',
        'high',
        'grey',
        'disable',
        'primary',
        'primaryLight',
        'secondary',
        'secondaryLight',
        'accent',
        'error',
        'errorLight',
        'errorExtraLight',
        'success',
        'successLight',
        'successExtraLight',
        'warning',
        'warningLight',
        'warningExtraLight',
        'info',
        'infoLight',
        'infoExtraLight',
      ],
    },
    padding: {
      control: 'radio',
      options: ['empty', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl'],
    },
    radius: {
      control: 'radio',
      options: ['xs', 's', 'm', 'l', 'pill'],
    },
  },
  render: (args) => (
    <View style={{ width: 320 }}>
      <Surface {...args}>
        <Title variant="title.s">Surface</Title>
        <Text variant="body.m" style={{ marginTop: 8 }}>
          A themed background container with padding + radius from the design tokens.
        </Text>
      </Surface>
    </View>
  ),
};

export default meta;
type Story = StoryObj<typeof Surface>;

export const Overview: Story = {
  name: 'Overview — common variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <View style={{ flexDirection: 'column', gap: 12, width: 360 }}>
      {(['standard', 'medium', 'high', 'primaryLight', 'errorLight', 'infoLight'] as const).map(
        (variant) => (
          <Surface key={variant} variant={variant}>
            <Text variant="body.m">surface.{variant}</Text>
          </Surface>
        ),
      )}
    </View>
  ),
};

export const Playground: Story = {};
export const Standard: Story = { args: { variant: 'standard' } };
export const Medium: Story = { args: { variant: 'medium' } };
export const High: Story = { args: { variant: 'high' } };
export const Primary: Story = { args: { variant: 'primary' } };
export const PrimaryLight: Story = { args: { variant: 'primaryLight' } };
