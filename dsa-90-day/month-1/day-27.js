/**
 * Day 27 — CSV Row Parser 🟡   (Month 1, Day 27)
 * ------------------------------------------------------------------
 * Real-world:  * Parsing a raw CSV line into fields.
 *
 * ES6 focus: .split() / .trim()
 *   "a, b".split(","); // ["a", " b"]
 *
 * Task:
 * Split a CSV row string into an array of trimmed field values.
 *
 * Hint (spoiler — try first!):
 * split(",").map(field => field.trim())
 */

function parseCsvRow(row) {
  // your code here
}

// ---- Test cases — run: node day-27.js ----
check("Test 1", parseCsvRow("Sam, 29 , NYC"), ["Sam", "29", "NYC"]);

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
