/**
 * Day 25 — Group Orders By Status 🔴   (Month 1, Day 25)
 * ------------------------------------------------------------------
 * Real-world:  * Grouping orders into buckets (pending/shipped/delivered) for a dashboard
 * view.
 *
 * ES6 focus: .reduce() for grouping (accumulator is an object)
 *   (builds on Day 18's reduce)
 *
 * Task:
 * Group an array of orders { id, status } into an object keyed by status,
 * each value an array of order ids.
 *
 * Hint (spoiler — try first!):
 * In the reducer: acc[order.status] = acc[order.status] || [];
 * acc[order.status].push(order.id);
 */

function groupByStatus(orders) {
  // your code here
}

// ---- Test cases — run: node day-25.js ----
check("Test 1", groupByStatus([{ id: 1, status: "shipped" }, { id: 2, status: "pending" }, { id: 3, status: "shipped" }]), { shipped: [1, 3], pending: [2] });

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
