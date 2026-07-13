/**
 * Day 43 — Fibonacci: Recursive vs Memoized 🔴   (Month 2, Day 13)
 * ------------------------------------------------------------------
 * Real-world:  * Understanding why naive recursion gets slow — the same tradeoff shows up
 * in
 * caching expensive computations (like layout calculations).
 *
 * ES6 focus: Recursion + Map for memoization
 *   const cache = new Map();
 *   cache.has(5) ? cache.get(5) : cache.set(5, 55);
 *
 * Task:
 * Write plain recursive fib(n), then a memoized version fibMemo(n) using
 * a Map cache.
 *
 * Hint (spoiler — try first!):
 * In fibMemo, check the cache before recursing, and store the result in the
 * cache before returning it.
 */

function fib(n) {
  // your code here
}

function fibMemo(n, cache = new Map()) {
  // your code here
}

// ---- Test cases — run: node day-13.js ----
check("Test 1", fib(10), 55);
check("Test 2", fibMemo(40), 102334155); // should return instantly, unlike fib(40)

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
