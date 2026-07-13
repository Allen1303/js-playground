/**
 * Day 61 — Build a Playlist (Singly Linked List) 🟠   (Month 3, Day 1)
 * ------------------------------------------------------------------
 * Real-world:  * A music playlist where each song only needs to know the "next" song.
 *
 * ES6 focus: Classes + linked list nodes
 *   class Node {
 *     constructor(value) {
 *       this.value = value;
 *       this.next = null;
 *     }
 *   }
 *
 * Task:
 * Build a LinkedList class with add(value) appending to the end, and
 * toArray() for easy checking.
 *
 * Hint (spoiler — try first!):
 * If head is null, the new node becomes head. Otherwise walk next pointers
 * until you find the last node and attach there.
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
    // your code here
  }
  toArray() {
    // your code here
  }
}

// ---- Test cases — run: node day-01.js ----
const list = new LinkedList();
list.add("song1");
list.add("song2");
check("Test 1", list.toArray(), ["song1", "song2"]);

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
