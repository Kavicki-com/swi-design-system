import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { ImageViewer } from './ImageViewer';

const LANDSCAPE = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=60';

const meta: Meta<typeof ImageViewer> = {
  title: 'Core Components/ImageViewer',
  component: ImageViewer,
  args: {
    visible: true,
    uri: LANDSCAPE,
    title: 'inspecao-escavadeira-930E.jpg',
  },
  argTypes: {
    visible: { control: 'boolean' },
    uri: { control: 'text' },
    title: { control: 'text' },
    downloadLabel: { control: 'text' },
    errorLabel: { control: 'text' },
    onClose: { action: 'onClose' },
    onDownload: { action: 'onDownload' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Imagem em tamanho grande, no molde do Modal da biblioteca do Figma (461:10263). ' +
          'A imagem entra inteira no palco; o cartão vai até 960 de largura e encolhe com a ' +
          'janela. Esc, X e clique fora fecham. O Baixar só aparece com `onDownload`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageViewer>;

export const Default: Story = {
  name: 'Com Baixar',
};

// O argType de ação injetaria um onDownload; o render o tira de propósito.
export const WithoutDownload: Story = {
  name: 'Sem Baixar',
  render: (args) => <ImageViewer {...args} onDownload={undefined} />,
};

export const LoadError: Story = {
  name: 'Imagem que não carrega',
  args: { uri: 'https://invalid.example/nao-existe.jpg', title: 'foto-apagada.jpg' },
};

export const Mobile: Story = {
  name: 'Tela estreita',
  parameters: { viewport: { defaultViewport: 'iphone14' } },
};

function OpenOnPress() {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ alignItems: 'flex-start' }}>
      <Button label="Visualizar imagem" variant="contained" onPress={() => setOpen(true)} />
      <ImageViewer
        visible={open}
        uri={LANDSCAPE}
        title="inspecao-escavadeira-930E.jpg"
        onClose={() => setOpen(false)}
        onDownload={() => setOpen(false)}
      />
    </View>
  );
}

export const Interactive: Story = {
  name: 'Abrir pelo botão',
  parameters: { controls: { disable: true } },
  render: () => <OpenOnPress />,
};
