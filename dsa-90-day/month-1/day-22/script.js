/**
 * Day 22 — Leaderboard Sorter 🟠   (Month 1, Day 22)
 * ------------------------------------------------------------------
 * Real-world:  * Sorting players by score, highest first, for a leaderboard.
 *
 * ES6 focus: .sort() with a comparator (careful: mutates!)
 *   [3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
 *
 * Task:
 * Return a NEW array of { name, score } sorted descending by score
 * (don't mutate the input).
 *
 * Hint (spoiler — try first!):
 * Copy first with [...players], then .sort((a, b) => b.score - a.score).
 */

function leaderboard(players) {
  // your code here
}

// ---- Test cases — run: node day-22.js ----
check("Test 1", leaderboard([{ name: "A", score: 10 }, { name: "B", score: 30 }]), [{ name: "B", score: 30 }, { name: "A", score: 10 }]);

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
  const playerAScore = document.getElementById("player-a-score");
  const playerBScore = document.getElementById("player-b-score");
  const leaderboardOutput = document.getElementById("leaderboard-output");

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
    const players = [
      { name: "A", score: Number(playerAScore.value) },
      { name: "B", score: Number(playerBScore.value) },
    ];
    const result = leaderboard(players);

    leaderboardOutput.innerHTML = "";
    if (result === undefined) {
      const li = document.createElement("li");
      li.textContent = "Nothing rendered yet — implement leaderboard()";
      leaderboardOutput.appendChild(li);
    } else {
      result.forEach((player, i) => {
        const li = document.createElement("li");
        li.textContent = `#${i + 1} ${player.name} — ${player.score}`;
        if (i === 0) li.className = "rank-1";
        if (i === 1) li.className = "rank-2";
        if (i === 2) li.className = "rank-3";
        leaderboardOutput.appendChild(li);
      });
    }

    renderBadge(document.getElementById("badge-1"), leaderboard([{ name: "A", score: 10 }, { name: "B", score: 30 }]), [{ name: "B", score: 30 }, { name: "A", score: 10 }]);
  }

  playerAScore.addEventListener("input", render);
  playerBScore.addEventListener("input", render);
  render();
}
