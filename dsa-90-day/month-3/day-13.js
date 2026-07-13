/**
 * Day 73 — First Unique Log Event 🟠   (Month 3, Day 13)
 * ------------------------------------------------------------------
 * Real-world:  * Finding the first non-repeated error type in a log stream — the
 * "interesting" one to investigate.
 *
 * ES6 focus: Map to count first, then a second pass to find the first count-of-1
 *   (builds on Day 59)
 *
 * Task:
 * Return the index of the first non-repeating character in a string, or
 * -1.
 *
 * Hint (spoiler — try first!):
 * First pass: build a frequency map. Second pass: return the first index
 * whose character has count 1.
 */

function firstUniqueChar(str) {
  // your code here
}

// ---- Test cases — run: node day-13.js ----
check("Test 1", firstUniqueChar("leetcode"), 0); // the "l"

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
