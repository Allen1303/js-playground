"use strict";
/**
 *@param Introduction to Currying and Partial Application
The arity of a function is the number of arguments it requires. Currying a function 
means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument,
then returns another function that takes the next argument, and so on.

@param example:

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
curried(1)(2) would return 3.
 *
@param Task: * Fill in the body of the add function so it uses currying to add parameters x, y, and z.
 * */
function add(x) {
  // Solution Code
  return (y) => (z) => x + y + z;
}

console.log(add(10)(20)(30));
