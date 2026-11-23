function countZeroes(arr) {
  // initialize left side
  let left = 0;
  // initialize right side
  let right = arr.length - 1;
  // initialize firstZero
  let firstZero = arr.length;

  // create while left is less than or equal to right
  while (left <= right) {
    // calculate mid point
    let mid = Math.floor((left + right) / 2);

    // check if arr[mid] is 1
    if (arr[mid] === 1) {
      // move left to mid + 1;
      left = mid + 1;
    } else {
      // save mid as firstZero
      firstZero = mid;
      // move right to mid - 1
      right = mid - 1;
    }
  }
  return arr.length - firstZero;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]));
console.log(countZeroes([1, 0, 0, 0, 0]));
console.log(countZeroes([0, 0, 0]));
console.log(countZeroes([1, 1, 1, 1]));
