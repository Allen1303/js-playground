"use strict";
/**
 @param Pairs of DNA Look up 
 strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs
for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
@param  example: The input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*
1. pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
 * */
function pairElement(str) {
  //solution code
  const pairs = { A: "T", T: "A", G: "C", C: "G" };
  return [...str].map((char) => [char, pairs[char]]);
}

console.log(pairElement("GCG"));
