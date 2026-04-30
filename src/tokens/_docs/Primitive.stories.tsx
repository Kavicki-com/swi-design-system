import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { primitive } from '../primitive';

const meta: Meta = {
  title: 'Tokens/Primitive',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;

type Story = StoryObj;

const wrapStyle: React.CSSProperties = {
  padding: 24,
  fontFamily: 'Inter, system-ui, sans-serif',
  color: '#F5F5F5',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: 14,
  textTransform: 'uppercase',
  letterSpacing: 1,
  margin: '24px 0 12px',
  color: '#9F9F9F',
};

const swatchGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: 12,
};

const swatchCard = (bg: string): React.CSSProperties => ({
  background: bg,
  borderRadius: 8,
  padding: 12,
  minHeight: 88,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  border: '1px solid rgba(255,255,255,0.08)',
});

const swatchLabel: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  color: '#FFF',
  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
};

const swatchValue: React.CSSProperties = {
  fontSize: 11,
  color: 'rgba(255,255,255,0.85)',
  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
};

const ColorScale = ({ name, scale }: { name: string; scale: Record<string, string> }) => (
  <div>
    <h3 style={sectionTitleStyle}>{name}</h3>
    <div style={swatchGrid}>
      {Object.entries(scale).map(([step, hex]) => (
        <div key={step} style={swatchCard(hex)}>
          <span style={swatchLabel}>{name}/{step}</span>
          <span style={swatchValue}>{hex}</span>
        </div>
      ))}
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div style={wrapStyle}>
      <h2 style={{ marginTop: 0 }}>Primitive — Colors</h2>
      <p style={{ color: '#BFBFBF', maxWidth: 640 }}>
        Raw palette. Internal use only — components must consume semantic tokens, not these.
      </p>
      <ColorScale name="lime" scale={primitive.lime} />
      <ColorScale name="yellow" scale={primitive.yellow} />
      <ColorScale name="orange" scale={primitive.orange} />
      <ColorScale name="red" scale={primitive.red} />
      <ColorScale name="green" scale={primitive.green} />
      <ColorScale name="blue" scale={primitive.blue} />
      <ColorScale name="neutral" scale={primitive.neutral} />
    </div>
  ),
};

const sizeRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '8px 0',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
};

export const Sizes: Story = {
  render: () => (
    <div style={wrapStyle}>
      <h2 style={{ marginTop: 0 }}>Primitive — Sizes</h2>
      <p style={{ color: '#BFBFBF', maxWidth: 640 }}>
        Numeric scale used for spacing, radii, and border widths in semantic tokens.
      </p>
      <div>
        {Object.entries(primitive.size).map(([key, value]) => (
          <div key={key} style={sizeRow}>
            <span style={{ width: 80, fontWeight: 500 }}>size/{key}</span>
            <span style={{ width: 60, color: '#9F9F9F' }}>{value}px</span>
            <div
              style={{
                height: 16,
                width: value,
                background: '#62BB81',
                borderRadius: 2,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};
