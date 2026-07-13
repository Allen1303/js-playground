/**
 * Day 16 — Price List Transformer 🟡   (Month 1, Day 16)
 * ------------------------------------------------------------------
 * Real-world:  * Applying a tax rate across every product price for display.
 *
 * ES6 focus: .map()
 *   [1, 2, 3].map(n => n * 2); // [2, 4, 6]
 *
 * Task:
 * Given an array of prices, return a new array with 8% tax applied,
 * rounded to 2 decimals.
 *
 * Hint (spoiler — try first!):
 * map(p => Math.round(p * 1.08 * 100) / 100)
 */

function applyTax(prices) {
  // your code here
}

// ---- Test cases — run: node day-16.js ----
check("Test 1", applyTax([10, 20]), [10.8, 21.6]);

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
  const pricesInput = document.getElementById("prices-input");
  const pricesTable = document.getElementById("prices-table");

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
    const prices = pricesInput.value.split(",").map((s) => parseFloat(s.trim())).filter((n) => !Number.isNaN(n));
    const result = applyTax(prices);

    pricesTable.innerHTML = "<tr><th>Before</th><th>After</th></tr>";
    prices.forEach((price, i) => {
      const after = result === undefined ? "—" : result[i];
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>$${price}</td><td>${after === undefined ? "—" : "$" + after}</td>`;
      pricesTable.appendChild(tr);
    });

    renderBadge(document.getElementById("badge-1"), applyTax([10, 20]), [10.8, 21.6]);
  }

  pricesInput.addEventListener("input", render);
  render();
}
