/**
 * Day 57 — Quicksort Product Prices 🔴   (Month 2, Day 27)
 * ------------------------------------------------------------------
 * Real-world:  * Sorting a large product price list efficiently in place.
 *
 * ES6 focus: Quicksort, O(n log n) average, recursion + partitioning
 *   (no isolated snippet — see task)
 *
 * Task:
 * Implement quicksort: pick a pivot, partition, recurse.
 *
 * Hint (spoiler — try first!):
 * Pick a pivot, partition into "less than" and "greater than" arrays, then
 * recursively sort each and concatenate.
 */

function quickSort(arr) {
  // your code here
}

// ---- Test cases — run: node day-27.js ----
check("Test 1", quickSort([9, 3, 7, 1, 5]), [1, 3, 5, 7, 9]);

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
