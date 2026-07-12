"use strict";
/**
 @param Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*
 * */
function fearNotLetter(str) {
  //Spread the string into an array for easy iteration
  const chars = [...str];
  //Assign missingIndex variable to hold the result of the findIndex iteration/look up of the char position.
  //findIndex() method uses 2 param missing char and the index.
  const missingIndex = chars.findIndex(
    (missingChar, index) =>
      // check if the current character code matches what it should be if the sequence is unbroken.(first char's code + current index)
      missingChar.charCodeAt(0) !== chars[0].charCodeAt(0) + index,
  );
  //check if the missing index equal to negative i.e. doesn't exsist then undefined else reconstruct the
  // missing letter uaing it's expected character code, since the actual letter is not present in the original string.
  return missingIndex === -1
    ? undefined
    : String.fromCharCode(chars[0].charCodeAt(0) + missingIndex);
}

console.log(fearNotLetter("abce"));
