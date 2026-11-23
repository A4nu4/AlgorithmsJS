function linearSearch(arr, value) {
  // loop over array
  for (let i = 0; i < arr.length; i++) {
    // if value matches to value inside array, it returns index
    if (value === arr[i]) return i;
  }
  return -1;
}

console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
