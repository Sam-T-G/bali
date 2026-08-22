#!/usr/bin/env node
/**
 * Verifies every photo URL in src/data/images.ts still resolves.
 *
 * Run this locally (not in a restricted sandbox) before you share the deck:
 *   npm run check:images
 *
 * Any URL that fails should be replaced in src/data/images.ts. The site will
 * still render a gradient in its place, but a real photo is better.
 */

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const manifest = resolve(here, '../src/data/images.ts');

const source = await readFile(manifest, 'utf8');

// Pull the photo ids out of the u('photo-...') helper calls.
const ids = [...source.matchAll(/u\('(photo-[^']+)'/g)].map((m) => m[1]);
const keys = [...source.matchAll(/^  (\w+): \{$/gm)].map((m) => m[1]);

if (ids.length === 0) {
  console.error('No photo ids found — did the manifest format change?');
  process.exit(1);
}

const url = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=60`;

console.log(`Checking ${ids.length} photos…\n`);

const results = await Promise.all(
  ids.map(async (id, i) => {
    const label = keys[i] ?? id;
    try {
      const res = await fetch(url(id), { method: 'HEAD', redirect: 'follow' });
      return { label, id, ok: res.ok, status: res.status };
    } catch (err) {
      return { label, id, ok: false, status: err.code ?? 'network error' };
    }
  }),
);

let failed = 0;
for (const r of results) {
  if (r.ok) {
    console.log(`  ok    ${r.label.padEnd(16)} ${r.id}`);
  } else {
    failed += 1;
    console.log(`  FAIL  ${r.label.padEnd(16)} ${r.id}  (${r.status})`);
  }
}

console.log(
  `\n${results.length - failed}/${results.length} resolved.` +
    (failed
      ? `\n\n${failed} need replacing in src/data/images.ts.\n` +
        `Find a photo on unsplash.com, hit Download, and paste its photo-... id.\n` +
        `Until then those slots render their gradient fallback, which still looks fine.`
      : '\nAll good.'),
);

process.exit(failed > 0 ? 1 : 0);
