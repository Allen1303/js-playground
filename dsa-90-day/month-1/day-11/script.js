/**
 * Day 11 — API Response Unpacker 🟢   (Month 1, Day 11)
 * ------------------------------------------------------------------
 * Real-world:  * Pulling only the fields you need out of a large API payload.
 *
 * ES6 focus: Object destructuring
 *   const { name, age } = { name: "Sam", age: 30, city: "NYC" };
 *
 * Task:
 * Destructure id and email out of a user object and return them formatted.
 *
 * Hint (spoiler — try first!):
 * const { id, email } = user; — ignore the rest of the object entirely.
 */

function getUserSummary(user) {
  // your code here
}

// ---- Test cases — run: node day-11.js ----
check("Test 1", getUserSummary({ id: 1, email: "a@b.com", extra: true }), "User 1: a@b.com");

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
  const idInput = document.getElementById("id-input");
  const emailInput = document.getElementById("email-input");
  const summaryOutput = document.getElementById("summary-output");

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
    const user = { id: Number(idInput.value), email: emailInput.value, extra: true };
    const result = getUserSummary(user);
    summaryOutput.textContent = result === undefined ? "Nothing rendered yet — implement getUserSummary()" : result;
    summaryOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), getUserSummary({ id: 1, email: "a@b.com", extra: true }), "User 1: a@b.com");
  }

  idInput.addEventListener("input", render);
  emailInput.addEventListener("input", render);
  render();
}
