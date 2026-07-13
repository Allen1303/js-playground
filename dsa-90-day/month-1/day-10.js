/**
 * Day 10 — Print Queue Walkthrough 🟡   (Month 1, Day 10)
 * ------------------------------------------------------------------
 * Real-world:  * Processing items one at a time, in order, like a print or task queue.
 *
 * ES6 focus: for...of loop
 *   for (const item of ["a", "b"]) { console.log(item); }
 *
 * Task:
 * Use for...of to build and return a log array like "Printing: <job>"
 * for each job in the queue.
 *
 * Hint (spoiler — try first!):
 * Push into a results array inside the loop, then return it after the loop
 * ends.
 */

function processQueue(jobs) {
  // your code here
}

// ---- Test cases — run: node day-10.js ----
check("Test 1", processQueue(["doc1", "doc2"]), ["Printing: doc1", "Printing: doc2"]);

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
