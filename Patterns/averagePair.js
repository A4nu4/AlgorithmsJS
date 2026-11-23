function averagePair(arr, target) {
  // create left and right pointers
  let left = 0;
  let right = arr.length - 1;
  // loop over arr
  while (left < right) {
    // create variable for averageValue
    const averageValue = (arr[left] + arr[right]) / 2;
    // check if averageValue is equal to target
    if (averageValue === target) return true;
    // check if averageValue is less than target, then move left to right
    else if (averageValue < target) left++;
    else right--;
  }
  return false;
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
