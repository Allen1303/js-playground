/**
 * Day 9 — Playlist Skip Track 🟢   (Month 1, Day 9)
 * ------------------------------------------------------------------
 * Real-world:  * Removing an item from a playlist without mutating the original array.
 *
 * ES6 focus: Array methods (slice, splice, push) + spread
 *   const copy = arr.slice(); // shallow copy, doesn't mutate arr
 *
 * Task:
 * Return a new array with the item at `index` removed, without mutating
 * the input.
 *
 * Hint (spoiler — try first!):
 * Combine slice(0, index) and slice(index + 1) with spread, or use filter
 * with the element's position.
 */

function removeTrack(playlist, index) {
  // your code here
}

// ---- Test cases — run: node day-09.js ----
check("Test 1", removeTrack(["a", "b", "c"], 1), ["a", "c"]);

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
