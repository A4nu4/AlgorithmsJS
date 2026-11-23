function sortedFrequency(arr, num) {
  // create variables for firstIndex and lastIndex
  const firstIndex = findFirst(arr, num);
  const lastIndex = findLast(arr, num);
  // check if there is no occurence
  if (firstIndex === -1) return -1;

  return lastIndex - firstIndex + 1;
}

function findFirst(arr, num, left = 0, right = arr.length - 1, result = -1) {
  // create helper function to find first occurence
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

function findLast(arr, num, left = 0, right = arr.length - 1, result = -1) {
  // create helper function to find last occurence
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      result = mid;
      left = mid + 1;
    } else if (arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));
