function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  // Add left pointer
  let left = 0;
  // Add right pointer
  let right = 1;
  // Declare count of unique values
  let count = 1;
  // While loop with condition right is less than array length
  while (right < arr.length) {
    // If value is unique
    if (arr[left] !== arr[right]) {
      // Add 1 to count
      count++;
      // Jump left to new unique value position
      left = right;
    } else {
      // Move to right
      right++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
