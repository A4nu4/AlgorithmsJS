function isSubsequence(str1, str2) {
  // create two pointers
  let i = 0;
  let j = 0;
  // create while loop checking if j is less than length of str2
  while (j < str2.length) {
    // check if letter from str1 is equal to letter from str2
    if (str1[i] === str2[j]) {
      // move two pointers
      i++;
      j++;
      // check if they do not match
    } else if (str1[i] !== str2[j]) {
      // move only j
      j++;
    }
    // check if i reached the end of arr1
    if (i === str1.length) return true;
  }
  return false;
}

console.log(isSubsequence("abc", "acb"));
