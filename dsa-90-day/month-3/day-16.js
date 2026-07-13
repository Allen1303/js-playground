/**
 * Day 76 — File System Tree Traversal 🟠   (Month 3, Day 16)
 * ------------------------------------------------------------------
 * Real-world:  * Listing every file in a nested folder structure, depth-first.
 *
 * ES6 focus: Binary tree node structure + traversal recursion
 *   class TreeNode {
 *     constructor(value) {
 *       this.value = value;
 *       this.left = null;
 *       this.right = null;
 *     }
 *   }
 *
 * Task:
 * Write inOrder(root), preOrder(root), and postOrder(root), each
 * returning an array of visited values.
 *
 * Hint (spoiler — try first!):
 * In-order: left, node, right. Pre-order: node, left, right. Post-order:
 * left, right, node.
 */

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrder(root) {
  // your code here
}
function preOrder(root) {
  // your code here
}
function postOrder(root) {
  // your code here
}

// ---- Test cases — run: node day-16.js ----
const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
check("Test 1", inOrder(tree), [1, 2, 3]);
check("Test 2", preOrder(tree), [2, 1, 3]);
check("Test 3", postOrder(tree), [1, 3, 2]);

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
