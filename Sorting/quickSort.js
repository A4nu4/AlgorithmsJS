function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = (el1, el2) => {
      return el1 - el2;
    };
  }
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (comparator(pivot, arr[i]) > 0) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
  return a.length - b.length;
}

console.log(pivot(arr1));
console.log(pivot(arr2));
console.log(pivot(arr3, strLength));

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = (el1, el2) => {
      return el1 - el2;
    };
  }
  // check if left is less than right
  if (left < right) {
    // call pivot function and store value in variable
    let pivotIdx = pivot(arr, comparator, left, right);
    // sort left side
    quickSort(arr, comparator, left, pivotIdx - 1);
    // sort right side
    quickSort(arr, comparator, pivotIdx + 1, right);
  }
  return arr;
}

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(quickSort(nums));
