/**
 * Day 1 — Greeting Card Generator 🟢   (Month 1, Day 1)
 * ------------------------------------------------------------------
 * Real-world:  * Personalizing UI text is everywhere (emails, dashboards, notifications).
 *
 * ES6 focus: let/const and template literals
 *   const name = "Sam";
 *   console.log(`Hello, ${name}!`); // Hello, Sam!
 *
 * Task:
 * Write a function that takes a user's name and the time of day ("morning",
 * "afternoon", "evening") and returns a greeting using a template literal.
 *
 * Hint (spoiler — try first!):
 * Use backticks and ${} to interpolate both variables into one string. Avoid
 * + concatenation.
 */

function greetUser(name, timeOfDay) {
  // your code here
}

// ---- Test cases — run: node day-01.js ----
check("Test 1", greetUser("Sam", "morning"), "Good morning, Sam!");
check("Test 2", greetUser("Ava", "evening"), "Good evening, Ava!");

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
  const nameInput = document.getElementById("name-input");
  const timeInput = document.getElementById("time-input");
  const cardOutput = document.getElementById("card-output");

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
    const result = greetUser(nameInput.value || "Sam", timeInput.value);
    cardOutput.textContent = result === undefined ? "Nothing rendered yet — implement greetUser()" : result;
    cardOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), greetUser("Sam", "morning"), "Good morning, Sam!");
    renderBadge(document.getElementById("badge-2"), greetUser("Ava", "evening"), "Good evening, Ava!");
  }

  nameInput.addEventListener("input", render);
  timeInput.addEventListener("change", render);
  render();
}
