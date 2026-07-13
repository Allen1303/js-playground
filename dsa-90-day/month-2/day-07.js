/**
 * Day 37 — Pair Sum Finder (Two-Pointer) 🟠   (Month 2, Day 7)
 * ------------------------------------------------------------------
 * Real-world:  * Matching two transactions that sum to a target refund amount.
 *
 * ES6 focus: Two-pointer technique (on a SORTED array)
 *   (no isolated snippet — see task)
 *
 * Task:
 * Given a sorted array and a target, return the pair of numbers that sum
 * to target, using two pointers (not nested loops).
 *
 * Hint (spoiler — try first!):
 * Start one pointer at index 0, one at the end. If the sum is too big, move
 * the right pointer left; too small, move the left pointer right.
 */

function findPairSum(sortedNums, target) {
  // your code here
}

// ---- Test cases — run: node day-07.js ----
check("Test 1", findPairSum([1, 2, 4, 7, 11], 11), [4, 7]);

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
