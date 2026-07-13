/**
 * Day 45 — Flatten Deeply Nested Comments 🔴   (Month 2, Day 15)
 * ------------------------------------------------------------------
 * Real-world:  * Flattening arbitrarily deep reply threads (unlike Day 24's one-level
 * version).
 *
 * ES6 focus: Recursion + .flatMap() for arbitrary depth
 *   (builds on Days 24, 41)
 *
 * Task:
 * Flatten a comment tree of arbitrary nesting depth into a single flat
 * array of comment text. Nodes look like { text, replies: [...] }.
 *
 * Hint (spoiler — try first!):
 * For each node, return [node.text, ...node.replies.flatMap(deepFlatten)].
 */

function deepFlatten(commentTree) {
  // your code here
}

// ---- Test cases — run: node day-15.js ----
check("Test 1", deepFlatten([{ text: "a", replies: [{ text: "b", replies: [{ text: "c", replies: [] }] }] }]), ["a", "b", "c"]);

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
