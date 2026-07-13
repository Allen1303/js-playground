/**
 * Day 50 — Linear vs Binary Comparison 🟡   (Month 2, Day 20)
 * ------------------------------------------------------------------
 * Real-world:  * Justifying to a teammate why you'd sort data first before searching it
 * repeatedly.
 *
 * ES6 focus: console.time / console.timeEnd benchmarking
 *   console.time("x");
 *   // ...work...
 *   console.timeEnd("x");
 *
 * Task:
 * Generate a large sorted array (e.g. 100,000 numbers) and time both
 * linearSearch (Day 47) and binarySearch (Day 48) on the same searches.
 *
 * Hint (spoiler — try first!):
 * Generate a large sorted array and time both approaches on the same
 * searches to see the difference concretely.
 */

function timeSearches() {
  const arr = Array.from({ length: 100000 }, (_, i) => i);
  const target = 99999;
  // time linearSearch(arr, target) and binarySearch(arr, target) here
}

timeSearches();

// ---- Test cases — run: node day-20.js ----
console.log("Day 50 is a benchmarking exercise — check the console.time output for both approaches.");

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
