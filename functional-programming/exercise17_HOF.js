"use strict";
/**
 * @param Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

@pram Task: 
Complete the code for the squareList function using any combination of map(), filter(), and reduce().
 fThe function should return a new array containing the squares of only the positive integers 
 (decimal numbers are not integers) when an array of real numbers is passed to it.
 An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].
 * */
const squareList = (arr) => {
  // Solution code.

  const numSquare = arr
    .filter((number) => number > 0 && Number.isInteger(number))
    .map((number) => number * number);
  return numSquare;
  console.log(numSquare);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
//=============================================================================
// Reduce Method only
const squareNumbers = (arr) => {
  return arr.reduce((accumulator, num) => {
    if (num > 0 && Number.isInteger(num)) {
      accumulator.push(num * num);
    }
    return accumulator;
  }, []);
};
console.log(squareNumbers([-4, 5.5, 7, 10, -6.5]));
