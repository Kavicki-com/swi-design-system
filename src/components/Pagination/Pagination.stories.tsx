import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { useArgs } from 'storybook/preview-api';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Core Components/Pagination',
  component: Pagination,
  args: {
    currentPage: 1,
    pageCount: 4,
    maxButtons: 4,
  },
  argTypes: {
    currentPage: { control: { type: 'number', min: 1 } },
    pageCount: { control: { type: 'number', min: 1 } },
    maxButtons: { control: { type: 'number', min: 1 } },
    onPageChange: { action: 'onPageChange' },
    onOverflowPress: { action: 'onOverflowPress' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 420 }}>
        <StoryComp />
      </View>
    ),
  ],
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <Pagination
        {...args}
        onPageChange={(page) => {
          args.onPageChange?.(page);
          updateArgs({ currentPage: page });
        }}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

/** Lista curta: todas as paginas cabem, sem "...". */
export const Default: Story = {};

/** Lista longa: janela de 4 numeros + "..." + avancar. Pagina atual em verde. */
export const ManyPages: Story = {
  args: { currentPage: 1, pageCount: 49 },
};

/** Meio da lista longa: a janela desliza e a atual fica destacada. */
export const Middle: Story = {
  args: { currentPage: 7, pageCount: 49 },
};

/** Ultima pagina: o chevron de avancar fica desabilitado e o "..." some. */
export const LastPage: Story = {
  args: { currentPage: 49, pageCount: 49 },
};

/** Uma pagina so: a tira nao aparece (render vazio). */
export const SinglePage: Story = {
  args: { currentPage: 1, pageCount: 1 },
};
