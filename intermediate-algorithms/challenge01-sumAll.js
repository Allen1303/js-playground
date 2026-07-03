"use strict"
/**
@param: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the
sum of all the numbers between them. The lowest number will not always come first.

@param example: 
sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 * */
const sumAll = (arr) => {
  let sumAllNum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumAllNum += i;
  }
  return sumAllNum;
}
console.log(sumAll([1, 4])); 
