/**
 * Day 28 — Username Padder/Validator 🟡   (Month 1, Day 28)
 * ------------------------------------------------------------------
 * Real-world:  * Standardizing display IDs, like zero-padding order numbers.
 *
 * ES6 focus: .padStart() / .padEnd()
 *   "5".padStart(3, "0"); // "005"
 *
 * Task:
 * Pad an order number to 6 digits with leading zeros.
 *
 * Hint (spoiler — try first!):
 * Convert to string first: String(num).padStart(6, "0").
 */

function formatOrderId(num) {
  // your code here
}

// ---- Test cases — run: node day-28.js ----
check("Test 1", formatOrderId(42), "000042");

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
  const numInput = document.getElementById("num-input");
  const orderOutput = document.getElementById("order-output");

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
    const result = formatOrderId(Number(numInput.value));
    orderOutput.textContent = result === undefined ? "Nothing rendered yet — implement formatOrderId()" : `#${result}`;
    orderOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), formatOrderId(42), "000042");
  }

  numInput.addEventListener("input", render);
  render();
}
