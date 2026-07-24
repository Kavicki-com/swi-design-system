import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// 0.1.118: mesmo caso do ActivitiesOverviewCard — 'Open location' fixo no pino
// do donut (KPIs do dashboard), sem override. Prop com default retrocompat.
describe('DonutChart — locationAccessibilityLabel', () => {
  const tsx = readFileSync(join(__dirname, 'DonutChart.tsx'), 'utf8');
  const types = readFileSync(join(__dirname, 'DonutChart.types.ts'), 'utf8');

  it('props declaram locationAccessibilityLabel opcional', () => {
    expect(types).toMatch(/locationAccessibilityLabel\?: string/);
  });

  it('o pino usa a prop com fallback no label antigo (retrocompat)', () => {
    expect(tsx).toMatch(/locationAccessibilityLabel \?\? 'Open location'/);
  });
});
