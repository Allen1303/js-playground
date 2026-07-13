/**
 * Day 70 — Stock Price Tracker (Min Stack) 🔴   (Month 3, Day 10)
 * ------------------------------------------------------------------
 * Real-world:  * Tracking the lowest stock price seen so far, efficiently, alongside a
 * running price stack.
 *
 * ES6 focus: Min stack (auxiliary stack tracking minimums)
 *   (builds on Day 66)
 *
 * Task:
 * Build a MinStack with push, pop, and getMin(), where getMin() is O(1).
 *
 * Hint (spoiler — try first!):
 * Every time you push, also push the current minimum (existing min or the
 * new value, whichever is smaller) onto minStack.
 */

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    // your code here
  }
  pop() {
    // your code here
  }
  getMin() {
    // your code here
  }
}

// ---- Test cases — run: node day-10.js ----
const ms = new MinStack();
ms.push(5);
ms.push(2);
ms.push(8);
check("Test 1", ms.getMin(), 2);

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
