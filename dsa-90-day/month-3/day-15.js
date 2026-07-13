/**
 * Day 75 — Transaction Sum Matching (Subarray Sum Equals K) 🔴   (Month 3, Day 15)
 * ------------------------------------------------------------------
 * Real-world:  * Finding a contiguous run of transactions that sum to a suspicious target
 * amount.
 *
 * ES6 focus: Prefix sums + Map
 *   (builds on Days 71-74)
 *
 * Task:
 * Return the count of contiguous subarrays that sum to k.
 *
 * Hint (spoiler — try first!):
 * Track a running sum and a Map of how many times each running sum has
 * occurred; at each step check if (runningSum - k) has been seen before.
 */

function subarraySumCount(nums, k) {
  // your code here
}

// ---- Test cases — run: node day-15.js ----
check("Test 1", subarraySumCount([1, 1, 1], 2), 2);

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
