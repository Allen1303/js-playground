/**
 * Day 89 — Capstone: Browser Cache (LRU Cache) 🔴   (Month 3, Day 29)
 * ------------------------------------------------------------------
 * Real-world:  * Implementing a Least-Recently-Used cache, exactly like browser/CDN caching
 * layers use.
 *
 * ES6 focus: Map (which preserves insertion order) + a class combining Days 56-75
 *   const m = new Map();
 *   m.keys().next().value; // first-inserted key
 *
 * Task:
 * Implement an LRUCache class with capacity, get(key), and put(key,
 * value), evicting the least-recently-used entry when over capacity.
 *
 * Hint (spoiler — try first!):
 * On get, delete and re-insert the key to mark it "recently used" (Maps
 * preserve insertion order). On put, if over capacity, delete the first key
 * returned by cache.keys().next().value.
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    // your code here
  }
  put(key, value) {
    // your code here
  }
}

// ---- Test cases — run: node day-29.js ----
const lru = new LRUCache(2);
lru.put(1, "a");
lru.put(2, "b");
lru.get(1);          // marks 1 as recently used
lru.put(3, "c");      // evicts 2 (least recently used)
check("Test 1", lru.get(2), undefined);
check("Test 2", lru.get(1), "a");

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
