/**
 * Day 80 — Validate Category Hierarchy (Validate BST) 🔴   (Month 3, Day 20)
 * ------------------------------------------------------------------
 * Real-world:  * Confirming a product category tree respects ordering rules (useful before
 * trusting fast lookups on it).
 *
 * ES6 focus: BST validation with min/max bounds passed through recursion
 *   (builds on Day 77)
 *
 * Task:
 * Return true if a binary tree satisfies BST ordering rules.
 *
 * Hint (spoiler — try first!):
 * Pass down a valid (min, max) range as you recurse; each node must fall
 * within its inherited range.
 */

function isValidBST(root) {
  // your code here
}

// ---- Test cases — run: node day-20.js ----
const good = { value: 5, left: { value: 3, left: null, right: null }, right: { value: 8, left: null, right: null } };
check("Test 1", isValidBST(good), true);
const bad = { value: 5, left: { value: 3, left: null, right: null }, right: { value: 4, left: null, right: null } };
check("Test 2", isValidBST(bad), false);

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
