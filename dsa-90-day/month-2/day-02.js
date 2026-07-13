/**
 * Day 32 — Discount Calculator Factory 🟠   (Month 2, Day 2)
 * ------------------------------------------------------------------
 * Real-world:  * Creating specialized pricing functions (student discount, VIP discount)
 * from one generic factory.
 *
 * ES6 focus: Higher-order functions (functions that return functions)
 *   const makeMultiplier = (factor) => (n) => n * factor;
 *   const double = makeMultiplier(2);
 *   double(5); // 10
 *
 * Task:
 * Write makeDiscounter(percent) that returns a function which applies
 * that discount to a price.
 *
 * Hint (spoiler — try first!):
 * The returned function should compute price - (price * percent / 100).
 */

function makeDiscounter(percent) {
  // return a function (price) => discountedPrice
}

// ---- Test cases — run: node day-02.js ----
check("Test 1", makeDiscounter(20)(100), 80);

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
