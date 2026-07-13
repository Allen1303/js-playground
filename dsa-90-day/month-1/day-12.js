/**
 * Day 12 — Merge User Settings 🟢   (Month 1, Day 12)
 * ------------------------------------------------------------------
 * Real-world:  * Applying user overrides on top of default app settings.
 *
 * ES6 focus: Object spread
 *   const merged = { ...defaults, ...overrides };
 *
 * Task:
 * Merge a defaults object with a userPrefs object, where userPrefs values
 * win on conflicts.
 *
 * Hint (spoiler — try first!):
 * Spread order matters: later spreads overwrite earlier ones.
 */

function mergeSettings(defaults, userPrefs) {
  // your code here
}

// ---- Test cases — run: node day-12.js ----
check("Test 1", mergeSettings({ theme: "light", volume: 5 }, { theme: "dark" }), { theme: "dark", volume: 5 });

// --- shared test helper, same in every file ---
function check(label, actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  console.log(`${label}: ${a === e ? "PASS" : "FAIL"}`);
  if (a !== e) {
    console.log(`  expected: ${e}`);
    console.log(`  actual:   ${a}`);
  }
}
