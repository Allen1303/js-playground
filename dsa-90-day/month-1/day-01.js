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
