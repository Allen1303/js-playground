/**
 * Day 66 — Undo Feature (Stack) 🟡   (Month 3, Day 6)
 * ------------------------------------------------------------------
 * Real-world:  * A text editor's undo button — last action taken is the first undone.
 *
 * ES6 focus: Stack via array (push/pop)
 *   class Stack {
 *     constructor() { this.items = []; }
 *     push(item) { this.items.push(item); }
 *     pop() { return this.items.pop(); }
 *     peek() { return this.items[this.items.length - 1]; }
 *   }
 *
 * Task:
 * Use a Stack class to implement simulateUndo(actions), returning actions
 * popped off in reverse order of entry.
 *
 * Hint (spoiler — try first!):
 * Push everything in order, then pop repeatedly until the stack is empty.
 */

class Stack {
  constructor() { this.items = []; }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}

function simulateUndo(actions) {
  // your code here, using the Stack class
}

// ---- Test cases — run: node day-06.js ----
check("Test 1", simulateUndo(["type A", "type B", "type C"]), ["type C", "type B", "type A"]);

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
