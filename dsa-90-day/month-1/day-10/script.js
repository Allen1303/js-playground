/**
 * Day 10 — Print Queue Walkthrough 🟡   (Month 1, Day 10)
 * ------------------------------------------------------------------
 * Real-world:  * Processing items one at a time, in order, like a print or task queue.
 *
 * ES6 focus: for...of loop
 *   for (const item of ["a", "b"]) { console.log(item); }
 *
 * Task:
 * Use for...of to build and return a log array like "Printing: <job>"
 * for each job in the queue.
 *
 * Hint (spoiler — try first!):
 * Push into a results array inside the loop, then return it after the loop
 * ends.
 */

function processQueue(jobs) {
  // your code here
}

// ---- Test cases — run: node day-10.js ----
check("Test 1", processQueue(["doc1", "doc2"]), ["Printing: doc1", "Printing: doc2"]);

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
  const jobsInput = document.getElementById("jobs-input");
  const queueOutput = document.getElementById("queue-output");

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
    const jobs = jobsInput.value.split(",").map((s) => s.trim()).filter(Boolean);
    const result = processQueue(jobs);

    queueOutput.innerHTML = "";
    if (result === undefined) {
      const div = document.createElement("div");
      div.className = "output";
      div.textContent = "Nothing rendered yet — implement processQueue()";
      queueOutput.appendChild(div);
    } else {
      const ul = document.createElement("ul");
      ul.className = "list-plain";
      result.forEach((line) => {
        const li = document.createElement("li");
        li.textContent = line;
        ul.appendChild(li);
      });
      queueOutput.appendChild(ul);
    }

    renderBadge(document.getElementById("badge-1"), processQueue(["doc1", "doc2"]), ["Printing: doc1", "Printing: doc2"]);
  }

  jobsInput.addEventListener("input", render);
  render();
}
