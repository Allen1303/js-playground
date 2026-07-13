/**
 * Day 14 — Dynamic Form Field Builder 🟡   (Month 1, Day 14)
 * ------------------------------------------------------------------
 * Real-world:  * Building an object where the key name itself is a variable (e.g. form
 * field
 * names from a schema).
 *
 * ES6 focus: Computed property names
 *   const key = "email";
 *   const obj = { [key]: "test@test.com" };
 *
 * Task:
 * Given a field name and value, return an object with that dynamic key.
 *
 * Hint (spoiler — try first!):
 * { [fieldName]: value } — the brackets evaluate the variable as the key.
 */

function buildField(fieldName, value) {
  // your code here
}

// ---- Test cases — run: node day-14.js ----
check("Test 1", buildField("username", "allen"), { username: "allen" });

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
  const fieldNameInput = document.getElementById("field-name-input");
  const fieldValueInput = document.getElementById("field-value-input");
  const fieldOutput = document.getElementById("field-output");

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
    const result = buildField(fieldNameInput.value, fieldValueInput.value);
    fieldOutput.textContent = result === undefined ? "Nothing rendered yet — implement buildField()" : JSON.stringify(result);
    fieldOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), buildField("username", "allen"), { username: "allen" });
  }

  fieldNameInput.addEventListener("input", render);
  fieldValueInput.addEventListener("input", render);
  render();
}
