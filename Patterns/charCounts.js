function charCount(str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

console.log(charCount("HELlo"));
const var1 = performance.now();
charCount("The quick brown fox jumps over the lazy dog.");
const var2 = performance.now();
console.log(`Time elapsed: ${var2 - var1} seconds`);
