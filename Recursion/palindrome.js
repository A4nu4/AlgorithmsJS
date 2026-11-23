function isPalindrome(str) {
  // If string is less than 1 character, it should be true
  if (str.length <= 1) return true;
  const firstLetter = str[0];
  const lastLetter = str[str.length - 1];
  // If first letter doesn't match to last letter, it should be false
  if (firstLetter !== lastLetter) return false;
  // narrow what's between first and last character
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("tacocat"));
