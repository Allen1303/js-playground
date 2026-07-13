/**
 * Day 8 — Variadic Total Calculator 🟢   (Month 1, Day 8)
 * ------------------------------------------------------------------
 * Real-world:  * A function that sums however many charges get passed to it (tips, fees,
 * taxes).
 *
 * ES6 focus: Rest parameters
 *   function sumAll(...nums) {
 *     return nums.reduce((a, b) => a + b, 0);
 *   }
 *
 * Task:
 * Write calculateTotal to accept any number of charge amounts and return
 * their sum.
 *
 * Hint (spoiler — try first!):
 * ...charges collects all arguments into a real array you can reduce over.
 */

function calculateTotal(...charges) {
  // your code here
}

// ---- Test cases — run: node day-08.js ----
check("Test 1", calculateTotal(10, 5, 2.5), 17.5);
check("Test 2", calculateTotal(), 0);

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
  const chargesInput = document.getElementById("charges-input");
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

  function parseCharges(raw) {
    return raw
      .split(",")
      .map((s) => parseFloat(s.trim()))
      .filter((n) => !Number.isNaN(n));
  }

  function render() {
    const charges = parseCharges(chargesInput.value);
    const result = calculateTotal(...charges);
    totalOutput.textContent = result === undefined ? "Nothing rendered yet — implement calculateTotal()" : `$${result}`;
    totalOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), calculateTotal(10, 5, 2.5), 17.5);
    renderBadge(document.getElementById("badge-2"), calculateTotal(), 0);
  }

  chargesInput.addEventListener("input", render);
  render();
}
