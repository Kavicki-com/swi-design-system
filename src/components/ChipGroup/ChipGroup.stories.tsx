import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';
import { ChipGroup } from './ChipGroup';

const meta: Meta<typeof ChipGroup> = {
  title: 'Components/ChipGroup',
  component: ChipGroup,
  args: {
    options: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    mode: 'single',
  },
  argTypes: {
    mode: { control: 'radio', options: ['single', 'multiple'] },
    maxSelections: { control: 'number' },
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

const SectionTitle = ({ children }: { children: string }) => (
  <Text
    style={{
      fontFamily: 'Montserrat, system-ui, sans-serif',
      fontSize: 24,
      fontWeight: '700',
      color: '#F5F5F5',
      marginBottom: 16,
    }}
  >
    {children}
  </Text>
);

const Caption = ({ children }: { children: string }) => (
  <Text
    style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: 12,
      color: '#9F9F9F',
      marginBottom: 12,
    }}
  >
    {children}
  </Text>
);

export const Default: Story = {
  render: (args) => (
    <View style={{ gap: 40, padding: 20 }}>
      <View>
        <SectionTitle>Playground</SectionTitle>
        <View style={{ width: 328 }}>
          <ChipGroup {...args} />
        </View>
      </View>

      <View style={{ height: 1, backgroundColor: '#3F3F3F' }} />

      <View>
        <SectionTitle>Modes Showcase</SectionTitle>
        <View style={{ gap: 24, width: 328 }}>
          <View>
            <Caption>Single Select (Radio behavior)</Caption>
            <ChipGroup
              options={['Label 1', 'Label 2', 'Label 3', 'Label 4']}
              mode="single"
              initialValue="Label 1"
            />
          </View>

          <View>
            <Caption>Multiple Select (Checkbox behavior)</Caption>
            <ChipGroup
              options={['Label 1', 'Label 2', 'Label 3', 'Label 4']}
              mode="multiple"
              initialValue={['Label 1', 'Label 3']}
            />
          </View>

          <View>
            <Caption>Multiple Select (Max 2 Allowed)</Caption>
            <ChipGroup
              options={['Label 1', 'Label 2', 'Label 3', 'Label 4']}
              mode="multiple"
              maxSelections={2}
            />
          </View>
        </View>
      </View>
    </View>
  ),
};
