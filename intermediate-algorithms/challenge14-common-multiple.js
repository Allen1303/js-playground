"use strict";
/**
 * @param Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.

@param example: if given 1 and 3, find the smallest common multiple of both 1 and 3
that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 * */

function smallestCommons(arr) {
  //Solution code

  const numArr = []; // Empty array to hold the list of numbers from the below loop

  let minMax = [Math.min(...arr), Math.max(...arr)];
  for (let num = minMax[0]; num <= minMax[1]; num++) {
    numArr.push(num);
  }
  let commonNum = minMax[1];
  //As long as the condition is false (!numArr) keep looping
  while (!numArr.every((value) => commonNum % value === 0)) {
    commonNum += minMax[1]; //count by the second number i.e.(5) in the array until it reaches a number that is divisible bt the all numbers
  }
  return commonNum;
}

console.log(smallestCommons([1, 5]));
