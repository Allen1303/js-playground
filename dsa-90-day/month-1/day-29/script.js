/**
 * Day 29 — Anagram Checker 🟠   (Month 1, Day 29)
 * ------------------------------------------------------------------
 * Real-world:  * Powering a word-game feature that checks if two words are anagrams.
 *
 * ES6 focus: String -> array conversion + sort
 *   "cba".split("").sort().join(""); // "abc"
 *
 * Task:
 * Return true if two strings are anagrams of each other (ignore case and
 * spaces).
 *
 * Hint (spoiler — try first!):
 * Normalize both strings, split into characters, sort, and rejoin — then
 * compare.
 */

function isAnagram(strA, strB) {
  // your code here
}

// ---- Test cases — run: node day-29.js ----
check("Test 1", isAnagram("listen", "silent"), true);
check("Test 2", isAnagram("hello", "world"), false);

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
  const wordAInput = document.getElementById("word-a-input");
  const wordBInput = document.getElementById("word-b-input");
  const anagramOutput = document.getElementById("anagram-output");

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
    const result = isAnagram(wordAInput.value, wordBInput.value);
    anagramOutput.textContent = result === undefined ? "Nothing rendered yet — implement isAnagram()" : (result ? "Anagram ✓" : "Not an anagram ✗");
    anagramOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), isAnagram("listen", "silent"), true);
    renderBadge(document.getElementById("badge-2"), isAnagram("hello", "world"), false);
  }

  wordAInput.addEventListener("input", render);
  wordBInput.addEventListener("input", render);
  render();
}
