/**
 * Day 48 — Phonebook Binary Search 🟠   (Month 2, Day 18)
 * ------------------------------------------------------------------
 * Real-world:  * Searching a sorted phonebook/leaderboard efficiently instead of scanning
 * every entry.
 *
 * ES6 focus: Binary search, O(log n) — requires sorted input
 *   (no isolated snippet — see task)
 *
 * Task:
 * Return the index of target in a SORTED array using binary search.
 *
 * Hint (spoiler — try first!):
 * Track low/high pointers, check the midpoint, and narrow the range based on
 * whether the target is bigger or smaller.
 */

function binarySearch(sortedArr, target) {
  // your code here
}

// ---- Test cases — run: node day-18.js ----
check("Test 1", binarySearch([1, 3, 5, 7, 9, 11], 7), 3);

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
