function findLongestSubstring(str) {
  // create variables for left and maxLength
  let left = 0;
  let maxLength = 0;
  // create empty object for seen characters
  const seen = {};

  // loop over string by right pointer
  for (let right = 0; right < str.length; right++) {
    // get current character
    let char = str[right];

    // check if character was already seen and its previous position is inside the window
    if (seen[char] !== undefined && seen[char] >= left) {
      // move left to previous position + 1
      left = Math.max(left, seen[char] + 1);
    }
    // move char last position
    seen[char] = right;
    // calculate current windowLength
    let windowLength = right - left + 1;
    // update maxLength
    maxLength = Math.max(maxLength, windowLength);
  }
  return maxLength;
}

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));
