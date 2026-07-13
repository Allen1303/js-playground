/**
 * Day 6 — Coordinate Parser 🟢   (Month 1, Day 6)
 * ------------------------------------------------------------------
 * Real-world:  * Reading structured data out of an API response (e.g. a [lat, lng] pair).
 *
 * ES6 focus: Array destructuring
 *   const [x, y] = [10, 20];
 *   console.log(x, y); // 10 20
 *
 * Task:
 * Destructure a [lat, lng] pair and return a formatted string.
 *
 * Hint (spoiler — try first!):
 * Destructure directly in the function signature: function
 * formatCoords([lat, lng]).
 */

function formatCoords(coords) {
  // your code here
}

// ---- Test cases — run: node day-06.js ----
check("Test 1", formatCoords([40.7, -74.0]), "Lat: 40.7, Lng: -74");

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
  const latInput = document.getElementById("lat-input");
  const lngInput = document.getElementById("lng-input");
  const coordsOutput = document.getElementById("coords-output");

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
    const lat = parseFloat(latInput.value);
    const lng = parseFloat(lngInput.value);
    const result = formatCoords([lat, lng]);
    coordsOutput.textContent = result === undefined ? "Nothing rendered yet — implement formatCoords()" : result;
    coordsOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), formatCoords([40.7, -74.0]), "Lat: 40.7, Lng: -74");
  }

  latInput.addEventListener("input", render);
  lngInput.addEventListener("input", render);
  render();
}
