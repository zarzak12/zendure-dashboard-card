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

const out =
  banner +
  read("vendor/gsap.min.js") +
  "\n;\n" +
  read("vendor/DrawSVGPlugin.min.js") +
  "\n;\n" +
  cardSource;

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist/zendure-dashboard-card.js"), out);
console.log(`dist/zendure-dashboard-card.js written (v${version}, ${(out.length / 1024).toFixed(1)} KiB)`);
