function isPalindrome(word) {
  if(word.length === 1) {
    return true
  } else if (word.length === 2) {
    return (word[0] === word[1])
  } else {
    const subLength = Math.floor(word.length / 2)
    const subStr1 = word.substring(0, subLength + 1).toLowerCase()
    const subStr2 = word.substring(subLength).toLowerCase()
    return (subStr1 === subStr2.split('').reverse().join(''))
  }

}

/* 
  Add your pseudocode here
  // 1. If a word is just one letter, then it is a palindrome 
  // 2. Divide input word's length into halves, using Math.floor method 
  // 3. Divide string into 2 substrings, with half lengths. 
  // 4. Turn 2 substrings into all lower case substrings
  // 5. Reverse last substing using split(), reverse() and join() built-in methods
  // 6. Compare 2 strings
  // 6. If they are same, then it is a palindrome
*/

/*
  Add written explanation of your solution here
  Just a single letter will be a palindrome. Example: a, b
  If a given word length is 2, then it should be 2 same letters. Example: Aa, Bb
  If the given word's length is more than 2, divide it into 2 halves using Math.floor. Example: 5 / 2 -> 2. 
  If reverse one of 2 substrings, then there will be 2 same strings. Example: 'madam' => 'ma' & 'am' => 'ma' & 'ma'
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
