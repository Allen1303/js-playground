/**
 * @param Add Elements to the End of an Array Using concat Instead of push
Functional programming is all about creating and using non-mutating functions.

The last challenge (exercise13.js) introduced the concat method as a way to merge arrays into a 
new array without mutating the original arrays. Compare concat to the push method. push adds items to the 
end of the same array it is called on, which mutates that array. Here's an example:

@param Task: Change the nonMutatingPush function so it uses concat to merge newItem to the end of original
without mutating original or newItem arrays. The function should return an array.
*
 * */
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingPush(first, second));
