/**
 * Day 7 — Merge Shopping Carts 🟢   (Month 1, Day 7)
 * ------------------------------------------------------------------
 * Real-world:  * Combining two guest carts when a user logs in.
 *
 * ES6 focus: Spread operator on arrays
 *   const combined = [...arr1, ...arr2];
 *
 * Task:
 * Merge two arrays of cart item names into one array without modifying
 * the originals.
 *
 * Hint (spoiler — try first!):
 * return [...cartA, ...cartB];
 */

function mergeCarts(cartA, cartB) {
  // your code here
}

// ---- Test cases — run: node day-07.js ----
check("Test 1", mergeCarts(["shirt"], ["shoes", "hat"]), ["shirt", "shoes", "hat"]);

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
  const cartAChips = document.getElementById("cart-a-chips");
  const cartBChips = document.getElementById("cart-b-chips");
  const mergeOutput = document.getElementById("merge-output");
  const exampleAButton = document.getElementById("example-a-btn");
  const exampleBButton = document.getElementById("example-b-btn");

  const examples = {
    a: { cartA: ["shirt"], cartB: ["shoes", "hat"] },
    b: { cartA: ["book", "pen"], cartB: ["notebook"] },
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

  function renderChips(container, items) {
    container.innerHTML = "";
    items.forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = item;
      container.appendChild(chip);
    });
  }

  function render() {
    renderChips(cartAChips, current.cartA);
    renderChips(cartBChips, current.cartB);

    const result = mergeCarts(current.cartA, current.cartB);
    mergeOutput.textContent = result === undefined ? "Nothing rendered yet — implement mergeCarts()" : result.join(", ");
    mergeOutput.className = "output" + (result === undefined ? "" : " filled");

    renderBadge(document.getElementById("badge-1"), mergeCarts(["shirt"], ["shoes", "hat"]), ["shirt", "shoes", "hat"]);
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
