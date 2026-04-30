/**
 * Generates src/tokens/{primitive,semantic,typography,effects}.ts from
 * references/figma-variables.json.
 *
 * Run with: npm run tokens:generate
 *
 * The generated files are committed; this script is the authoritative
 * transformation. Hand-edits to those files will be overwritten.
 *
 * NOTE: Phase 0 ships hand-curated outputs that match the Figma export
 * shape. This script is the next deliverable — it should:
 *   1. Parse references/figma-variables.json
 *   2. For collection ".primitive": flatten all paths a/b → primitive.a.b
 *   3. For collection "tokens": resolve isAlias references into primitive
 *      values, then group by the slash prefix (surface, content, ...).
 *      Convert "2xl" → "xxl" in TS keys. Strip slashes, camelCase the rest.
 *   4. For collection "Typography": map fontWeight strings → RN numerics.
 *   5. For collection "Effects": fan out into Platform.select blocks.
 *
 * Each generated file should start with the "GENERATED FILE — do not edit"
 * banner that the existing files use.
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(__dirname, '..');
const SOURCE = resolve(ROOT, 'references/figma-variables.json');

interface FigmaVariable {
  name: string;
  type: string;
  isAlias: boolean;
  value: unknown;
}

interface FigmaCollection {
  name: string;
  modes: { name: string; variables: FigmaVariable[] }[];
}

interface FigmaExport {
  version: string;
  collections: FigmaCollection[];
}

function load(): FigmaExport {
  return JSON.parse(readFileSync(SOURCE, 'utf-8')) as FigmaExport;
}

function main() {
  const data = load();
  console.log(`Loaded ${data.collections.length} collections from ${SOURCE}`);
  for (const c of data.collections) {
    const vars = c.modes[0]?.variables ?? [];
    console.log(`  ${c.name}: ${vars.length} variables`);
  }
  console.log('\nGenerator stub — implement the four emitters next.');
  console.log('See src/tokens/*.ts for the target output shape.');
}

main();
