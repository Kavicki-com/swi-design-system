import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { MediaPlayer } from './MediaPlayer';

// Mídias de exemplo CC0 da MDN (as mesmas dos exemplos de <video>/<audio>).
const VIDEO = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const AUDIO = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3';

const meta: Meta<typeof MediaPlayer> = {
  title: 'Components/MediaPlayer',
  component: MediaPlayer,
  args: { kind: 'video', uri: VIDEO, title: 'Vídeo 1' },
  argTypes: {
    kind: { control: 'radio', options: ['video', 'audio'] },
    uri: { control: 'text' },
    title: { control: 'text' },
    openLabel: { control: 'text' },
    errorLabel: { control: 'text' },
    onOpenExternal: { action: 'onOpenExternal' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Player de anexo de vídeo ou áudio, no cartão da linha do AttachmentList. Na web ' +
          'usa o player do próprio navegador. No app não há player embutido: o cartão mostra ' +
          'o tipo e o nome, e o botão Reproduzir entrega ao host a abertura do arquivo (no ' +
          'SWI, o navegador interno). Este Storybook web mostra só a versão web; a nativa ' +
          'se valida no Storybook do aparelho.',
      },
    },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 640, maxWidth: '100%' }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MediaPlayer>;

export const Video: Story = { name: 'Vídeo' };

export const Audio: Story = {
  name: 'Áudio',
  args: { kind: 'audio', uri: AUDIO, title: 'Áudio 1' },
};

// Arquivo que o navegador não toca: a frase entra no lugar do player.
export const Failure: Story = {
  name: 'Falha ao reproduzir',
  args: { uri: 'https://example.invalid/sem-arquivo.mp4', title: 'Vídeo 2' },
};

export const Mobile: Story = {
  name: 'Vídeo no celular',
  parameters: { viewport: { defaultViewport: 'iphone14' } },
};
