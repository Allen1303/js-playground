/**
 * Day 22 — Leaderboard Sorter 🟠   (Month 1, Day 22)
 * ------------------------------------------------------------------
 * Real-world:  * Sorting players by score, highest first, for a leaderboard.
 *
 * ES6 focus: .sort() with a comparator (careful: mutates!)
 *   [3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
 *
 * Task:
 * Return a NEW array of { name, score } sorted descending by score
 * (don't mutate the input).
 *
 * Hint (spoiler — try first!):
 * Copy first with [...players], then .sort((a, b) => b.score - a.score).
 */

function leaderboard(players) {
  // your code here
}

// ---- Test cases — run: node day-22.js ----
check("Test 1", leaderboard([{ name: "A", score: 10 }, { name: "B", score: 30 }]), [{ name: "B", score: 30 }, { name: "A", score: 10 }]);

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
