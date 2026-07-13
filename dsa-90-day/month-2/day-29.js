/**
 * Day 59 — Word Frequency with Map 🟠   (Month 2, Day 29)
 * ------------------------------------------------------------------
 * Real-world:  * Redoing Day 30's word counter, but with a Map instead of a plain object
 * (better for non-string keys, guarantees insertion order).
 *
 * ES6 focus: Map methods (set, get, has)
 *   const m = new Map();
 *   m.set("a", 1);
 *   m.get("a"); // 1
 *
 * Task:
 * Return a Map of word -> count.
 *
 * Hint (spoiler — try first!):
 * map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1)
 */

function wordFrequencyMap(text) {
  // your code here
}

// ---- Test cases — run: node day-29.js ----
const result = wordFrequencyMap("cat dog cat");
check("Test 1", Object.fromEntries(result), { cat: 2, dog: 1 });

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
