/**
 * Day 3 — Shipping Cost Defaults 🟢   (Month 1, Day 3)
 * ------------------------------------------------------------------
 * Real-world:  * Falling back to a standard shipping rate when the user hasn't picked one.
 *
 * ES6 focus: Default parameters
 *   function greet(name = "friend") {
 *     return `Hi, ${name}`;
 *   }
 *   greet(); // "Hi, friend"
 *
 * Task:
 * Calculate shipping cost, defaulting to "standard" shipping if no method
 * is given. standard: weight * 2, express: weight * 5.
 *
 * Hint (spoiler — try first!):
 * Use a ternary or if/else keyed off `method` inside the function body.
 */

function shippingCost(weight, method = "standard") {
  // your code here
}

// ---- Test cases — run: node day-03.js ----
check("Test 1", shippingCost(3), 6);
check("Test 2", shippingCost(3, "express"), 15);

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
