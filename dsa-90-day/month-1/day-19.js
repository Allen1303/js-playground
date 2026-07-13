/**
 * Day 19 — Find User By ID 🟡   (Month 1, Day 19)
 * ------------------------------------------------------------------
 * Real-world:  * Looking up a specific record, like fetching one user's profile.
 *
 * ES6 focus: .find() / .findIndex()
 *   [{ id: 1 }, { id: 2 }].find(u => u.id === 2); // {id:2}
 *
 * Task:
 * Return the user object matching id, or undefined if not found.
 *
 * Hint (spoiler — try first!):
 * find(u => u.id === id)
 */

function findUserById(users, id) {
  // your code here
}

// ---- Test cases — run: node day-19.js ----
check("Test 1", findUserById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2), { id: 2, name: "B" });

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
