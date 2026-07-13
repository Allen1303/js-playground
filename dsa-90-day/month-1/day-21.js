/**
 * Day 21 — Sales Report Pipeline 🟠   (Month 1, Day 21)
 * ------------------------------------------------------------------
 * Real-world:  * A common analytics pipeline: filter relevant records, then transform, then
 * total.
 *
 * ES6 focus: Chaining .filter().map().reduce()
 *   (builds on Days 16-18)
 *
 * Task:
 * Given sales records { region, amount }, return the total amount for a
 * given region, doubled as a "bonus projection".
 *
 * Hint (spoiler — try first!):
 * filter(s => s.region === region).map(s => s.amount).reduce((a,b)=>a+b,0) *
 * 2
 */

function regionProjection(sales, region) {
  // your code here
}

// ---- Test cases — run: node day-21.js ----
check("Test 1", regionProjection([{ region: "west", amount: 100 }, { region: "east", amount: 50 }], "west"), 200);

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
