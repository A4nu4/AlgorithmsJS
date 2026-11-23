function productOfArray(arr) {
  if (arr.length === 0) return 1;
  // Take first element from array
  const firstEl = arr[0];
  // Multiply first element to next one separately
  return firstEl * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4, 10]));
