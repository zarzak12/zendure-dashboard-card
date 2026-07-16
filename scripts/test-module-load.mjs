/**
 * Regression test — loads dist/ exactly like Home Assistant does:
 * as a strict-mode ES module, in an environment where `window.window`
 * is a getter-only property (like every real browser).
 *
 * Catches the classic UMD crash:
 *   TypeError: Cannot set property window of #<Window> which has only a getter
 *
 *   node scripts/test-module-load.mjs
 */
import { pathToFileURL } from "node:url";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/* ---- browser-like globals ---- */
// `window` is a getter-only self-reference, exactly like in a browser:
// any `window.window = …` must throw in strict mode.
Object.defineProperty(globalThis, "window", {
  get: () => globalThis,
  configurable: true,
});
globalThis.self = globalThis;
globalThis.HTMLElement = class HTMLElement {};
const registry = new Map();
globalThis.customElements = {
  get: (name) => registry.get(name),
  define: (name, cls) => registry.set(name, cls),
};

/* ---- load the dist file as an ES module ---- */
const dist = pathToFileURL(join(root, "dist", "zendure-dashboard-card.js")).href;
try {
  await import(dist);
} catch (e) {
  console.error(`FAIL — dist crashed when loaded as an ES module:\n  ${e.constructor.name}: ${e.message}`);
  process.exit(1);
}

/* ---- assertions ---- */
const checks = [
  ["window.gsap is defined", !!globalThis.gsap],
  ["window.DrawSVGPlugin is defined", !!globalThis.DrawSVGPlugin],
  ["custom element zendure-dashboard-card registered", registry.has("zendure-dashboard-card")],
  ["custom element zendure-dashboard-card-editor registered", registry.has("zendure-dashboard-card-editor")],
  [
    "card listed in window.customCards",
    Array.isArray(globalThis.customCards) &&
      globalThis.customCards.some((c) => c.type === "zendure-dashboard-card"),
  ],
];

let failed = 0;
for (const [label, ok] of checks) {
  console.log(`${ok ? "PASS" : "FAIL"} — ${label}`);
  if (!ok) failed++;
}
process.exit(failed ? 1 : 0);
