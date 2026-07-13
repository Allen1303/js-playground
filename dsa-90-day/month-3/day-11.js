/**
 * Day 71 — Two Sum (Cart Discount Match) 🟠   (Month 3, Day 11)
 * ------------------------------------------------------------------
 * Real-world:  * Finding two items in a cart whose prices sum to exactly a coupon
 * threshold.
 *
 * ES6 focus: Hash map for O(n) lookups instead of O(n^2) nested loops
 *   (no isolated snippet — see task)
 *
 * Task:
 * Return the indices of two numbers that sum to target.
 *
 * Hint (spoiler — try first!):
 * As you loop, store each number's index in a Map. Before adding, check if
 * target - current is already in the map.
 */

function twoSum(nums, target) {
  // your code here
}

// ---- Test cases — run: node day-11.js ----
check("Test 1", twoSum([2, 7, 11, 15], 9), [0, 1]);

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
