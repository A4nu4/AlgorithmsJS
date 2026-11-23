function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
console.log(getDigit(12345, 1));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log(digitCount(25));

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
console.log(mostDigits([100, 1010, 1, 500]));

function radixSort(nums) {
  // get most digits
  let maxDigitCount = mostDigits(nums);
  // loop over count of max digits
  for (let k = 0; k < maxDigitCount; k++) {
    // create digit bucket
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // loop over nums
    for (let i = 0; i < nums.length; i++) {
      // get digit
      let digit = getDigit(nums[i], k);
      // put digit inside digit bucket
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([10, 100, 1, 1000, 10000000]));
