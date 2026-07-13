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
