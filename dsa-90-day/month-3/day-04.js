/**
 * Day 64 — Detect a Cyclic Playlist (Floyd's Algorithm) 🔴   (Month 3, Day 4)
 * ------------------------------------------------------------------
 * Real-world:  * Detecting an accidental infinite loop in a "play next" chain.
 *
 * ES6 focus: Floyd's cycle detection (slow/fast pointers)
 *   (no isolated snippet — see task)
 *
 * Task:
 * Write hasCycle(head) using slow/fast pointers on raw nodes
 * ({ value, next }).
 *
 * Hint (spoiler — try first!):
 * Move one pointer one step at a time and another two steps at a time — if
 * they ever meet, there's a cycle.
 */

function hasCycle(head) {
  // your code here
}

// ---- Test cases — run: node day-04.js ----
const a = { value: "a" }, b = { value: "b" }, c = { value: "c" };
a.next = b; b.next = c; c.next = a; // cycle
check("Test 1", hasCycle(a), true);

const x = { value: "x" }, y = { value: "y" };
x.next = y; y.next = null; // no cycle
check("Test 2", hasCycle(x), false);

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
