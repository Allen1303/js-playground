/**
 * Day 84 — Network Cluster Detection (Connected Components) 🔴   (Month 3, Day 24)
 * ------------------------------------------------------------------
 * Real-world:  * Finding isolated friend groups/clusters in a social graph with no path
 * between them.
 *
 * ES6 focus: Repeated BFS/DFS across all unvisited nodes
 *   (builds on Days 82-83)
 *
 * Task:
 * Return the number of connected components in a graph.
 *
 * Hint (spoiler — try first!):
 * Loop through every node; whenever you find one not yet visited, run a full
 * BFS/DFS from it and count that as one component.
 */

function countConnectedComponents(graph) {
  // your code here
}

// ---- Test cases — run: node day-24.js ----
const graph = new Map([["A", ["B"]], ["B", ["A"]], ["C", ["D"]], ["D", ["C"]]]);
check("Test 1", countConnectedComponents(graph), 2);

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
