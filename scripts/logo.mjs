// Makes src/assets/logo.png: the site icon with its dark square background removed and trimmed to the artwork,
// so it sits cleanly on any background. Source: ../favicon/web-app-manifest-512x512.png
//   node scripts/logo.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const src = fileURLToPath(new URL('../../favicon/web-app-manifest-512x512.png', import.meta.url));
const out = fileURLToPath(new URL('../src/assets/logo.png', import.meta.url));
const BG = [2, 11, 24]; // #020b18, the icon's background

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
	const d = Math.hypot(data[i] - BG[0], data[i + 1] - BG[1], data[i + 2] - BG[2]);
	// Fully transparent near the background colour, fading in over anti-aliased edges.
	const a = Math.max(0, Math.min(1, (d - 12) / 60));
	data[i + 3] = Math.round(data[i + 3] * a);
}
await sharp(data, { raw: info }).trim({ threshold: 1 }).png().toFile(out);
const m = await sharp(out).metadata();
console.log(`Wrote src/assets/logo.png (${m.width}x${m.height})`);
