/**
 * Day 54 — Stability Check 🟡   (Month 2, Day 24)
 * ------------------------------------------------------------------
 * Real-world:  * Why "stable" sorting matters — e.g. sorting orders by status shouldn't
 * reshuffle same-status orders' original time order.
 *
 * ES6 focus: Stable sorting (adapt Day 53's insertion sort with a comparator)
 *   (builds on Day 53)
 *
 * Task:
 * Given orders { id, status, time } already sorted by time, sort by
 * status using insertion sort, keeping same-status orders in their
 * original relative order.
 *
 * Hint (spoiler — try first!):
 * Only swap when the earlier item is strictly "greater" than the later one —
 * never swap on equal values.
 */

function sortByStatusStable(orders) {
  // your code here
}

// ---- Test cases — run: node day-24.js ----
const orders = [
  { id: 1, status: "b", time: 1 },
  { id: 2, status: "a", time: 2 },
  { id: 3, status: "b", time: 3 },
];
check("Test 1", sortByStatusStable(orders).map(o => o.id), [2, 1, 3]);

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
