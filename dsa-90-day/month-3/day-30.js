/**
 * Day 90 — Capstone: Mini Task Scheduler 🔴   (Month 3, Day 30)
 * ------------------------------------------------------------------
 * Real-world:  * A simplified version of a real task scheduler/queue system (think cron +
 * priority handling), combining nearly everything from the past 89 days.
 *
 * ES6 focus: Classes, closures, Map, recursion, queues/stacks — your choice of best
tool per piece
 *   (capstone — draws on Days 41-45, 76-85)
 *
 * Task:
 * Build a TaskScheduler with addTask(name, priority, dependsOn = []) and
 * run(), where run() returns tasks in a valid execution order respecting
 * dependencies (topological sort — DFS on a graph in disguise).
 *
 * Hint (spoiler — try first!):
 * This is topological sort: DFS from each task, visiting all of its
 * dependencies first, and only adding a task to the result AFTER all its
 * dependencies have been added (post-order, like Day 76).
 */

class TaskScheduler {
  constructor() {
    this.tasks = new Map(); // name -> { priority, dependsOn }
  }
  addTask(name, priority, dependsOn = []) {
    // your code here
  }
  run() {
    // your code here — return array of task names in valid execution order
  }
}

// ---- Test cases — run: node day-30.js ----
const s = new TaskScheduler();
s.addTask("deploy", 1, ["test"]);
s.addTask("test", 1, ["build"]);
s.addTask("build", 1);
check("Test 1", s.run(), ["build", "test", "deploy"]);

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
