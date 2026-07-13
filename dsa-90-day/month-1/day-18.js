/**
 * Day 18 — Cart Total Calculator 🟠   (Month 1, Day 18)
 * ------------------------------------------------------------------
 * Real-world:  * Calculating the total cost of a shopping cart at checkout.
 *
 * ES6 focus: .reduce()
 *   [1, 2, 3].reduce((sum, n) => sum + n, 0); // 6
 *
 * Task:
 * Given cart items { price, qty }, return the total cost.
 *
 * Hint (spoiler — try first!):
 * Accumulate sum + item.price * item.qty in the reducer.
 */

function cartTotal(items) {
  // your code here
}

// ---- Test cases — run: node day-18.js ----
check("Test 1", cartTotal([{ price: 10, qty: 2 }, { price: 5, qty: 1 }]), 25);

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
