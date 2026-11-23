function merge(arr1, arr2, comparator) {
  if (typeof comparator !== "function") {
    comparator = (el1, el2) => {
      return el1 - el2;
    };
  }
  // create empty array
  const results = [];
  // create two pointers
  let i = 0;
  let j = 0;
  // while loop with double condition &&
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr2[j], arr1[i]) > 0) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // separate while loop for arr1
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // separate while loop for arr2
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

console.log(merge(arr3, arr4));

function mergeSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (el1, el2) => {
      return el1 - el2;
    };
  }
  if (arr.length <= 1) return arr;
  // find mid point of array
  let mid = Math.floor(arr.length / 2);
  // by slicing mid point find right and left side of arr
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

console.log(mergeSort([4, 20, 12, 10, 7, 9]));

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(mergeSort(kitties, strComp));
