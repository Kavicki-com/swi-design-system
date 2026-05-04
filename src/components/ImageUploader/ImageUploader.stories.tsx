import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ImageUploader } from './ImageUploader';

const SAMPLE_IMAGE =
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop';

const meta: Meta<typeof ImageUploader> = {
  title: 'Core Components/ImageUploader',
  component: ImageUploader,
  args: {
    helperText: 'Selecione arquivos do tipo: JPG ou PNG',
    takePhotoLabel: 'Tirar Foto',
    pickFileLabel: 'Enviar arquivo',
    showTakePhoto: true,
    disabled: false,
  },
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    helperText: { control: 'text' },
    takePhotoLabel: { control: 'text' },
    pickFileLabel: { control: 'text' },
    showTakePhoto: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onTakePhoto: { action: 'takePhoto' },
    onPickFile: { action: 'pickFile' },
    onRemove: { action: 'remove' },
  },
  decorators: [
    (StoryComp) => (
      <View style={{ width: 328 }}>
        <StoryComp />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ImageUploader>;

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
  name: 'Overview — all states',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  decorators: [
    (StoryComp) => (
      <View style={{ flexDirection: 'row', gap: 24, flexWrap: 'wrap' }}>
        <StoryComp />
      </View>
    ),
  ],
  render: () => (
    <>
      <Group caption="default">
        <View style={{ width: 328 }}>
          <ImageUploader />
        </View>
      </Group>
      <Group caption="uploading (60%)">
        <View style={{ width: 328 }}>
          <ImageUploader progress={60} />
        </View>
      </Group>
      <Group caption="uploaded">
        <View style={{ width: 328 }}>
          <ImageUploader value={{ uri: SAMPLE_IMAGE }} onRemove={() => {}} />
        </View>
      </Group>
      <Group caption="disabled">
        <View style={{ width: 328 }}>
          <ImageUploader disabled />
        </View>
      </Group>
      <Group caption="web — no take photo">
        <View style={{ width: 328 }}>
          <ImageUploader showTakePhoto={false} />
        </View>
      </Group>
    </>
  ),
};

export const Playground: Story = {};

export const Default: Story = {};

export const Uploading: Story = {
  args: { progress: 60 },
};

export const Uploaded: Story = {
  args: { value: { uri: SAMPLE_IMAGE } },
};

export const WebOnly: Story = {
  name: 'Web — no Take Photo',
  args: { showTakePhoto: false },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Interactive: Story = {
  name: 'Interactive — pick / progress / remove',
  parameters: { controls: { disable: true }, actions: { disable: true } },
  render: () => {
    const [value, setValue] = useState<{ uri: string } | null>(null);
    const [progress, setProgress] = useState<number | undefined>(undefined);

    const fakePick = () => {
      setProgress(0);
      let p = 0;
      const id = setInterval(() => {
        p += 10;
        if (p >= 100) {
          clearInterval(id);
          setProgress(undefined);
          setValue({ uri: SAMPLE_IMAGE });
        } else {
          setProgress(p);
        }
      }, 200);
    };

    return (
      <ImageUploader
        value={value}
        progress={progress}
        onTakePhoto={fakePick}
        onPickFile={fakePick}
        onRemove={() => setValue(null)}
      />
    );
  },
};
