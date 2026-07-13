/**
 * Day 35 — Curried Price Calculator 🔴   (Month 2, Day 5)
 * ------------------------------------------------------------------
 * Real-world:  * Building reusable, partially-applied pricing rules (e.g. "tax for
 * California" as its own function).
 *
 * ES6 focus: Currying
 *   const add = a => b => a + b;
 *   add(2)(3); // 5
 *
 * Task:
 * Write a curried applyTaxRate(rate)(price) function.
 *
 * Hint (spoiler — try first!):
 * Each arrow function returns the next one; the final one does the actual
 * math.
 */

const applyTaxRate = (rate) => (price) => {
  // your code here
};

// ---- Test cases — run: node day-05.js ----
check("Test 1", applyTaxRate(0.08)(100), 108);

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
