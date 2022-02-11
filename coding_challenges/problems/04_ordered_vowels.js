// Write a method, `orderedVowelWords(str)` that takes a string of
// lowercase words and returns a string with just the words containing
// all their vowels (excluding "y") in alphabetical order. Vowels may
// be repeated (`"afoot"` is an ordered vowel word).
//
// HINT: It may be helpful to create a helper method, `orderedVowelWord(word)`
// which returns true/false if a word's vowels are ordered.

function orderedVowelWords(str) {
let vowelCount = 0
  
  for (let i = 0; i < str.length; i++) {
    if('aeiou'.includes(str[i])) {
        vowelCount += 1
    }
  }

 return vowelCount;
}

module.exports = orderedVowelWords;
