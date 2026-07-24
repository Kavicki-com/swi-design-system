import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// 0.1.118: o label do pino de localização era 'Open location' fixo — inglês
// hardcoded num produto pt-BR, sem prop de override (follow-up da fatia
// admin-tarefas). `locationAccessibilityLabel` entra com default no valor
// antigo (retrocompat). Node-level (padrão da casa): sem harness de render RN.
describe('ActivitiesOverviewCard — locationAccessibilityLabel', () => {
  const tsx = readFileSync(join(__dirname, 'ActivitiesOverviewCard.tsx'), 'utf8');
  const types = readFileSync(join(__dirname, 'ActivitiesOverviewCard.types.ts'), 'utf8');

  it('props declaram locationAccessibilityLabel opcional', () => {
    expect(types).toMatch(/locationAccessibilityLabel\?: string/);
  });

  it('o pino usa a prop com fallback no label antigo (retrocompat)', () => {
    expect(tsx).toMatch(/locationAccessibilityLabel \?\? 'Open location'/);
  });
});
