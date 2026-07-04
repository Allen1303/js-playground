"use strict"
/**
 * @param : Diff Two Arrays
 * @Task: Compare two arrays and return a new array with any items only found in one of the two 
 * given arrays, but not both. In other words, return the symmetric difference of the two arrays.

 * */
function diffArray(arr1, arr2) {
  //solution using the filter method
  const newArr = [...arr1.filter(item => !arr2.includes(item)), ...arr2.filter(item => !arr1.includes(item))];
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//===============================================================================================================
// Solution with concat method
const diffArr = (arr1, arr2) => {
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(diffArr([1, 2, 3, 4], [1, 2, 3, 4, 5]));
