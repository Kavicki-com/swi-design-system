import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { semantic } from '../semantic';
import { typography } from '../typography';

const meta: Meta = {
  title: 'Tokens/Semantic',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

const wrap: React.CSSProperties = {
  padding: 24,
  fontFamily: 'Inter, system-ui, sans-serif',
  color: '#F5F5F5',
};

const sectionTitle: React.CSSProperties = {
  fontSize: 14,
  textTransform: 'uppercase',
  letterSpacing: 1,
  margin: '24px 0 12px',
  color: '#9F9F9F',
};

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: 12,
};

const colorCard = (bg: string): React.CSSProperties => ({
  background: bg,
  borderRadius: 8,
  padding: 12,
  minHeight: 96,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  border: '1px solid rgba(255,255,255,0.08)',
});

const colorLabel: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  color: '#FFF',
  textShadow: '0 1px 2px rgba(0,0,0,0.6)',
};

const colorValue: React.CSSProperties = {
  fontSize: 11,
  color: 'rgba(255,255,255,0.85)',
  textShadow: '0 1px 2px rgba(0,0,0,0.6)',
  fontFamily: 'monospace',
};

const ColorGroup = ({
  prefix,
  group,
}: {
  prefix: string;
  group: Record<string, string>;
}) => (
  <div>
    <h3 style={sectionTitle}>{prefix}</h3>
    <div style={grid}>
      {Object.entries(group).map(([key, value]) => (
        <div key={key} style={colorCard(value)}>
          <span style={colorLabel}>
            {prefix}.{key}
          </span>
          <span style={colorValue}>{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div style={wrap}>
      <h2 style={{ marginTop: 0 }}>Semantic — Colors</h2>
      <p style={{ color: '#BFBFBF', maxWidth: 640 }}>
        Public color tokens. All components must consume from this layer.
      </p>
      <h3 style={sectionTitle}>background</h3>
      <div style={grid}>
        <div style={colorCard(semantic.background)}>
          <span style={colorLabel}>background</span>
          <span style={colorValue}>{semantic.background}</span>
        </div>
      </div>
      <ColorGroup prefix="surface" group={semantic.surface} />
      <ColorGroup prefix="content" group={semantic.content} />
    </div>
  ),
};

const scaleRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '8px 0',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
};

const ScaleGroup = ({
  prefix,
  scale,
  swatchColor = '#62BB81',
}: {
  prefix: string;
  scale: Record<string, number>;
  swatchColor?: string;
}) => (
  <div>
    <h3 style={sectionTitle}>{prefix}</h3>
    {Object.entries(scale).map(([key, value]) => (
      <div key={key} style={scaleRow}>
        <span style={{ width: 140, fontWeight: 500 }}>
          {prefix}.{key}
        </span>
        <span style={{ width: 60, color: '#9F9F9F' }}>{value}px</span>
        <div
          style={{
            height: 16,
            width: value || 1,
            background: swatchColor,
            borderRadius: 2,
            opacity: value === 0 ? 0.2 : 1,
          }}
        />
      </div>
    ))}
  </div>
);

export const Spacing: Story = {
  render: () => (
    <div style={wrap}>
      <h2 style={{ marginTop: 0 }}>Semantic — Spacing &amp; Layout</h2>
      <ScaleGroup prefix="padding" scale={semantic.padding} />
      <ScaleGroup prefix="gap" scale={semantic.gap} />
      <ScaleGroup prefix="margin" scale={semantic.margin} />
    </div>
  ),
};

export const Borders: Story = {
  render: () => (
    <div style={wrap}>
      <h2 style={{ marginTop: 0 }}>Semantic — Borders</h2>
      <ScaleGroup prefix="border.size" scale={semantic.border.size} swatchColor="#9F9F9F" />
      <h3 style={sectionTitle}>border.radius</h3>
      <div style={grid}>
        {Object.entries(semantic.border.radius).map(([key, value]) => (
          <div
            key={key}
            style={{
              background: '#1F1F1F',
              border: '1px solid #303030',
              borderRadius: value,
              padding: 16,
              minHeight: 80,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <span style={colorLabel}>border.radius.{key}</span>
            <span style={colorValue}>{value}px</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

const fontWeightToCss = (w: string) => w;

export const Typography: Story = {
  render: () => (
    <div style={wrap}>
      <h2 style={{ marginTop: 0 }}>Typography</h2>
      <p style={{ color: '#BFBFBF', maxWidth: 640 }}>
        Composite text styles. Use via <code>{'<Text variant="title.l" />'}</code> when the Text
        component lands.
      </p>
      {Object.entries(typography).map(([group, variants]) => (
        <div key={group}>
          <h3 style={sectionTitle}>{group}</h3>
          {Object.entries(variants).map(([key, style]) => (
            <div key={key} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 11, color: '#9F9F9F', marginBottom: 4, fontFamily: 'monospace' }}>
                {group}.{key} — {style.fontFamily} {style.fontWeight} {style.fontSize}px
              </div>
              <div
                style={{
                  fontFamily: style.fontFamily,
                  fontWeight: fontWeightToCss(style.fontWeight as string) as React.CSSProperties['fontWeight'],
                  fontSize: style.fontSize,
                  color: '#F5F5F5',
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
