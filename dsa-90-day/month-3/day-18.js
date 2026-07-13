/**
 * Day 78 — Org Chart Depth Checker 🟡   (Month 3, Day 18)
 * ------------------------------------------------------------------
 * Real-world:  * Measuring how many management layers deep an organization goes.
 *
 * ES6 focus: Tree height via recursion
 *   (builds on Day 76)
 *
 * Task:
 * Return the height of a binary tree (1 for just a root).
 *
 * Hint (spoiler — try first!):
 * 1 + Math.max(treeHeight(root.left), treeHeight(root.right)), with 0 for a
 * null node.
 */

function treeHeight(root) {
  // your code here
}

// ---- Test cases — run: node day-18.js ----
const tree = { value: 1, left: { value: 2, left: null, right: null }, right: null };
check("Test 1", treeHeight(tree), 2);
check("Test 2", treeHeight({ value: 1, left: null, right: null }), 1);

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
