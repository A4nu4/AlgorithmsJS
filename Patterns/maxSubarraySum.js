function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  // create variables for maxSum and tempSum
  let maxSum = 0;
  let tempSum = 0;

  // loop over num
  for (let i = 0; i < num; i++) {
    // add element of array to maxSum
    maxSum += arr[i];
  }

  // assign tempSum to maxSum
  tempSum = maxSum;

  // loop over arr starting by num
  for (let i = num; i < arr.length; i++) {
    // reduce tempSum by arr[i-num] and add arr[i]
    tempSum = tempSum - arr[i - num] + arr[i];
    // assign maxSum to maximum value between maxSum and tempSum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
