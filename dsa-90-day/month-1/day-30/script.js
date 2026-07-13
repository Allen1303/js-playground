/**
 * Day 30 — Log Word Frequency Counter 🔴   (Month 1, Day 30)
 * ------------------------------------------------------------------
 * Real-world:  * Analyzing a server log to find the most common words/errors.
 *
 * ES6 focus: String methods + .reduce() / Map
 *   (builds on Days 18, 25, 27)
 *
 * Task:
 * Count how many times each word appears in a string and return an
 * object.
 *
 * Hint (spoiler — try first!):
 * Split on whitespace, then reduce into an object, incrementing a counter
 * per word.
 */

function wordFrequency(text) {
  // your code here
}

// ---- Test cases — run: node day-30.js ----
check("Test 1", wordFrequency("the cat sat on the mat"), { the: 2, cat: 1, sat: 1, on: 1, mat: 1 });

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
  const textInput = document.getElementById("text-input");
  const freqOutput = document.getElementById("freq-output");

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
    const result = wordFrequency(textInput.value);
    freqOutput.innerHTML = "";
    if (result === undefined) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>Nothing rendered yet — implement wordFrequency()</td>`;
      freqOutput.appendChild(tr);
    } else {
      freqOutput.innerHTML = "<tr><th>word</th><th>count</th></tr>";
      Object.entries(result).forEach(([word, count]) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${word}</td><td>${count}</td>`;
        freqOutput.appendChild(tr);
      });
    }

    renderBadge(document.getElementById("badge-1"), wordFrequency("the cat sat on the mat"), { the: 2, cat: 1, sat: 1, on: 1, mat: 1 });
  }

  textInput.addEventListener("input", render);
  render();
}
