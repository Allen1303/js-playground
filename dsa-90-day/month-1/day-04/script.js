/**
 * Day 4 — Membership Discount Checker 🟢   (Month 1, Day 4)
 * ------------------------------------------------------------------
 * Real-world:  * Conditional pricing logic for member vs non-member checkout.
 *
 * ES6 focus: Ternary operator
 *   const status = age >= 18 ? "adult" : "minor";
 *
 * Task:
 * Return a discount percentage: 10 if isMember is true, otherwise 0,
 * using a single ternary expression (no if/else).
 *
 * Hint (spoiler — try first!):
 * condition ? valueIfTrue : valueIfFalse — return it directly.
 */

const getDiscount = (isMember) => {
  // your code here
};

// ---- Test cases — run: node day-04.js ----
check("Test 1", getDiscount(true), 10);
check("Test 2", getDiscount(false), 0);

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
  const memberInput = document.getElementById("member-input");
  const discountOutput = document.getElementById("discount-output");

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
    const result = getDiscount(memberInput.checked);
    discountOutput.textContent = result === undefined ? "Nothing rendered yet — implement getDiscount()" : `${result}% off`;
    discountOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), getDiscount(true), 10);
    renderBadge(document.getElementById("badge-2"), getDiscount(false), 0);
  }

  memberInput.addEventListener("change", render);
  render();
}
