/**
 * Day 72 — Contact Grouping (Group Anagrams) 🔴   (Month 3, Day 12)
 * ------------------------------------------------------------------
 * Real-world:  * Grouping contact names that are letter-rearrangements of each other
 * (data-cleanup scenario).
 *
 * ES6 focus: Map with a computed sorted-string key
 *   (builds on Days 29, 59)
 *
 * Task:
 * Group an array of words into anagram groups.
 *
 * Hint (spoiler — try first!):
 * Sort each word's letters to build a shared key; group words with matching
 * keys in a Map.
 */

function groupAnagrams(words) {
  // your code here
}

// ---- Test cases — run: node day-12.js ----
const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
check("Test 1", result.length, 3); // order of groups may vary, but there should be 3 groups

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
