/**
 * Day 74 — Session Window Tracker (Longest Substring Without Repeat) 🔴   (Month 3, Day 14)
 * ------------------------------------------------------------------
 * Real-world:  * Tracking the longest stretch of unique actions in a user session
 * (fraud/bot
 * detection heuristic).
 *
 * ES6 focus: Sliding window + Set/Map combined
 *   (builds on Days 38, 73)
 *
 * Task:
 * Return the length of the longest substring without repeating
 * characters.
 *
 * Hint (spoiler — try first!):
 * Expand a window with a right pointer; when you hit a repeat, shrink from
 * the left until the repeat is gone, tracking the max window size seen.
 */

function longestUniqueSubstring(str) {
  // your code here
}

// ---- Test cases — run: node day-14.js ----
check("Test 1", longestUniqueSubstring("abcabcbb"), 3); // "abc"

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
