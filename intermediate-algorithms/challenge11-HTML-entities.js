"use strict";
/**
 @param Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

@param Tests:
Waiting:1. convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
Waiting:*
 * */
function convertHTML(str) {
  // Solution code
  const entities = { "&": "&amp;", ">": "&gt;", "<": "&lt;" };

  //Use the sread operator to to convert the string into individual chars to iterate over.
  return (
    [...str]
      //map() method walk interate over each string char
      //The in key word checks if a char is apart of the entities object ternary check if a condition is true or false.
      .map((char) => (char in entities ? entities[char] : char))
      //join() method combines the result before returning it.
      .join("")
  );
}

console.log(convertHTML("Dolce & Gabbana"));
