/**
 * Day 2 — Order Total Formatter 🟢   (Month 1, Day 2)
 * ------------------------------------------------------------------
 * Real-world:  * Formatting prices consistently in a checkout flow.
 *
 * ES6 focus: Arrow functions
 *   const double = x => x * 2;
 *   console.log(double(4)); // 8
 *
 * Task:
 * Convert this idea to an arrow function that formats a price to two
 * decimals with a $ prefix.
 *
 * Hint (spoiler — try first!):
 * Number.prototype.toFixed(2) gives you two decimal places as a string.
 */

const formatPrice = (amount) => {
  // your code here
};

// ---- Test cases — run: node day-02.js ----
check("Test 1", formatPrice(19.5), "$19.50");
check("Test 2", formatPrice(3), "$3.00");

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
  const amountInput = document.getElementById("amount-input");
  const priceOutput = document.getElementById("price-output");

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
    const amount = parseFloat(amountInput.value);
    const result = formatPrice(amount);
    priceOutput.textContent = result === undefined ? "Nothing rendered yet — implement formatPrice()" : result;
    priceOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), formatPrice(19.5), "$19.50");
    renderBadge(document.getElementById("badge-2"), formatPrice(3), "$3.00");
  }

  amountInput.addEventListener("input", render);
  render();
}
