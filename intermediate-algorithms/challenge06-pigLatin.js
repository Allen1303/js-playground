"use strict";
/**
 @param Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

@param Task:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
late the provided string to pig latin. input strings are guaranteed to be english words in all lowercase.*
 * */
//ES6 Solution
const pigLatin = (str) => {
  const vowels = new Set(["a", "e", , "i", "o", "u"]);
  //check if the string start with a vowel.
  if (vowels.has(str[0])) return `${str} way`;
  const chars = [...str].findIndex((char) => vowels.has(char));
  return `${str.slice(chars)}${str.slice(0, chars)}ay`;
};
console.log(pigLatin("javascript"));
//==============================================================================================================================
//Manual loop version
function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(str[0])) {
    return `${str} way`;
  }
  let char = 0;
  while (!vowels.includes(str[char])) {
    char++;
  }
  return `${str.slice(char)}${str.slice(0, char)}ay`;
}

console.log(translatePigLatin("consonant"));
