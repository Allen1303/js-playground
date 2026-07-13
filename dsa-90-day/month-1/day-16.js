/**
 * Day 16 — Price List Transformer 🟡   (Month 1, Day 16)
 * ------------------------------------------------------------------
 * Real-world:  * Applying a tax rate across every product price for display.
 *
 * ES6 focus: .map()
 *   [1, 2, 3].map(n => n * 2); // [2, 4, 6]
 *
 * Task:
 * Given an array of prices, return a new array with 8% tax applied,
 * rounded to 2 decimals.
 *
 * Hint (spoiler — try first!):
 * map(p => Math.round(p * 1.08 * 100) / 100)
 */

function applyTax(prices) {
  // your code here
}

// ---- Test cases — run: node day-16.js ----
check("Test 1", applyTax([10, 20]), [10.8, 21.6]);

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
