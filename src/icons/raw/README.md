# Raw SVG icons

Drop project-specific SVG files here that aren't in Material Symbols.

## Conventions

- File name = icon name in `kebab-case.svg` (e.g. `swi-logo.svg`).
- Single root `<path>` is easiest. If the SVG has multiple paths, flatten them (combine `d` attributes) or convert to a single path in your editor before committing.
- The viewBox in the file is preserved — the registry stores it alongside the path so the `Icon` primitive scales correctly regardless of the source viewBox.

## Wiring it up

After dropping `<name>.svg` here:

1. Open the SVG and copy the `<path d="...">` value and the `viewBox="..."` attribute.
2. Add an entry to `src/icons/paths.ts`:

```ts
'<name>': {
  viewBox: '<viewBox from the file>',
  d: '<path data>',
},
```

3. The icon is now usable: `<Icon name="<name>" size={24} color={...} />`.

A future `scripts/generate-icons.ts` may automate steps 1–2 by reading every `*.svg` in this folder.
