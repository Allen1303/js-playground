/**
 * Day 23 — Tag Search 🟡   (Month 1, Day 23)
 * ------------------------------------------------------------------
 * Real-world:  * Checking whether a blog post has a specific tag.
 *
 * ES6 focus: .includes() / .indexOf()
 *   ["js", "css"].includes("js"); // true
 *
 * Task:
 * Return true if tag exists in the tags array.
 *
 * Hint (spoiler — try first!):
 * tags.includes(tag)
 */

function hasTag(tags, tag) {
  // your code here
}

// ---- Test cases — run: node day-23.js ----
check("Test 1", hasTag(["js", "css"], "js"), true);

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
