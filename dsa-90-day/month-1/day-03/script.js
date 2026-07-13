/**
 * Day 3 — Shipping Cost Defaults 🟢   (Month 1, Day 3)
 * ------------------------------------------------------------------
 * Real-world:  * Falling back to a standard shipping rate when the user hasn't picked one.
 *
 * ES6 focus: Default parameters
 *   function greet(name = "friend") {
 *     return `Hi, ${name}`;
 *   }
 *   greet(); // "Hi, friend"
 *
 * Task:
 * Calculate shipping cost, defaulting to "standard" shipping if no method
 * is given. standard: weight * 2, express: weight * 5.
 *
 * Hint (spoiler — try first!):
 * Use a ternary or if/else keyed off `method` inside the function body.
 */

function shippingCost(weight, method = "standard") {
  // your code here
}

// ---- Test cases — run: node day-03.js ----
check("Test 1", shippingCost(3), 6);
check("Test 2", shippingCost(3, "express"), 15);

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
  const weightInput = document.getElementById("weight-input");
  const methodInput = document.getElementById("method-input");
  const costOutput = document.getElementById("cost-output");

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
    const weight = parseFloat(weightInput.value);
    const method = methodInput.value;
    const result = method === "" ? shippingCost(weight) : shippingCost(weight, method);
    costOutput.textContent = result === undefined ? "Nothing rendered yet — implement shippingCost()" : `$${result}`;
    costOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), shippingCost(3), 6);
    renderBadge(document.getElementById("badge-2"), shippingCost(3, "express"), 15);
  }

  weightInput.addEventListener("input", render);
  methodInput.addEventListener("change", render);
  render();
}
