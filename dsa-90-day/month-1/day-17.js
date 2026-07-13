/**
 * Day 17 — Active Users Filter 🟡   (Month 1, Day 17)
 * ------------------------------------------------------------------
 * Real-world:  * Showing only currently active users in an admin dashboard.
 *
 * ES6 focus: .filter()
 *   [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
 *
 * Task:
 * Return only users where active is true.
 *
 * Hint (spoiler — try first!):
 * filter(u => u.active)
 */

function activeUsers(users) {
  // your code here
}

// ---- Test cases — run: node day-17.js ----
check("Test 1", activeUsers([{ name: "A", active: true }, { name: "B", active: false }]), [{ name: "A", active: true }]);

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
