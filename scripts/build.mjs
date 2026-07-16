/**
 * Build script — concatenates the bundled vendors and the card source
 * into the single distributable file HACS serves.
 *
 *   node scripts/build.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");

const cardSource = read("src/zendure-dashboard-card.js");
const version = (cardSource.match(/CARD_VERSION = "([^"]+)"/) || [])[1] || "0.0.0";

const banner = `/*!
 * Zendure Dashboard Card v${version}
 * https://github.com/zarzak12/zendure-dashboard-card — MIT License
 *
 * Bundles GSAP ${(read("vendor/gsap.min.js").match(/gsap[^\d]*(\d+\.\d+\.\d+)/) || [])[1] || "3.13.x"} + DrawSVGPlugin
 * (c) Webflow, Inc. — https://gsap.com/community/standard-license/
 */
`;

/**
 * GSAP's UMD header runs `(t = t || self).window = t.window || {}`.
 * In a classic <script> (sloppy mode) the illegal write to the getter-only
 * `window.window` fails SILENTLY — but Home Assistant loads Lovelace
 * resources as ES modules (strict mode), where it throws:
 *   TypeError: Cannot set property window of #<Window> which has only a getter
 * Fix: shadow `self` with a plain writable object whose `window` points to
 * the real window — the UMD assigns onto that object, then hands the real
 * window to the factory, so gsap/DrawSVGPlugin still land on window.*.
 */
const wrapVendor = (code) => `;(function (self) {
${code}
}).call(undefined, typeof window !== "undefined" ? { window: window } : { window: globalThis });
`;

const out =
  banner +
  wrapVendor(read("vendor/gsap.min.js")) +
  wrapVendor(read("vendor/DrawSVGPlugin.min.js")) +
  cardSource;

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist/zendure-dashboard-card.js"), out);
console.log(`dist/zendure-dashboard-card.js written (v${version}, ${(out.length / 1024).toFixed(1)} KiB)`);
