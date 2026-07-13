/**
 * Day 38 — Max Sales in Any 3-Day Window (Sliding Window) 🔴   (Month 2, Day 8)
 * ------------------------------------------------------------------
 * Real-world:  * Finding the best rolling 3-day sales window from daily totals.
 *
 * ES6 focus: Sliding window technique
 *   (no isolated snippet — see task)
 *
 * Task:
 * Given daily sales and a window size k, return the maximum sum of any k
 * consecutive days.
 *
 * Hint (spoiler — try first!):
 * Compute the first window's sum, then slide by subtracting the element
 * leaving and adding the one entering — don't recompute the whole sum each
 * time.
 */

function maxWindowSum(dailySales, k) {
  // your code here
}

// ---- Test cases — run: node day-08.js ----
check("Test 1", maxWindowSum([1, 4, 2, 10, 2, 3, 1], 3), 16); // window [4,2,10]

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
