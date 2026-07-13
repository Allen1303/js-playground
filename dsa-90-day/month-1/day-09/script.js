/**
 * Day 9 — Playlist Skip Track 🟢   (Month 1, Day 9)
 * ------------------------------------------------------------------
 * Real-world:  * Removing an item from a playlist without mutating the original array.
 *
 * ES6 focus: Array methods (slice, splice, push) + spread
 *   const copy = arr.slice(); // shallow copy, doesn't mutate arr
 *
 * Task:
 * Return a new array with the item at `index` removed, without mutating
 * the input.
 *
 * Hint (spoiler — try first!):
 * Combine slice(0, index) and slice(index + 1) with spread, or use filter
 * with the element's position.
 */

function removeTrack(playlist, index) {
  // your code here
}

// ---- Test cases — run: node day-09.js ----
check("Test 1", removeTrack(["a", "b", "c"], 1), ["a", "c"]);

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
  const playlistChips = document.getElementById("playlist-chips");
  const indexInput = document.getElementById("index-input");
  const playlistOutput = document.getElementById("playlist-output");

  const playlist = ["a", "b", "c"];

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

  function renderChips(container, items) {
    container.innerHTML = "";
    items.forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = item;
      container.appendChild(chip);
    });
  }

  function render() {
    renderChips(playlistChips, playlist);
    const index = Number(indexInput.value);
    const result = removeTrack(playlist, index);
    playlistOutput.textContent = result === undefined ? "Nothing rendered yet — implement removeTrack()" : result.join(", ");
    playlistOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), removeTrack(["a", "b", "c"], 1), ["a", "c"]);
  }

  indexInput.addEventListener("input", render);
  render();
}
