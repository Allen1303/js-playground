/**
 * Day 85 — Shortest Route on an Unweighted Map (BFS Shortest Path) 🔴   (Month 3, Day 25)
 * ------------------------------------------------------------------
 * Real-world:  * Finding the fewest number of hops between two subway stops (unweighted
 * graph).
 *
 * ES6 focus: BFS adapted to track path length/predecessors
 *   (builds on Day 82)
 *
 * Task:
 * Return the shortest path (array of nodes) between start and end.
 *
 * Hint (spoiler — try first!):
 * Track each node's predecessor as you BFS; once you reach end, walk
 * predecessors backward to reconstruct the path.
 */

function shortestPath(graph, start, end) {
  // your code here
}

// ---- Test cases — run: node day-25.js ----
const graph = new Map([["A", ["B", "D"]], ["B", ["A", "C"]], ["D", ["A", "C"]], ["C", ["B", "D"]]]);
const path = shortestPath(graph, "A", "C");
check("Test 1", path.length, 3); // either A-B-C or A-D-C is valid

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
