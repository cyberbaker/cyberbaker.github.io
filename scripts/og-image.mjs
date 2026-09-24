// Generates public/og-default.png, the link-preview card used when a post has no image of its own.
//   node scripts/og-image.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const title = 'The Cyber Baker';
const tagline = 'For defenders, and the people they defend.';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><radialGradient id="g" cx="0.9" cy="0" r="0.9"><stop offset="0" stop-color="#0b7f89" stop-opacity="0.55"/><stop offset="1" stop-color="#0b7f89" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#10263b"/><rect width="1200" height="630" fill="url(#g)"/>
  <rect y="606" width="1200" height="24" fill="#0b7f89"/>
  <text x="350" y="285" font-family="IBM Plex Sans, Segoe UI, Arial, sans-serif" font-size="76" font-weight="700" fill="#ffffff">${title}</text>
  <text x="352" y="350" font-family="IBM Plex Sans, Segoe UI, Arial, sans-serif" font-size="34" fill="#c9d6e2">${tagline}</text>
  <text x="352" y="440" font-family="IBM Plex Sans, Segoe UI, Arial, sans-serif" font-size="26" font-weight="600" fill="#ffbf47" letter-spacing="3">EVERYDAY SECURITY  ·  DEEP DIVES</text>
</svg>`;

const logo = await sharp(fileURLToPath(new URL('../src/assets/logo.png', import.meta.url))).resize({ height: 300 }).toBuffer();
await sharp(Buffer.from(svg)).composite([{ input: logo, left: 55, top: 165 }]).png().toFile(new URL('../public/og-default.png', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));
console.log('Wrote public/og-default.png');
