/**
 * Day 7 — Merge Shopping Carts 🟢   (Month 1, Day 7)
 * ------------------------------------------------------------------
 * Real-world:  * Combining two guest carts when a user logs in.
 *
 * ES6 focus: Spread operator on arrays
 *   const combined = [...arr1, ...arr2];
 *
 * Task:
 * Merge two arrays of cart item names into one array without modifying
 * the originals.
 *
 * Hint (spoiler — try first!):
 * return [...cartA, ...cartB];
 */

function mergeCarts(cartA, cartB) {
  // your code here
}

// ---- Test cases — run: node day-07.js ----
check("Test 1", mergeCarts(["shirt"], ["shoes", "hat"]), ["shirt", "shoes", "hat"]);

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
