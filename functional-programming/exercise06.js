// Refactor Global Variables Out of Functions
/*
 *
Rewrite the code so the global array bookList is not changed inside either function. 
The add function should add the given bookName to the end of the array passed to it and return a new array (list)
The remove function should remove the given bookName from the array passed to it.
Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
 * */
// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(arr, bookName) {
  const newArr = [...arr];

  bookList.push(bookName);
  return newArr;

  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  return arr.filter((book) => book !== bookName);

  // Change code above this line
}
const updatedList = add(bookList, "Deep Work");
const newList = remove(bookList, "The Hound of the Baskervilles");
console.log(updatedList, newList);
