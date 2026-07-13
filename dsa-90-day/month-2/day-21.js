/**
 * Day 51 — Bubble Sort Exam Scores 🟠   (Month 2, Day 21)
 * ------------------------------------------------------------------
 * Real-world:  * Understanding the simplest (and slowest) sorting approach before reaching
 * for .sort().
 *
 * ES6 focus: Bubble sort, O(n^2)
 *   (no isolated snippet — see task)
 *
 * Task:
 * Sort an array of exam scores ascending using bubble sort (repeatedly
 * swap adjacent out-of-order pairs).
 *
 * Hint (spoiler — try first!):
 * Nested loops: outer loop for passes, inner loop compares arr[j] and
 * arr[j+1], swapping if out of order.
 */

function bubbleSort(scores) {
  // your code here
}

// ---- Test cases — run: node day-21.js ----
check("Test 1", bubbleSort([88, 45, 92, 60]), [45, 60, 88, 92]);

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
