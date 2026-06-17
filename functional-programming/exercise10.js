// Implement the filter Method on a Prototype
/*
 *
Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

 * */
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  //solution code
  for (const [index, element] of this.entries()) {
    if (callback(element, index, this)) newArray.push(element);
  }
  // Only change code above this line
  return newArray;
};
