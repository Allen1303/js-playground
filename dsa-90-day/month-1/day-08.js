/**
 * Day 8 — Variadic Total Calculator 🟢   (Month 1, Day 8)
 * ------------------------------------------------------------------
 * Real-world:  * A function that sums however many charges get passed to it (tips, fees,
 * taxes).
 *
 * ES6 focus: Rest parameters
 *   function sumAll(...nums) {
 *     return nums.reduce((a, b) => a + b, 0);
 *   }
 *
 * Task:
 * Write calculateTotal to accept any number of charge amounts and return
 * their sum.
 *
 * Hint (spoiler — try first!):
 * ...charges collects all arguments into a real array you can reduce over.
 */

function calculateTotal(...charges) {
  // your code here
}

// ---- Test cases — run: node day-08.js ----
check("Test 1", calculateTotal(10, 5, 2.5), 17.5);
check("Test 2", calculateTotal(), 0);

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
