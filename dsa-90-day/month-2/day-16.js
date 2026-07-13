/**
 * Day 46 — Counting Operations (Big-O Warm-up) 🟡   (Month 2, Day 16)
 * ------------------------------------------------------------------
 * Real-world:  * Reasoning about whether code will scale before it hits production with 1M
 * records.
 *
 * ES6 focus: No coding today — pure analysis
 *   (see task)
 *
 * Task:
 * No coding today. For each snippet below, write your answer as a comment:
 *   1. A single loop over n items          -> what's the time complexity?
 *   2. A loop inside a loop, both over n   -> what's the time complexity?
 *   3. Looking up a value by key in an object -> what's the time complexity?
 *
 * Hint (spoiler — try first!):
 * 1: O(n). 2: O(n^2). 3: O(1) average case — object/hash lookups don't scan
 * the whole structure.
 */

// answer directly below as comments:
// 1. O(?)
// 2. O(?)
// 3. O(?)

// ---- Test cases — run: node day-16.js ----
console.log("Day 46 is a reasoning exercise — no automated tests. Fill in the comments above.");

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
