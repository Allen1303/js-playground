/**
 * Day 41 — Folder Size Calculator 🟠   (Month 2, Day 11)
 * ------------------------------------------------------------------
 * Real-world:  * Recursively summing file sizes in a nested folder structure.
 *
 * ES6 focus: Basic recursion
 *   function factorial(n) {
 *     return n <= 1 ? 1 : n * factorial(n - 1);
 *   }
 *
 * Task:
 * Given a nested folder object ({ size, children: [...] }), return the
 * total size including all children.
 *
 * Hint (spoiler — try first!):
 * Base case: no children -> return size. Recursive case: size + sum of
 * folderSize(child) for each child.
 */

function folderSize(folder) {
  // your code here
}

// ---- Test cases — run: node day-11.js ----
check("Test 1", folderSize({ size: 10, children: [{ size: 5, children: [] }] }), 15);

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
