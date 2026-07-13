/**
 * Day 83 — Website Crawler (DFS) 🟠   (Month 3, Day 23)
 * ------------------------------------------------------------------
 * Real-world:  * Crawling linked pages depth-first, following each link chain as deep as
 * possible before backtracking.
 *
 * ES6 focus: DFS traversal (recursive or with a stack)
 *   (builds on Day 81)
 *
 * Task:
 * Return the DFS visit order starting from a node.
 *
 * Hint (spoiler — try first!):
 * Recursive version: visit the node, mark it visited, then recurse into each
 * unvisited neighbor.
 */

function dfs(graph, start) {
  // your code here
}

// ---- Test cases — run: node day-23.js ----
const graph = new Map([["A", ["B", "C"]], ["B", ["A", "D"]], ["C", ["A"]], ["D", ["B"]]]);
check("Test 1", dfs(graph, "A"), ["A", "B", "D", "C"]);

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
