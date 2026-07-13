/**
 * Day 62 — Browser History Back/Forward 🟠   (Month 3, Day 2)
 * ------------------------------------------------------------------
 * Real-world:  * Implementing insert/delete at arbitrary positions, like removing a visited
 * page from history.
 *
 * ES6 focus: Linked list insert/delete by position
 *   (builds on Day 61)
 *
 * Task:
 * Add insertAt(value, index) and removeAt(index) methods to your linked
 * list.
 *
 * Hint (spoiler — try first!):
 * Walk to the node just before the target index, then rewire its .next
 * pointer.
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
  insertAt(value, index) {
    // your code here
  }
  removeAt(index) {
    // your code here
  }
}

// ---- Test cases — run: node day-02.js ----
const list = new LinkedList();
["a", "b", "c"].forEach(v => list.add(v));
list.insertAt("x", 1);
check("Test 1", list.toArray(), ["a", "x", "b", "c"]);
list.removeAt(0);
check("Test 2", list.toArray(), ["x", "b", "c"]);

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
