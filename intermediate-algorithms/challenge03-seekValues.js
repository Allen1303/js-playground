"use strict";
/**
@param: * Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function,
followed by one or more arguments. 
@param Remove all elements from the initial array that are of the same value as these arguments.
The function must accept an indeterminate number of arguments, also known as a variadic function.
You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
*
 * */
const seekSameValues = (arr, ...rest) => {
  return arr.filter((value) => !rest.includes(value));
};
console.log(seekSameValues([1, 2, 3, 1, 2, 3], 2, 3));
//==============================================================================================================
// Concat version
const seekValues = (arr, ...rest) => {
  return arr
    .concat(rest)
    .filter((item) => !arr.includes(item) || !rest.includes(item));
};
console.log(seekValues([2, 3, 4, 2, 3, 4], 3, 4));
//=============================================================================================================
//solution using Set, Set() are better when working with larger scale application of data.
const removeSameValues = (arr, ...rest) => {
  const uniqueSet = new Set(rest);
  return arr.filter((element) => !uniqueSet.has(element));
};
console.log(removeSameValues([3, 4, 5, 3, 4, 5], 4, 5));
