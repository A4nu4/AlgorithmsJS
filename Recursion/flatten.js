function flatten(arr) {
  // if array length is 0, it returns empty array
  if (arr.length === 0) return [];

  const firstEl = arr[0];
  const restArr = arr.slice(1);

  // checks if firstEl is Array
  if (Array.isArray(firstEl)) {
    // combines this array with the rest of array
    return flatten(firstEl).concat(flatten(restArr));
  } else {
    // combines value with rest of array, if it is simple value
    return [firstEl].concat(flatten(restArr));
  }
}

console.log(flatten([1, 2, 3, [4, 5]]));
