function findAllDuplicates(arr) {
  if (arr.length <= 1) return [];
  // create frequency counter
  const frequencyCounter = {};
  // create array to store result
  const result = [];

  // loop over arr
  for (let digit of arr) {
    // count frequency of digits
    frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
  }

  // loop over frequencyCounter
  for (let key in frequencyCounter) {
    // check which key has value equal to 2
    if (frequencyCounter[key] === 2) {
      result.push(Number(key));
    }
  }
  return result;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
