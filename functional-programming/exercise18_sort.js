"use strict";
/**
 *@param Sort an Array Alphabetically using the sort Method
The sort method sorts the elements of an array according to the callback function.

@param example:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
 * */
function alphabeticalOrder(arr) {
  // Solution code addd below.
  return arr.sort((a, b) => a.localeCompare(b));
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
