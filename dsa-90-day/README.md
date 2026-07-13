# 90-Day JavaScript DSA & ES6 Plan

A 90-day, incrementally-building set of JavaScript exercises — starting from ES6
syntax fundamentals and working up through data structures and algorithms.
Each day is a standalone, runnable `.js` file.

## Structure

```
month-1/day-01.js ... day-30.js   ES6 syntax, arrays, objects, array methods, strings
month-2/day-01.js ... day-30.js   Closures, loop patterns, recursion, Big-O, searching, sorting, Sets/Maps
month-3/day-01.js ... day-30.js   Linked lists, stacks/queues, hash map problems, trees, graphs, DP, capstones
```

(Days count 1-30 within each month folder; overall this spans exercise days 1-90.)

## How to use

Each file contains, in order:
1. A header comment: real-world framing, the ES6/DSA concept for the day (with a
   tiny standalone example), the task description, and a hint.
2. A function/class stub to fill in.
3. Runnable test cases using a small shared `check()` helper.

Open a file in your editor, implement the stub, then run it directly:

```bash
node month-1/day-01.js
```

You'll see `PASS`/`FAIL` per test case, plus the expected vs. actual value on
failure.

## Progress tracking

Feel free to commit as you go — one commit per day (or per week) works well as
a visible record of progress:

```bash
git add month-1/day-01.js
git commit -m "Day 1: Greeting Card Generator"
```