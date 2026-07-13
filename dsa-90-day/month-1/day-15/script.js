/**
 * Day 15 — Object-to-Table Rows 🟡   (Month 1, Day 15)
 * ------------------------------------------------------------------
 * Real-world:  * Turning a settings object into rows for a UI table.
 *
 * ES6 focus: Object.entries / Object.keys / Object.values
 *   Object.entries({ a: 1, b: 2 }); // [["a",1],["b",2]]
 *
 * Task:
 * Convert an object into an array of "key: value" strings.
 *
 * Hint (spoiler — try first!):
 * Object.entries(obj).map(([k, v]) => ...)
 */

function toRows(obj) {
  // your code here
}

// ---- Test cases — run: node day-15.js ----
check("Test 1", toRows({ theme: "dark", volume: 5 }), ["theme: dark", "volume: 5"]);

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
  const sourceTable = document.getElementById("source-table");
  const rowsOutput = document.getElementById("rows-output");
  const exampleAButton = document.getElementById("example-a-btn");
  const exampleBButton = document.getElementById("example-b-btn");

  const examples = {
    a: { theme: "dark", volume: 5 },
    b: { lang: "en", notifications: true },
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
    sourceTable.innerHTML = "";
    Object.entries(current).forEach(([key, value]) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<th>${key}</th><td>${value}</td>`;
      sourceTable.appendChild(tr);
    });

    const result = toRows(current);
    rowsOutput.innerHTML = "";
    if (result === undefined) {
      const div = document.createElement("div");
      div.className = "output";
      div.textContent = "Nothing rendered yet — implement toRows()";
      rowsOutput.appendChild(div);
    } else {
      const ul = document.createElement("ul");
      ul.className = "list-plain";
      result.forEach((row) => {
        const li = document.createElement("li");
        li.textContent = row;
        ul.appendChild(li);
      });
      rowsOutput.appendChild(ul);
    }

    renderBadge(document.getElementById("badge-1"), toRows({ theme: "dark", volume: 5 }), ["theme: dark", "volume: 5"]);
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
