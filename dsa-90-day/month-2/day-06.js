/**
 * Day 36 — Seat Map Renderer 🟠   (Month 2, Day 6)
 * ------------------------------------------------------------------
 * Real-world:  * Rendering a theater/plane seat grid, row by row, seat by seat.
 *
 * ES6 focus: Nested loops
 *   for (let i = 0; i < 2; i++) {
 *     for (let j = 0; j < 2; j++) console.log(i, j);
 *   }
 *
 * Task:
 * Given rows and cols, return an array of seat labels like "A1", "A2",
 * "B1"...
 *
 * Hint (spoiler — try first!):
 * Convert row index to a letter with String.fromCharCode(65 + i).
 */

function generateSeatMap(rows, cols) {
  // your code here
}

// ---- Test cases — run: node day-06.js ----
check("Test 1", generateSeatMap(2, 2), ["A1", "A2", "B1", "B2"]);

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
