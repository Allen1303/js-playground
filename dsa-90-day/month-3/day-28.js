/**
 * Day 88 — Plagiarism Diff Basis (Longest Common Subsequence) 🔴   (Month 3, Day 28)
 * ------------------------------------------------------------------
 * Real-world:  * The core idea behind git diff and plagiarism checkers — finding shared
 * structure between two texts.
 *
 * ES6 focus: 2D DP table
 *   (builds on Day 87)
 *
 * Task:
 * Return the length of the longest common subsequence of two strings.
 *
 * Hint (spoiler — try first!):
 * Build a 2D grid where dp[i][j] is the LCS length of the first i and j
 * characters; if characters match, add 1 from the diagonal, else take the
 * max of the cell above or to the left.
 */

function longestCommonSubsequence(strA, strB) {
  // your code here
}

// ---- Test cases — run: node day-28.js ----
check("Test 1", longestCommonSubsequence("abcde", "ace"), 3);

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
