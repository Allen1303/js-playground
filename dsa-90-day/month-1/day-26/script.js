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

// ---- UI wiring (browser only, ignored by `node script.js`) ----
if (typeof document !== "undefined") {
  const titleInput = document.getElementById("title-input");
  const slugOutput = document.getElementById("slug-output");

  function renderBadge(el, actual, expected) {
    if (actual === undefined) {
      el.textContent = "not implemented";
      el.className = "badge pending";
      return;
    }
    const pass = JSON.stringify(actual) === JSON.stringify(expected);
    el.textContent = pass ? "pass" : "fail";
    el.className = "badge " + (pass ? "pass" : "fail");
  }

  function render() {
    const result = slugify(titleInput.value);
    slugOutput.textContent = result === undefined ? "Nothing rendered yet — implement slugify()" : result;
    slugOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), slugify("My First Post!"), "my-first-post");
  }

  titleInput.addEventListener("input", render);
  render();
}
