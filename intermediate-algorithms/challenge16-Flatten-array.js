"use strict";
/**
 *@param Steamroller
Flatten a nested array. You must account for varying levels of nesting.

@param Test Cases:
Failed:1. steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
Failed:2. steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Failed:3. steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
Failed:4. steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Failed:5. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Failed:6. Global variables should not be used.
 * */
const flatNestedArr = (arr) => {
  const result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flatNestedArr(element));
    } else {
      return result.push(element);
    }
  });
  return result;
};
console.log(flatNestedArr([1, [2], [3, [[4]]]]));
