/**
 * Day 31 — Event Notification Dispatcher 🟠   (Month 2, Day 1)
 * ------------------------------------------------------------------
 * Real-world:  * A basic pub/sub-style callback system, like a UI button's onClick.
 *
 * ES6 focus: Passing functions as arguments (first-class functions)
 *   function run(fn) { return fn(5); }
 *   run(n => n * 2); // 10
 *
 * Task:
 * Write notify(users, callback) that calls callback(user) for every user
 * in the list, and use it to build a list of alert messages.
 *
 * Hint (spoiler — try first!):
 * Use .map(callback) internally instead of a manual loop.
 */

function notify(users, callback) {
  // your code here
}

const makeAlertMsg = (u) => "Alert sent to " + u;

// ---- Test cases — run: node day-01.js ----
check("Test 1", notify(["Sam", "Ava"], makeAlertMsg), ["Alert sent to Sam", "Alert sent to Ava"]);

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
