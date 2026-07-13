/**
 * Day 39 — Scheduling Conflict Report (FizzBuzz variant) 🟡   (Month 2, Day 9)
 * ------------------------------------------------------------------
 * Real-world:  * Flagging days that fall on both a billing cycle and a maintenance cycle.
 *
 * ES6 focus: Modulo + ternary chains, array building in a loop
 *   5 % 3; // 2
 *
 * Task:
 * For days 1..n, label multiples of 3 as "Billing", multiples of 5 as
 * "Maintenance", multiples of both as "Conflict", else the day number.
 *
 * Hint (spoiler — try first!):
 * Classic FizzBuzz — check the "both" condition (% 15) before the individual
 * ones.
 */

function scheduleReport(n) {
  // your code here
}

// ---- Test cases — run: node day-09.js ----
check("Test 1", scheduleReport(15)[14], "Conflict"); // day 15

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
