function minSubArrayLen(arr, num) {
  if (num <= 0) return null;
  // create variables for left and total
  let left = 0;
  let total = 0;
  // create minLength variable equal to Infinity
  let minLength = Infinity;

  // loop over arr using right pointer
  for (let right = 0; right < arr.length; right++) {
    // add arr[right] to total
    total += arr[right];

    // create while loop (total is greater or equal than num)
    while (total >= num) {
      // find currrent length
      let currentLength = right - left + 1;
      // update minLength
      minLength = Math.min(minLength, currentLength);
      // remove leftmost element
      total -= arr[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
