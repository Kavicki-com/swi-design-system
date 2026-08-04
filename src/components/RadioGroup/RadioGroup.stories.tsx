import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useArgs } from 'storybook/preview-api';
import { RadioGroup } from './RadioGroup';

const OPTIONS = [
  { label: 'Sim', value: 'sim' },
  { label: 'Não', value: 'nao' },
];

const meta: Meta<typeof RadioGroup> = {
  title: 'Core Components/RadioGroup',
  component: RadioGroup,
  args: {
    label: 'Pessoa com deficiência?',
    options: OPTIONS,
    value: null,
    description: '',
    descriptionVariant: 'default',
    size: 'm',
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    descriptionVariant: {
      control: 'radio',
      options: ['default', 'success', 'error', 'warning'],
    },
    disabled: { control: 'boolean' },
    size: { control: 'radio', options: ['s', 'm'] },
    onChange: { action: 'onChange' },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <RadioGroup
        {...args}
        onChange={(next) => {
          updateArgs({ value: next });
          args.onChange?.(next);
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

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
    const Live = (props: Partial<React.ComponentProps<typeof RadioGroup>>) => {
      const [value, setValue] = useState<string | null>(null);
      return (
        <RadioGroup
          label="Pessoa com deficiência?"
          options={OPTIONS}
          value={value}
          onChange={setValue}
          {...props}
        />
      );
    };
    return (
      <View style={{ flexDirection: 'column', gap: 32, alignItems: 'flex-start' }}>
        <Group caption="pristine (sem legenda)">
          <Live />
        </Group>
        {/* O estado que motivou o componente: obrigatório em branco depois de
            tocar no CTA. Antes disto o par de Radio não tinha onde dizer isto. */}
        <Group caption="obrigatório em branco (error)">
          <Live description="Selecione uma opção" descriptionVariant="error" />
        </Group>
        <Group caption="com dica neutra">
          <Live description="Usado só para adequar o plano de resgate" />
        </Group>
        <Group caption="disabled (a legenda para de gritar)">
          <Live description="Selecione uma opção" descriptionVariant="error" disabled />
        </Group>
      </View>
    );
  },
};

export const Playground: Story = {};

export const Erro: Story = {
  args: { description: 'Selecione uma opção', descriptionVariant: 'error' },
};
export const Selecionado: Story = { args: { value: 'sim' } };
export const Small: Story = { args: { size: 's' } };
export const Disabled: Story = { args: { disabled: true, value: 'nao' } };
