/**
 * Day 33 — Click Counter (Closures) 🟠   (Month 2, Day 3)
 * ------------------------------------------------------------------
 * Real-world:  * Tracking state privately, like counting button clicks without a global
 * variable.
 *
 * ES6 focus: Closures
 *   function makeCounter() {
 *     let count = 0;
 *     return () => ++count;
 *   }
 *
 * Task:
 * Write makeCounter() returning a function that increments and returns
 * a private counter each call.
 *
 * Hint (spoiler — try first!):
 * The count variable lives in the outer function's scope and persists
 * between calls to the inner function.
 */

function makeCounter() {
  // your code here
}

// ---- Test cases — run: node day-03.js ----
const c = makeCounter();
c();
check("Test 1", c(), 2);

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
