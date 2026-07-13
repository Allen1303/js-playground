/**
 * Day 60 — Object Identity Cache (WeakMap Concept) 🟡   (Month 2, Day 30)
 * ------------------------------------------------------------------
 * Real-world:  * Caching computed data tied to specific objects (like DOM nodes) without
 * preventing garbage collection.
 *
 * ES6 focus: WeakMap — conceptual
 *   const cache = new WeakMap();
 *   const obj = {};
 *   cache.set(obj, true);
 *
 * Task:
 * Write a comment explaining why you'd use WeakMap instead of Map for
 * caching data against DOM element objects, then write markProcessed(obj)
 * using a WeakMap.
 *
 * Hint (spoiler — try first!):
 * WeakMap keys must be objects, and entries are automatically garbage-
 * collected when nothing else references the key.
 */

// comment: why WeakMap over Map here?

const cache = new WeakMap();
function markProcessed(obj) {
  // your code here
}

// ---- Test cases — run: node day-30.js ----
const obj = {};
markProcessed(obj);
check("Test 1", cache.get(obj), true);

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
