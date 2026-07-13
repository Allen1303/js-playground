/**
 * Day 17 — Active Users Filter 🟡   (Month 1, Day 17)
 * ------------------------------------------------------------------
 * Real-world:  * Showing only currently active users in an admin dashboard.
 *
 * ES6 focus: .filter()
 *   [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
 *
 * Task:
 * Return only users where active is true.
 *
 * Hint (spoiler — try first!):
 * filter(u => u.active)
 */

function activeUsers(users) {
  // your code here
}

// ---- Test cases — run: node day-17.js ----
check("Test 1", activeUsers([{ name: "A", active: true }, { name: "B", active: false }]), [{ name: "A", active: true }]);

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
  const userAActive = document.getElementById("user-a-active");
  const userBActive = document.getElementById("user-b-active");
  const activeOutput = document.getElementById("active-output");

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
    const users = [
      { name: "A", active: userAActive.checked },
      { name: "B", active: userBActive.checked },
    ];
    const result = activeUsers(users);

    activeOutput.innerHTML = "";
    if (result === undefined) {
      const div = document.createElement("div");
      div.className = "output";
      div.textContent = "Nothing rendered yet — implement activeUsers()";
      activeOutput.appendChild(div);
    } else if (result.length === 0) {
      const div = document.createElement("div");
      div.className = "output";
      div.textContent = "No active users";
      activeOutput.appendChild(div);
    } else {
      result.forEach((user) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = user.name;
        activeOutput.appendChild(chip);
      });
    }

    renderBadge(document.getElementById("badge-1"), activeUsers([{ name: "A", active: true }, { name: "B", active: false }]), [{ name: "A", active: true }]);
  }

  userAActive.addEventListener("change", render);
  userBActive.addEventListener("change", render);
  render();
}
