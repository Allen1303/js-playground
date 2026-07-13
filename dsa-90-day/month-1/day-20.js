/**
 * Day 20 — Form Validation Gate 🟠   (Month 1, Day 20)
 * ------------------------------------------------------------------
 * Real-world:  * Checking that every required field passed validation before allowing
 * submit.
 *
 * ES6 focus: .every() / .some()
 *   [1, 2, 3].every(n => n > 0); // true
 *   [1, -2, 3].some(n => n < 0); // true
 *
 * Task:
 * Given an array of { field, valid } objects, return true only if all
 * fields are valid.
 *
 * Hint (spoiler — try first!):
 * every(f => f.valid)
 */

function isFormValid(fields) {
  // your code here
}

// ---- Test cases — run: node day-20.js ----
check("Test 1", isFormValid([{ field: "email", valid: true }, { field: "age", valid: true }]), true);
check("Test 2", isFormValid([{ field: "email", valid: false }]), false);

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
