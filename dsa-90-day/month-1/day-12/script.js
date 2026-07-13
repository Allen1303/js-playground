/**
 * Day 12 — Merge User Settings 🟢   (Month 1, Day 12)
 * ------------------------------------------------------------------
 * Real-world:  * Applying user overrides on top of default app settings.
 *
 * ES6 focus: Object spread
 *   const merged = { ...defaults, ...overrides };
 *
 * Task:
 * Merge a defaults object with a userPrefs object, where userPrefs values
 * win on conflicts.
 *
 * Hint (spoiler — try first!):
 * Spread order matters: later spreads overwrite earlier ones.
 */

function mergeSettings(defaults, userPrefs) {
  // your code here
}

// ---- Test cases — run: node day-12.js ----
check("Test 1", mergeSettings({ theme: "light", volume: 5 }, { theme: "dark" }), { theme: "dark", volume: 5 });

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
  const mergedOutput = document.getElementById("merged-output");
  const overrideThemeButton = document.getElementById("override-theme-btn");
  const overrideBothButton = document.getElementById("override-both-btn");

  const defaults = { theme: "light", volume: 5 };
  let userPrefs = { theme: "dark" };

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
    const result = mergeSettings(defaults, userPrefs);
    mergedOutput.innerHTML = "";
    if (result === undefined) {
      const div = document.createElement("div");
      div.className = "output";
      div.textContent = "Nothing rendered yet — implement mergeSettings()";
      mergedOutput.appendChild(div);
    } else {
      const table = document.createElement("table");
      table.className = "data-table";
      Object.entries(result).forEach(([key, value]) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<th>${key}</th><td>${value}</td>`;
        table.appendChild(tr);
      });
      mergedOutput.appendChild(table);
    }

    renderBadge(document.getElementById("badge-1"), mergeSettings({ theme: "light", volume: 5 }, { theme: "dark" }), { theme: "dark", volume: 5 });
  }

  overrideThemeButton.addEventListener("click", () => {
    userPrefs = { theme: "dark" };
    render();
  });
  overrideBothButton.addEventListener("click", () => {
    userPrefs = { theme: "dark", volume: 8 };
    render();
  });

  render();
}
