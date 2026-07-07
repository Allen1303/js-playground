"use strict";
/**
 @param Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

@param Example Tests:
Waiting:1. spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.*
 * */
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
