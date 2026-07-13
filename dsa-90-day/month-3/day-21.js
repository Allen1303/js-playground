/**
 * Day 81 — Social Network Representation 🟠   (Month 3, Day 21)
 * ------------------------------------------------------------------
 * Real-world:  * Modeling friend connections as a graph — the foundation for "people you
 * may
 * know".
 *
 * ES6 focus: Adjacency list using a Map of arrays
 *   (no isolated snippet — see task)
 *
 * Task:
 * Build a Map<node, node[]> adjacency list from a list of edges
 * (undirected).
 *
 * Hint (spoiler — try first!):
 * For each edge [a, b], add b to a's list and a to b's list (assuming an
 * undirected graph).
 */

function buildGraph(edges) {
  // your code here
}

// ---- Test cases — run: node day-21.js ----
const g = buildGraph([["A", "B"], ["A", "C"]]);
check("Test 1", Object.fromEntries(g), { A: ["B", "C"], B: ["A"], C: ["A"] });

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
