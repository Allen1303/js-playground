/**
 * Day 2 — Order Total Formatter 🟢   (Month 1, Day 2)
 * ------------------------------------------------------------------
 * Real-world:  * Formatting prices consistently in a checkout flow.
 *
 * ES6 focus: Arrow functions
 *   const double = x => x * 2;
 *   console.log(double(4)); // 8
 *
 * Task:
 * Convert this idea to an arrow function that formats a price to two
 * decimals with a $ prefix.
 *
 * Hint (spoiler — try first!):
 * Number.prototype.toFixed(2) gives you two decimal places as a string.
 */

const formatPrice = (amount) => {
  // your code here
};

// ---- Test cases — run: node day-02.js ----
check("Test 1", formatPrice(19.5), "$19.50");
check("Test 2", formatPrice(3), "$3.00");

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
