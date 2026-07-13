/**
 * Day 56 — Merge Sort Log Timestamps 🔴   (Month 2, Day 26)
 * ------------------------------------------------------------------
 * Real-world:  * Merging two already-sorted log streams into one sorted stream (classic
 * merge sort's "merge" step, plus the divide-and-conquer wrapper).
 *
 * ES6 focus: Merge sort, O(n log n), recursion
 *   (no isolated snippet — see task)
 *
 * Task:
 * Implement merge sort: split, recursively sort each half, merge.
 *
 * Hint (spoiler — try first!):
 * Split the array in half, recursively sort each half, then merge the two
 * sorted halves by comparing front elements.
 */

function mergeSort(arr) {
  // your code here
}

// ---- Test cases — run: node day-26.js ----
check("Test 1", mergeSort([5, 1, 4, 2, 8]), [1, 2, 4, 5, 8]);

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
