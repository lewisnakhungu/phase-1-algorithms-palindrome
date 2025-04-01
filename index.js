function isPalindrome(word) {
  // Reverse the word
  const reversedWord = word.split("").reverse().join("");
  
  // Compare original and reversed word
  return word === reversedWord;
}

// Test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));  // true

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));  // false

console.log("Expecting: true");
console.log("=>", isPalindrome("madam"));  // true

console.log("Expecting: false");
console.log("=>", isPalindrome("hello"));  // false

console.log("Expecting: true");
console.log("=>", isPalindrome("level"));  // true

module.exports = isPalindrome;