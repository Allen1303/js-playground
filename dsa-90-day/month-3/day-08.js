/**
 * Day 68 — Code Editor Bracket Validator 🟠   (Month 3, Day 8)
 * ------------------------------------------------------------------
 * Real-world:  * The "unmatched parenthesis" check in any code editor or linter.
 *
 * ES6 focus: Stack-based matching problem
 *   (builds on Day 66)
 *
 * Task:
 * Return true if all brackets ()[]{} in a string are properly matched
 * and nested.
 *
 * Hint (spoiler — try first!):
 * Push opening brackets onto a stack; on a closing bracket, pop and check it
 * matches the expected pair.
 */

function isValidBrackets(str) {
  // your code here
}

// ---- Test cases — run: node day-08.js ----
check("Test 1", isValidBrackets("({[]})"), true);
check("Test 2", isValidBrackets("({[})]"), false);

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
