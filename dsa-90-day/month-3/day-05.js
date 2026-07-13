/**
 * Day 65 — Find the Midpoint Track 🟠   (Month 3, Day 5)
 * ------------------------------------------------------------------
 * Real-world:  * Jumping to the middle of a playlist/queue without counting the full length
 * first.
 *
 * ES6 focus: Slow/fast pointer technique
 *   (builds on Day 64)
 *
 * Task:
 * Write findMiddle(head) returning the middle node's value, for raw nodes
 * ({ value, next }).
 *
 * Hint (spoiler — try first!):
 * Move slow one step and fast two steps each iteration; when fast reaches
 * the end, slow is at the middle.
 */

function findMiddle(head) {
  // your code here
}

// ---- Test cases — run: node day-05.js ----
function fromArray(arr) {
  const nodes = arr.map(value => ({ value, next: null }));
  nodes.forEach((n, i) => { if (i < nodes.length - 1) n.next = nodes[i + 1]; });
  return nodes[0];
}
check("Test 1", findMiddle(fromArray(["a", "b", "c", "d", "e"])), "c");

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
