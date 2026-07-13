/**
 * Day 24 — Flatten Nested Comment Threads 🟠   (Month 1, Day 24)
 * ------------------------------------------------------------------
 * Real-world:  * Flattening nested reply threads into a single list for rendering.
 *
 * ES6 focus: .flat() / .flatMap()
 *   [[1, 2], [3]].flat(); // [1, 2, 3]
 *
 * Task:
 * Flatten a one-level-nested array of comment arrays into a single flat
 * array.
 *
 * Hint (spoiler — try first!):
 * threads.flat() handles one level of nesting by default.
 */

function flattenThreads(threads) {
  // your code here
}

// ---- Test cases — run: node day-24.js ----
check("Test 1", flattenThreads([["hi", "hey"], ["yo"]]), ["hi", "hey", "yo"]);

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
