/**
 * Day 52 — Selection Sort Rankings 🟠   (Month 2, Day 22)
 * ------------------------------------------------------------------
 * Real-world:  * Building a leaderboard by repeatedly picking the current lowest/highest
 * score.
 *
 * ES6 focus: Selection sort, O(n^2)
 *   (no isolated snippet — see task)
 *
 * Task:
 * Sort ascending by repeatedly finding the minimum of the unsorted
 * portion and swapping it into place.
 *
 * Hint (spoiler — try first!):
 * For each index i, find the smallest element in arr[i..end], then swap it
 * with arr[i].
 */

function selectionSort(scores) {
  // your code here
}

// ---- Test cases — run: node day-22.js ----
check("Test 1", selectionSort([29, 10, 14, 37]), [10, 14, 29, 37]);

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
