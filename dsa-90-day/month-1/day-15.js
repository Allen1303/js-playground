/**
 * Day 15 — Object-to-Table Rows 🟡   (Month 1, Day 15)
 * ------------------------------------------------------------------
 * Real-world:  * Turning a settings object into rows for a UI table.
 *
 * ES6 focus: Object.entries / Object.keys / Object.values
 *   Object.entries({ a: 1, b: 2 }); // [["a",1],["b",2]]
 *
 * Task:
 * Convert an object into an array of "key: value" strings.
 *
 * Hint (spoiler — try first!):
 * Object.entries(obj).map(([k, v]) => ...)
 */

function toRows(obj) {
  // your code here
}

// ---- Test cases — run: node day-15.js ----
check("Test 1", toRows({ theme: "dark", volume: 5 }), ["theme: dark", "volume: 5"]);

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
