// Fortune Cookie for the Liquidated Trader — entry program (sharpened).
// A single fortune cookie message for a crypto trader who has just been
// liquidated. It has to sound like a real fortune and land as a joke on
// the loss — a laugh rather than a tear. The market took everything but
// the sense of humor. Spend it wisely.
// Gate: 1-160 chars and at most 20 words (15 words here).
// makefun anchor 6480748f20b4de423332e07b58d74384b790db0e round 34272782

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Fortune: your lucky numbers were your stop-loss, and you spent them all on one candle.";

const fortune = FORTUNE.trim();
const wordCount = fortune.split(/\s+/).length;
if (fortune.length < 1 || fortune.length > 160 || wordCount > 20) {
  throw new Error(`fortune must be 1-160 chars and <=20 words, got ${fortune.length} chars / ${wordCount} words`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
console.log(`fortune cracked open: ${fortune.length} chars, ${wordCount} words`);
