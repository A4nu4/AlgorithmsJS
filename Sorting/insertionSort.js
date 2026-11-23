function insertionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (el1, el2) => {
      return el1 - el2;
    };
  }
  // write nested loop
  for (let i = 0; i < arr.length; i++) {
    // create current value with arr[i]
    const current = arr[i];
    // create j pointer with last index
    let j = i - 1;
    // create while loop when j is more or equal to 0 and arr[j] is more than current
    while (j >= 0 && comparator(arr[j], current) > 0) {
      // assign arr[j + 1] to arr[j]
      arr[j + 1] = arr[j];
      j--;
    }
    // assign arr[j+1] to current
    arr[j + 1] = current;
  }
  return arr;
}

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(insertionSort(nums));
