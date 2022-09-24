function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = Array.from(word)
  const arrayReverse = wordArray.reverse();
  const joinerReverse = arrayReverse.join("")

  if(word === joinerReverse) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  function isPalindrome(word) {
    if (word === word.reverse() {
    return true
    }
  }
*/

/*
  Add written explanation of your solution here
  Found a way with google to turn the word into an array, which gives me access to a method called reverse() which I then used to reverse the order. After that the commas were still in the way so I found another method called join() which I used to elminate the commas. After that I used an if else statement to determine whether the word passed in was a palindrome.
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
