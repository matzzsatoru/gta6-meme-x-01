// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme with make.fun's ghost
// mascot in the picture, posted from a public account with make.fun and
// the entrant's play code in its text. This program hands the post's
// address to the grader: it reads POST.json from the repository root
// and writes it out to the output directory, so the gate can read it.
//
// POST.json must name a real post before you submit; the starter's
// placeholder address is refused on purpose.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

// Read first, so a bad POST.json fails here with a clear message
// instead of surfacing as a missing output file later.
const raw = readFileSync(source, 'utf8');
let post;
try {
  post = JSON.parse(raw);
} catch {
  console.error(`POST.json in ${BOT_DIR} is not valid JSON.`);
  process.exit(1);
}

if (typeof post.url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/\w+\/status\/\d+$/.test(post.url)) {
  console.error(`POST.json does not name an X post URL (got: ${String(post.url)}).`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);

if (!existsSync(target)) {
  console.error(`POST.json could not be written to ${OUTPUT_DIR}.`);
  process.exit(1);
}
console.log(`POST.json handed in: ${post.url}`);
