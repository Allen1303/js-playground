/**
 * Day 58 — Dedupe Email List with Set 🟡   (Month 2, Day 28)
 * ------------------------------------------------------------------
 * Real-world:  * Removing duplicate emails before sending a newsletter.
 *
 * ES6 focus: Set
 *   [...new Set([1, 1, 2, 3])]; // [1, 2, 3]
 *
 * Task:
 * Remove duplicates from an email list while preserving order.
 *
 * Hint (spoiler — try first!):
 * [...new Set(emails)]
 */

function dedupeEmails(emails) {
  // your code here
}

// ---- Test cases — run: node day-28.js ----
check("Test 1", dedupeEmails(["a@x.com", "b@x.com", "a@x.com"]), ["a@x.com", "b@x.com"]);

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
