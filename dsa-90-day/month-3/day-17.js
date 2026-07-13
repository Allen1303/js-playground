/**
 * Day 77 — Org Chart Lookup (BST Insert/Search) 🟠   (Month 3, Day 17)
 * ------------------------------------------------------------------
 * Real-world:  * Maintaining a searchable, ordered structure — like employee IDs organized
 * for fast lookup.
 *
 * ES6 focus: Binary Search Tree insert + search
 *   (builds on Day 76)
 *
 * Task:
 * Implement a BST class with insert(value) and contains(value).
 *
 * Hint (spoiler — try first!):
 * At each node, go left if the new value is smaller, right if larger, until
 * you find an empty spot (insert) or a match (search).
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() { this.root = null; }
  insert(value) {
    // your code here
  }
  contains(value) {
    // your code here
  }
}

// ---- Test cases — run: node day-17.js ----
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
check("Test 1", bst.contains(5), true);
check("Test 2", bst.contains(99), false);

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
