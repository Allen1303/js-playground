/**
 * Day 63 — Undo/Redo Chain Reversal 🔴   (Month 3, Day 3)
 * ------------------------------------------------------------------
 * Real-world:  * Reversing a linked history chain, e.g. replaying actions backward.
 *
 * ES6 focus: In-place linked list reversal
 *   (builds on Days 61-62)
 *
 * Task:
 * Add a reverse() method that reverses the list in place (rewiring
 * pointers, not creating a new list).
 *
 * Hint (spoiler — try first!):
 * Track prev, current, and next as you walk the list, flipping each node's
 * .next to point backward.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() { this.head = null; }
  add(value) {
    if (!this.head) { this.head = new Node(value); return; }
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = new Node(value);
  }
  toArray() {
    const out = [];
    let cur = this.head;
    while (cur) { out.push(cur.value); cur = cur.next; }
    return out;
  }
  reverse() {
    // your code here
  }
}

// ---- Test cases — run: node day-03.js ----
const list = new LinkedList();
["a", "b", "c"].forEach(v => list.add(v));
list.reverse();
check("Test 1", list.toArray(), ["c", "b", "a"]);

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
