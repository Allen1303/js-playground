/**
 * Day 13 — Config Object Builder 🟡   (Month 1, Day 13)
 * ------------------------------------------------------------------
 * Real-world:  * Building a config object from separate variables, like assembling request
 * options.
 *
 * ES6 focus: Shorthand property/method names
 *   const x = 1, y = 2;
 *   const point = { x, y, log() { console.log(this.x); } };
 *
 * Task:
 * Given host, port, and secure, build a config object using shorthand
 * syntax, plus a url() method that returns the full URL string.
 *
 * Hint (spoiler — try first!):
 * Use secure ? "https" : "http" inside url(), referencing this.host /
 * this.port.
 */

function buildConfig(host, port, secure) {
  // return an object using shorthand + a url() method
}

// ---- Test cases — run: node day-13.js ----
check("Test 1", buildConfig("api.com", 443, true).url(), "https://api.com:443");

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
