import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Parte 2 do weather fidelity (2026-07-24): o dashboard admin mostra slots
// noturnos com sol porque o WeatherIcon só tem ilustrações diurnas. A noite
// entra como dimensão ortogonal (`isNight`), não como novas condições — o
// enum WeatherCondition fica estável e cada condição ganha um par noturno:
//   sunny         → clear-night.png   (lua)
//   partly-cloudy → cloudly-night.png (nuvem + lua)
//   rainy         → rainy-night.png   (chuva com lua atrás)
// Testes são node-level (padrão da casa: web-bundler-compat, StatusChart.paths)
// porque o repo não tem harness de render RN.

const RAW = join(__dirname, '..', '..', 'icons', 'raw');
const NIGHT_ASSETS = ['clear-night.png', 'cloudly-night.png', 'rainy-night.png'];

describe('WeatherIcon night assets', () => {
  it.each(NIGHT_ASSETS)('%s existe em icons/raw e não é um stub vazio', (file) => {
    const path = join(RAW, file);
    expect(existsSync(path), `${file} ausente em src/icons/raw`).toBe(true);
    // Ilustração real tem alguns KB; um stub/placeholder não.
    expect(statSync(path).size).toBeGreaterThan(1024);
  });
});

describe('WeatherIcon isNight', () => {
  const iconSrc = readFileSync(join(__dirname, 'WeatherIcon.tsx'), 'utf8');
  const typesSrc = readFileSync(join(__dirname, 'WeatherIcon.types.ts'), 'utf8');

  it('WeatherIconProps declara isNight opcional', () => {
    expect(typesSrc).toMatch(/isNight\?: boolean/);
  });

  it('WeatherIcon importa os três assets noturnos', () => {
    for (const file of NIGHT_ASSETS) {
      expect(iconSrc, `WeatherIcon.tsx não importa ${file}`).toContain(file);
    }
  });

  it('WeatherIcon seleciona fonte noturna via isNight', () => {
    expect(iconSrc).toMatch(/isNight/);
    // Mapa noturno paralelo ao SOURCE_BY_CONDITION diurno.
    expect(iconSrc).toMatch(/NIGHT_SOURCE_BY_CONDITION/);
  });
});

describe('isNight propagado pela cadeia da timeline', () => {
  const entryTypes = readFileSync(
    join(__dirname, '..', 'WeatherTimelineEntry', 'WeatherTimelineEntry.types.ts'),
    'utf8',
  );
  const entrySrc = readFileSync(
    join(__dirname, '..', 'WeatherTimelineEntry', 'WeatherTimelineEntry.tsx'),
    'utf8',
  );
  const timelineTypes = readFileSync(
    join(__dirname, '..', 'WeatherTimeline', 'WeatherTimeline.types.ts'),
    'utf8',
  );
  const timelineSrc = readFileSync(
    join(__dirname, '..', 'WeatherTimeline', 'WeatherTimeline.tsx'),
    'utf8',
  );

  it('WeatherTimelineEntry aceita e repassa isNight', () => {
    expect(entryTypes).toMatch(/isNight\?: boolean/);
    expect(entrySrc).toMatch(/isNight=\{isNight\}/);
  });

  it('WeatherTimelineEvent aceita isNight e a timeline repassa', () => {
    expect(timelineTypes).toMatch(/isNight\?: boolean/);
    expect(timelineSrc).toMatch(/isNight=\{event\.isNight\}/);
  });
});
