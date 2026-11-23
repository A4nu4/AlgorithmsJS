function binarySearch(arr, value) {
  // create left and right pointers
  let left = 0;
  let right = arr.length - 1;
  // create while loop
  while (left <= right) {
    // create middle element
    let middle = Math.floor((left + right) / 2);
    // if array value from left side does not match to value
    if (arr[middle] === value) {
      // return index of value
      return middle;
    } else if (arr[middle] > value) {
      // narrow right side according to middle
      right = middle - 1;
    } else {
      // narrow left side according to middle
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
