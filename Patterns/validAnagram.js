function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  // Create two frequency counters
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // Loop over str1
  for (let char of str1) {
    // Add key and value + 1 to frequency counter Object
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  // Loop over str2
  for (let char of str2) {
    // Add key and value + 1 to frequency counter Object
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // Loop over first frequency counter
  for (let key in frequencyCounter1) {
    // If key doesn't match to key of second frequency counter
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

const iterations = 1_000_000;

const start = performance.now();

for (let i = 0; i < iterations; i++) {
  validAnagram("texttwisttime", "timetwisttext");
}

const end = performance.now();

console.log(`Average: ${(end - start) / iterations} ms`);
