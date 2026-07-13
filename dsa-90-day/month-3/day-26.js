/**
 * Day 86 — Staircase Step Counter (Climbing Stairs) 🟠   (Month 3, Day 26)
 * ------------------------------------------------------------------
 * Real-world:  * Counting distinct ways to animate a UI element climbing steps 1 or 2 at a
 * time.
 *
 * ES6 focus: DP via bottom-up array building (or memoized recursion)
 *   (builds on Day 43)
 *
 * Task:
 * Return the number of distinct ways to climb n stairs, taking 1 or 2
 * steps at a time.
 *
 * Hint (spoiler — try first!):
 * This is Fibonacci in disguise: ways(n) = ways(n-1) + ways(n-2).
 */

function climbStairs(n) {
  // your code here
}

// ---- Test cases — run: node day-26.js ----
check("Test 1", climbStairs(4), 5);

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
