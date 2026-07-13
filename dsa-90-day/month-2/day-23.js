/**
 * Day 53 — Insertion Sort To-Do List 🟠   (Month 2, Day 23)
 * ------------------------------------------------------------------
 * Real-world:  * Inserting a new priority item into an already-sorted to-do list.
 *
 * ES6 focus: Insertion sort, O(n^2) but fast on nearly-sorted data
 *   (no isolated snippet — see task)
 *
 * Task:
 * Sort an array by priority ascending using insertion sort.
 *
 * Hint (spoiler — try first!):
 * Walk through the array; for each element, shift larger sorted elements
 * right until you find its spot.
 */

function insertionSort(tasks) {
  // your code here
}

// ---- Test cases — run: node day-23.js ----
check("Test 1", insertionSort([5, 2, 4, 6, 1]), [1, 2, 4, 5, 6]);

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
