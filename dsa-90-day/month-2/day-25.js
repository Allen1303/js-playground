/**
 * Day 55 — Built-in Sort Showdown 🟡   (Month 2, Day 25)
 * ------------------------------------------------------------------
 * Real-world:  * Knowing when to write your own sort vs. trust the engine's.
 *
 * ES6 focus: .sort() with a comparator
 *   [10, 1, 5].sort((a, b) => a - b); // [1, 5, 10]
 *
 * Task:
 * Re-solve Day 51's problem using .sort(), then add a one-line comment
 * comparing readability/performance to your hand-rolled version.
 *
 * Hint (spoiler — try first!):
 * [...scores].sort((a, b) => a - b) — don't forget the comparator or numbers
 * sort as strings.
 */

function builtInSort(scores) {
  // your code here
}

// comment: how does this compare to bubbleSort from Day 51?

// ---- Test cases — run: node day-25.js ----
check("Test 1", builtInSort([88, 45, 92, 60]), [45, 60, 88, 92]);

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
