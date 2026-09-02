/**
 * Captura screenshots e computed styles do site real de um cliente.
 *
 * Uso:
 *   node _scripts/capture-reference.mjs <url> [out-dir]
 *
 * Output em out-dir:
 *   desktop-fold.png     (1440x900 acima da dobra)
 *   desktop-mid.png      (1440x900, scroll 1× viewport)
 *   desktop-bottom.png   (1440x900, scroll 2× viewport)
 *   mobile-fold.png      (iPhone 13 Pro)
 *   computed-styles.json (h1/h2/h3/p/a/button/nav)
 */

import { chromium, devices } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const argv = process.argv.slice(2);
if (argv.length < 1) {
  console.error("Uso: node _scripts/capture-reference.mjs <url> [out-dir]");
  process.exit(1);
}

const url = argv[0];
const out = resolve(argv[1] ?? "./_inputs/.screenshots");
mkdirSync(out, { recursive: true });

const ELEMENTS_TO_SAMPLE = ["h1", "h2", "h3", "p", "a", "button", "nav"];
const PROPS_TO_EXTRACT = [
  "font-family", "font-size", "font-weight", "line-height",
  "letter-spacing", "color", "background-color",
  "padding", "margin", "border-radius", "text-transform",
];

const browser = await chromium.launch({ headless: true });

// Desktop
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

await page.screenshot({ path: join(out, "desktop-fold.png") });

await page.evaluate(() => window.scrollTo({ top: 900, behavior: "instant" }));
await page.waitForTimeout(800);
await page.screenshot({ path: join(out, "desktop-mid.png") });

await page.evaluate(() => window.scrollTo({ top: 1800, behavior: "instant" }));
await page.waitForTimeout(800);
await page.screenshot({ path: join(out, "desktop-bottom.png") });

await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));

// Computed styles
const computed = await page.evaluate(
  ({ elements, props }) => {
    const out = {};
    for (const sel of elements) {
      const els = Array.from(document.querySelectorAll(sel)).slice(0, 3);
      out[sel] = els.map((el, i) => {
        const cs = getComputedStyle(el);
        const data = { index: i, text: (el.textContent || "").trim().slice(0, 80) };
        for (const p of props) data[p] = cs.getPropertyValue(p);
        return data;
      });
    }
    return out;
  },
  { elements: ELEMENTS_TO_SAMPLE, props: PROPS_TO_EXTRACT }
);

writeFileSync(
  join(out, "computed-styles.json"),
  JSON.stringify(computed, null, 2),
  "utf8"
);

// Mobile
const m = await browser.newContext({ ...devices["iPhone 13 Pro"] });
const mp = await m.newPage();
await mp.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await mp.waitForTimeout(1500);
await mp.screenshot({ path: join(out, "mobile-fold.png") });
await m.close();

await browser.close();

console.log(`[capture] salvo em ${out}`);
console.log(`  desktop-fold.png, desktop-mid.png, desktop-bottom.png`);
console.log(`  mobile-fold.png`);
console.log(`  computed-styles.json`);
