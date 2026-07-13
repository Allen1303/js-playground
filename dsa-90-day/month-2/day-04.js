/**
 * Day 34 — App Config Module (IIFE) 🟠   (Month 2, Day 4)
 * ------------------------------------------------------------------
 * Real-world:  * Keeping internal config private while exposing only what's needed, like an
 * old-school module pattern.
 *
 * ES6 focus: IIFE (Immediately Invoked Function Expression) + closures
 *   const config = (() => {
 *     const secret = "abc";
 *     return { getSecretLength: () => secret.length };
 *   })();
 *
 * Task:
 * Build an IIFE-based module exposing getVolume() and setVolume(v),
 * keeping the actual value private.
 *
 * Hint (spoiler — try first!):
 * Declare the private variable inside the IIFE, and return an object with
 * the two accessor functions.
 */

const audioModule = (() => {
  // your code here
})();

// ---- Test cases — run: node day-04.js ----
audioModule.setVolume(80);
check("Test 1", audioModule.getVolume(), 80);

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
