/**
 * Day 82 — Friend Suggestion (BFS) 🟠   (Month 3, Day 22)
 * ------------------------------------------------------------------
 * Real-world:  * Suggesting "friends of friends" — a breadth-first search outward from one
 * person.
 *
 * ES6 focus: BFS traversal on a graph
 *   (builds on Days 67, 81)
 *
 * Task:
 * Return the BFS visit order starting from a node.
 *
 * Hint (spoiler — try first!):
 * Use a queue and a visited Set; enqueue neighbors only if they haven't been
 * visited yet.
 */

function bfs(graph, start) {
  // your code here
}

// ---- Test cases — run: node day-22.js ----
const graph = new Map([["A", ["B", "C"]], ["B", ["A", "D"]], ["C", ["A"]], ["D", ["B"]]]);
check("Test 1", bfs(graph, "A"), ["A", "B", "C", "D"]);

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
