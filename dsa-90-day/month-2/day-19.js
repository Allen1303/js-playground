/**
 * Day 49 — First & Last Occurrence (Binary Search Variant) 🔴   (Month 2, Day 19)
 * ------------------------------------------------------------------
 * Real-world:  * Finding the range of log entries matching a timestamp in a sorted log
 * file.
 *
 * ES6 focus: Binary search variant
 *   (builds on Day 48)
 *
 * Task:
 * Return [firstIndex, lastIndex] of target in a sorted array with
 * duplicates, or [-1, -1] if absent.
 *
 * Hint (spoiler — try first!):
 * Run binary search twice: once biased to find the leftmost match, once for
 * the rightmost.
 */

function findRange(sortedArr, target) {
  // your code here
}

// ---- Test cases — run: node day-19.js ----
check("Test 1", findRange([1, 2, 2, 2, 3, 4], 2), [1, 3]);

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
