/**
 * Day 27 — CSV Row Parser 🟡   (Month 1, Day 27)
 * ------------------------------------------------------------------
 * Real-world:  * Parsing a raw CSV line into fields.
 *
 * ES6 focus: .split() / .trim()
 *   "a, b".split(","); // ["a", " b"]
 *
 * Task:
 * Split a CSV row string into an array of trimmed field values.
 *
 * Hint (spoiler — try first!):
 * split(",").map(field => field.trim())
 */

function parseCsvRow(row) {
  // your code here
}

// ---- Test cases — run: node day-27.js ----
check("Test 1", parseCsvRow("Sam, 29 , NYC"), ["Sam", "29", "NYC"]);

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
  const rowInput = document.getElementById("row-input");
  const fieldsOutput = document.getElementById("fields-output");

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
    const result = parseCsvRow(rowInput.value);
    fieldsOutput.innerHTML = "";
    if (result === undefined) {
      const div = document.createElement("div");
      div.className = "output";
      div.textContent = "Nothing rendered yet — implement parseCsvRow()";
      fieldsOutput.appendChild(div);
    } else {
      result.forEach((field) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = field;
        fieldsOutput.appendChild(chip);
      });
    }

    renderBadge(document.getElementById("badge-1"), parseCsvRow("Sam, 29 , NYC"), ["Sam", "29", "NYC"]);
  }

  rowInput.addEventListener("input", render);
  render();
}
