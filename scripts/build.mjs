/**
 * Build script — wraps the card source with a licence banner into the single
 * distributable file HACS serves. The card is dependency-free (waves and the
 * liquid are pure CSS), so there are no vendors to bundle.
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
 */
`;

const out = banner + cardSource;

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist/zendure-dashboard-card.js"), out);
console.log(`dist/zendure-dashboard-card.js written (v${version}, ${(out.length / 1024).toFixed(1)} KiB)`);
