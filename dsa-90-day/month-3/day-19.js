/**
 * Day 79 — Org Chart Level Printer (BFS) 🟠   (Month 3, Day 19)
 * ------------------------------------------------------------------
 * Real-world:  * Printing an org chart level by level (all VPs, then all directors, etc.).
 *
 * ES6 focus: Breadth-first traversal using a queue
 *   (builds on Day 67)
 *
 * Task:
 * Return an array of arrays, one per tree level, using BFS.
 *
 * Hint (spoiler — try first!):
 * Use a queue; process all nodes currently in the queue as one "level"
 * before enqueuing their children.
 */

function levelOrder(root) {
  // your code here
}

// ---- Test cases — run: node day-19.js ----
const tree = { value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } };
check("Test 1", levelOrder(tree), [[1], [2, 3]]);

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
