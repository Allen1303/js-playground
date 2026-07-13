/**
 * Day 67 — Print Queue (Queue) 🟡   (Month 3, Day 7)
 * ------------------------------------------------------------------
 * Real-world:  * Processing print jobs in the order they were submitted (FIFO).
 *
 * ES6 focus: Queue via array (push/shift)
 *   class Queue {
 *     constructor() { this.items = []; }
 *     enqueue(item) { this.items.push(item); }
 *     dequeue() { return this.items.shift(); }
 *   }
 *
 * Task:
 * Use a Queue class to process jobs in FIFO order, returning the
 * processing log.
 *
 * Hint (spoiler — try first!):
 * Enqueue all jobs first, then dequeue and process one at a time until
 * empty.
 */

class Queue {
  constructor() { this.items = []; }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  isEmpty() { return this.items.length === 0; }
}

function processPrintJobs(jobs) {
  // your code here
}

// ---- Test cases — run: node day-07.js ----
check("Test 1", processPrintJobs(["doc1", "doc2"]), ["Printed: doc1", "Printed: doc2"]);

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
