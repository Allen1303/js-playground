/**
 * Day 26 — Blog Title Slugifier 🟡   (Month 1, Day 26)
 * ------------------------------------------------------------------
 * Real-world:  * Turning a blog post title into a URL-safe slug.
 *
 * ES6 focus: Template literals + string methods
 *   "Hello World".toLowerCase().replace(/\s+/g, "-"); // "hello-world"
 *
 * Task:
 * Convert a title to a lowercase, hyphen-separated slug.
 *
 * Hint (spoiler — try first!):
 * Lowercase first, strip non-alphanumeric characters, then replace spaces
 * with -.
 */

function slugify(title) {
  // your code here
}

// ---- Test cases — run: node day-26.js ----
check("Test 1", slugify("My First Post!"), "my-first-post");

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
