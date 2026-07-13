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

// ---- UI wiring (browser only, ignored by `node script.js`) ----
if (typeof document !== "undefined") {
  const item1Price = document.getElementById("item1-price");
  const item1Qty = document.getElementById("item1-qty");
  const item2Price = document.getElementById("item2-price");
  const item2Qty = document.getElementById("item2-qty");
  const totalOutput = document.getElementById("total-output");

  function renderBadge(el, actual, expected) {
    if (actual === undefined) {
      el.textContent = "not implemented";
      el.className = "badge pending";
      return;
    }
    const pass = JSON.stringify(actual) === JSON.stringify(expected);
    el.textContent = pass ? "pass" : "fail";
    el.className = "badge " + (pass ? "pass" : "fail");
  }

  function render() {
    const items = [
      { price: Number(item1Price.value), qty: Number(item1Qty.value) },
      { price: Number(item2Price.value), qty: Number(item2Qty.value) },
    ];
    const result = cartTotal(items);
    totalOutput.textContent = result === undefined ? "Nothing rendered yet — implement cartTotal()" : `$${result}`;
    totalOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), cartTotal([{ price: 10, qty: 2 }, { price: 5, qty: 1 }]), 25);
  }

  [item1Price, item1Qty, item2Price, item2Qty].forEach((el) => el.addEventListener("input", render));
  render();
}
