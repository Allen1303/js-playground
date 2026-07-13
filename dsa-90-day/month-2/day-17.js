/**
 * Day 47 — Product Catalog Linear Search 🟡   (Month 2, Day 17)
 * ------------------------------------------------------------------
 * Real-world:  * Searching an unsorted product list for a matching SKU.
 *
 * ES6 focus: Linear search, O(n)
 *   (no isolated snippet — see task)
 *
 * Task:
 * Return the index of target in arr, or -1 if not found — without using
 * .indexOf().
 *
 * Hint (spoiler — try first!):
 * Loop through with an index, compare each element, return the index on
 * match.
 */

function linearSearch(arr, target) {
  // your code here
}

// ---- Test cases — run: node day-17.js ----
check("Test 1", linearSearch([5, 3, 8, 1], 8), 2);

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
