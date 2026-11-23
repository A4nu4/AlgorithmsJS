function someRecursive(arr, callback) {
  // if array length is 0 and no element passed, it is false
  if (arr.length === 0) return false;
  // checks if element passses callback
  const firstElCallback = callback(arr[0]);
  if (firstElCallback) return true;
  return someRecursive(arr.slice(1), callback);
}

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([4, 6, 8, 9], isOdd));
