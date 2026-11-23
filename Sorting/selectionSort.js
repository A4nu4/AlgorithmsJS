function selectionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (el1, el2) => {
      return el1 - el2;
    };
  }
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[min]) < 0) min = j;
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(selectionSort(nums));
