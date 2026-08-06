"use strict";
/**
@param * Arguments Optional
Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

@param Test Cases:
Waiting:1. addTogether(2, 3) should return 5.
Waiting:2. addTogether(23.4, 30) should return 53.4.
Waiting:3. addTogether("2", 3) should return undefined.
Waiting:4. addTogether(5, undefined) should return undefined.
Waiting:5. addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
 * */
function addTogether(...args) {
  if (!args.every((element) => typeof element === "number")) {
    return undefined;
  }
  if (args.length === 1) {
    const firstNum = args[0];
    return (secondNum) => {
      if (typeof secondNum !== "number") return undefined;
      return firstNum + secondNum;
    };
  }
  return args[0] + args[1];
}

console.log(addTogether(2, 3));
