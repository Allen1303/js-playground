/**
 * Day 69 — Ticketing System (Queue via Two Stacks) 🔴   (Month 3, Day 9)
 * ------------------------------------------------------------------
 * Real-world:  * A classic interview twist — implementing FIFO behavior using only stack
 * operations (e.g. constrained legacy APIs).
 *
 * ES6 focus: Queue implemented with two stacks
 *   (builds on Days 66-67)
 *
 * Task:
 * Implement a Queue class using two internal arrays as stacks (no
 * .shift() allowed).
 *
 * Hint (spoiler — try first!):
 * Push new items onto inStack. On dequeue, if outStack is empty, pour all of
 * inStack into outStack (reversing order), then pop from outStack.
 */

class QueueFromStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  enqueue(item) {
    // your code here
  }
  dequeue() {
    // your code here
  }
}

// ---- Test cases — run: node day-09.js ----
const q = new QueueFromStacks();
q.enqueue(1);
q.enqueue(2);
check("Test 1", q.dequeue(), 1);

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
