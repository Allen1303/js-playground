/**
 * Day 40 — PIN Security Validator (Prime Check) 🟠   (Month 2, Day 10)
 * ------------------------------------------------------------------
 * Real-world:  * A toy security rule requiring a PIN's digit sum to be prime.
 *
 * ES6 focus: Loop-based prime checking
 *   (no isolated snippet — see task)
 *
 * Task:
 * Write isPrime(n), then use it to validate that a PIN's digit sum is
 * prime.
 *
 * Hint (spoiler — try first!):
 * Only check divisors up to Math.sqrt(n) for efficiency.
 */

function isPrime(n) {
  // your code here
}

function isPinSecure(pin) {
  // sum digits, then check isPrime
}

// ---- Test cases — run: node day-10.js ----
check("Test 1", isPrime(7), true);
check("Test 2", isPrime(8), false);
check("Test 3", isPinSecure("1234"), false); // digit sum 10, not prime

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
