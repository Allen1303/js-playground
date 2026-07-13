/**
 * Day 14 — Dynamic Form Field Builder 🟡   (Month 1, Day 14)
 * ------------------------------------------------------------------
 * Real-world:  * Building an object where the key name itself is a variable (e.g. form
 * field
 * names from a schema).
 *
 * ES6 focus: Computed property names
 *   const key = "email";
 *   const obj = { [key]: "test@test.com" };
 *
 * Task:
 * Given a field name and value, return an object with that dynamic key.
 *
 * Hint (spoiler — try first!):
 * { [fieldName]: value } — the brackets evaluate the variable as the key.
 */

function buildField(fieldName, value) {
  // your code here
}

// ---- Test cases — run: node day-14.js ----
check("Test 1", buildField("username", "allen"), { username: "allen" });

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
