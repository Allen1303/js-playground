/**
 * Day 6 — Coordinate Parser 🟢   (Month 1, Day 6)
 * ------------------------------------------------------------------
 * Real-world:  * Reading structured data out of an API response (e.g. a [lat, lng] pair).
 *
 * ES6 focus: Array destructuring
 *   const [x, y] = [10, 20];
 *   console.log(x, y); // 10 20
 *
 * Task:
 * Destructure a [lat, lng] pair and return a formatted string.
 *
 * Hint (spoiler — try first!):
 * Destructure directly in the function signature: function
 * formatCoords([lat, lng]).
 */

function formatCoords(coords) {
  // your code here
}

// ---- Test cases — run: node day-06.js ----
check("Test 1", formatCoords([40.7, -74.0]), "Lat: 40.7, Lng: -74");

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
