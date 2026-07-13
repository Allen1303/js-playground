/**
 * Day 24 — Flatten Nested Comment Threads 🟠   (Month 1, Day 24)
 * ------------------------------------------------------------------
 * Real-world:  * Flattening nested reply threads into a single list for rendering.
 *
 * ES6 focus: .flat() / .flatMap()
 *   [[1, 2], [3]].flat(); // [1, 2, 3]
 *
 * Task:
 * Flatten a one-level-nested array of comment arrays into a single flat
 * array.
 *
 * Hint (spoiler — try first!):
 * threads.flat() handles one level of nesting by default.
 */

function flattenThreads(threads) {
  // your code here
}

// ---- Test cases — run: node day-24.js ----
check("Test 1", flattenThreads([["hi", "hey"], ["yo"]]), ["hi", "hey", "yo"]);

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
  const flatOutput = document.getElementById("flat-output");
  const exampleAButton = document.getElementById("example-a-btn");
  const exampleBButton = document.getElementById("example-b-btn");

  const examples = {
    a: [["hi", "hey"], ["yo"]],
    b: [["a"], ["b", "c", "d"]],
  };

  let current = examples.a;

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
    const result = flattenThreads(current);
    flatOutput.innerHTML = "";
    if (result === undefined) {
      const li = document.createElement("li");
      li.textContent = "Nothing rendered yet — implement flattenThreads()";
      flatOutput.appendChild(li);
    } else {
      result.forEach((comment) => {
        const li = document.createElement("li");
        li.textContent = comment;
        flatOutput.appendChild(li);
      });
    }

    renderBadge(document.getElementById("badge-1"), flattenThreads([["hi", "hey"], ["yo"]]), ["hi", "hey", "yo"]);
  }

  exampleAButton.addEventListener("click", () => {
    current = examples.a;
    render();
  });
  exampleBButton.addEventListener("click", () => {
    current = examples.b;
    render();
  });

  render();
}
