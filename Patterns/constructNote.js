function constructNote(str1, str2) {
  if (str2.length < str1.length) return false;
  // create frequency counter
  const frequencyCounter = {};

  // loop over str2
  for (let letter of str2) {
    // count frequency of letters
    frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
  }

  // loop over str1
  for (let char of str1) {
    // check if there is enough of each characyer
    if (!frequencyCounter[char]) {
      return false;
    }
    // decrease value related to each character
    frequencyCounter[char]--;
  }

  return true;
}

console.log(constructNote("aa", "abc"));
