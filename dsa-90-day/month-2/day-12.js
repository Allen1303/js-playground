/**
 * Day 42 — Permission Tree Search 🟠   (Month 2, Day 12)
 * ------------------------------------------------------------------
 * Real-world:  * Checking if a permission exists anywhere in a nested role hierarchy.
 *
 * ES6 focus: Recursion over nested arrays/objects
 *   (builds on Day 41)
 *
 * Task:
 * Search a nested { name, children: [...] } tree for a node matching
 * name; return true/false.
 *
 * Hint (spoiler — try first!):
 * Check the current node first, then recursively check each child, returning
 * true as soon as one matches.
 */

function hasPermission(tree, name) {
  // your code here
}

// ---- Test cases — run: node day-12.js ----
check("Test 1", hasPermission({ name: "admin", children: [{ name: "editor", children: [] }] }, "editor"), true);

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
