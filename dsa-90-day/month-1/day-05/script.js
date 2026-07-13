/**
 * Day 5 — Login Attempt Message 🟡   (Month 1, Day 5)
 * ------------------------------------------------------------------
 * Real-world:  * Combining several ES6 features into one small utility, like a login form
 * would.
 *
 * ES6 focus: Template literals + arrow functions + default params, together
 *   (no new syntax — combine Days 1-4)
 *
 * Task:
 * Build a login attempt message. If attemptsLeft isn't passed, default it to
 * 3.
 *
 * Hint (spoiler — try first!):
 * This is Days 1-4 combined into one function — reuse what you already
 * wrote.
 */

const loginMessage = (username, attemptsLeft = 3) => {
  // your code here
};

// ---- Test cases — run: node day-05.js ----
check("Test 1", loginMessage("allen"), "allen has 3 attempt(s) left.");
check("Test 2", loginMessage("allen", 1), "allen has 1 attempt(s) left.");

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
  const usernameInput = document.getElementById("username-input");
  const attemptsInput = document.getElementById("attempts-input");
  const loginOutput = document.getElementById("login-output");

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
    const username = usernameInput.value || "allen";
    const raw = attemptsInput.value;
    const result = raw === "" ? loginMessage(username) : loginMessage(username, Number(raw));
    loginOutput.textContent = result === undefined ? "Nothing rendered yet — implement loginMessage()" : result;
    loginOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), loginMessage("allen"), "allen has 3 attempt(s) left.");
    renderBadge(document.getElementById("badge-2"), loginMessage("allen", 1), "allen has 1 attempt(s) left.");
  }

  usernameInput.addEventListener("input", render);
  attemptsInput.addEventListener("input", render);
  render();
}
