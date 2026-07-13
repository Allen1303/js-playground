/**
 * Day 87 — Cash Register Optimal Change (Coin Change) 🔴   (Month 3, Day 27)
 * ------------------------------------------------------------------
 * Real-world:  * Making exact change with the fewest coins/bills possible.
 *
 * ES6 focus: DP with a 1D array (bottom-up)
 *   (builds on Day 86)
 *
 * Task:
 * Return the fewest coins needed to make amount, or -1 if impossible.
 *
 * Hint (spoiler — try first!):
 * Build an array dp[0..amount] where dp[0] = 0; for each amount, try every
 * coin and take the minimum of dp[amount - coin] + 1.
 */

function minCoins(coins, amount) {
  // your code here
}

// ---- Test cases — run: node day-27.js ----
check("Test 1", minCoins([1, 5, 10, 25], 30), 2); // a quarter + a nickel

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
