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

// ---- UI wiring (browser only, ignored by `node script.js`) ----
if (typeof document !== "undefined") {
  const tagInput = document.getElementById("tag-input");
  const tagOutput = document.getElementById("tag-output");

  const tags = ["js", "css"];

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
    const result = hasTag(tags, tagInput.value);
    tagOutput.textContent = result === undefined ? "Nothing rendered yet — implement hasTag()" : (result ? "Tag found ✓" : "Tag not found ✗");
    tagOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), hasTag(["js", "css"], "js"), true);
  }

  tagInput.addEventListener("input", render);
  render();
}
