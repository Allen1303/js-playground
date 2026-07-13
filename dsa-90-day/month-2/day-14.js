/**
 * Day 44 — Undo Stack Reversal 🟠   (Month 2, Day 14)
 * ------------------------------------------------------------------
 * Real-world:  * Reversing an action history list — same idea as an "undo" stack rendered
 * oldest-first.
 *
 * ES6 focus: Recursive array reversal (no built-in .reverse() allowed)
 *   (builds on Day 41)
 *
 * Task:
 * Reverse an array recursively without using .reverse().
 *
 * Hint (spoiler — try first!):
 * Base case: empty array -> return []. Recursive case:
 * [...reverseArr(arr.slice(1)), arr[0]].
 */

function reverseArr(arr) {
  // your code here
}

// ---- Test cases — run: node day-14.js ----
check("Test 1", reverseArr([1, 2, 3]), [3, 2, 1]);

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
