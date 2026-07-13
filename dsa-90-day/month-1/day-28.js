/**
 * Day 28 — Username Padder/Validator 🟡   (Month 1, Day 28)
 * ------------------------------------------------------------------
 * Real-world:  * Standardizing display IDs, like zero-padding order numbers.
 *
 * ES6 focus: .padStart() / .padEnd()
 *   "5".padStart(3, "0"); // "005"
 *
 * Task:
 * Pad an order number to 6 digits with leading zeros.
 *
 * Hint (spoiler — try first!):
 * Convert to string first: String(num).padStart(6, "0").
 */

function formatOrderId(num) {
  // your code here
}

// ---- Test cases — run: node day-28.js ----
check("Test 1", formatOrderId(42), "000042");

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
