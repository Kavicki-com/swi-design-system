/**
 * Icon path registry.
 *
 * Two sources:
 *   1. Material Symbols (Google) — fetched from
 *      https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/<name>/materialsymbolsoutlined/<name>_24px.svg
 *      ViewBox: '0 -960 960 960'
 *   2. App-specific SVGs — raw files dropped in src/icons/raw/<name>.svg.
 *      Extract the inner <path d="..."> and the viewBox attribute, then register here.
 *
 * Consumed by the Icon primitive (src/components/Icon).
 */

export interface IconPath {
  d: string;
  viewBox: string;
}

const MATERIAL_VIEWBOX = '0 -960 960 960';

export const iconPaths = {
  add_a_photo: {
    viewBox: MATERIAL_VIEWBOX,
    d: 'M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z',
  },
  cloud_upload: {
    viewBox: MATERIAL_VIEWBOX,
    d: 'M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z',
  },
  close: {
    viewBox: MATERIAL_VIEWBOX,
    d: 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z',
  },
  keyboard_arrow_down: {
    viewBox: MATERIAL_VIEWBOX,
    d: 'M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z',
  },
  more_vert: {
    viewBox: MATERIAL_VIEWBOX,
    d: 'M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z',
  },
} as const satisfies Record<string, IconPath>;

export type IconName = keyof typeof iconPaths;
