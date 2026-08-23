#!/usr/bin/env node
/**
 * Verifies every photo URL referenced in src/data/*.ts still resolves.
 * Handles both direct CDN URLs (images.unsplash.com/...) and photo-page
 * hotlinks (unsplash.com/photos/<slug> -> /download redirect).
 * Run locally before sharing: npm run check:images
 */
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const dataDir = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data');
const urls = new Set();
for (const f of await readdir(dataDir)) {
  if (!f.endsWith('.ts')) continue;
  const src = await readFile(resolve(dataDir, f), 'utf8');
  for (const m of src.matchAll(/https:\/\/unsplash\.com\/photos\/[^'"]+/g)) urls.add(m[0] + '/download?force=true&w=200');
  for (const m of src.matchAll(/https:\/\/images\.unsplash\.com\/[^'"?]+/g)) urls.add(m[0] + '?w=200&q=50');
}

console.log(`Checking ${urls.size} photo URLs...\n`);
let failed = 0;
await Promise.all([...urls].map(async (u) => {
  try {
    const res = await fetch(u, { method: 'HEAD', redirect: 'follow' });
    if (!res.ok) { failed++; console.log(`  FAIL ${res.status}  ${u}`); }
  } catch (e) { failed++; console.log(`  FAIL ${e.code ?? 'net'}  ${u}`); }
}));
console.log(failed ? `\n${failed} URL(s) need replacing — swap them in src/data/. Gradients cover failures meanwhile.` : 'All resolve.');
process.exit(failed ? 1 : 0);
