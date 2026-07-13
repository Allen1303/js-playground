/**
 * Day 19 — Find User By ID 🟡   (Month 1, Day 19)
 * ------------------------------------------------------------------
 * Real-world:  * Looking up a specific record, like fetching one user's profile.
 *
 * ES6 focus: .find() / .findIndex()
 *   [{ id: 1 }, { id: 2 }].find(u => u.id === 2); // {id:2}
 *
 * Task:
 * Return the user object matching id, or undefined if not found.
 *
 * Hint (spoiler — try first!):
 * find(u => u.id === id)
 */

function findUserById(users, id) {
  // your code here
}

// ---- Test cases — run: node day-19.js ----
check("Test 1", findUserById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2), { id: 2, name: "B" });

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
  const idInput = document.getElementById("id-input");
  const userOutput = document.getElementById("user-output");

  const users = [{ id: 1, name: "A" }, { id: 2, name: "B" }];

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
    const id = Number(idInput.value);
    const result = findUserById(users, id);
    userOutput.textContent = result === undefined ? "No match (or not implemented)" : `${result.name} (id: ${result.id})`;
    userOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), findUserById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2), { id: 2, name: "B" });
  }

  idInput.addEventListener("input", render);
  render();
}
