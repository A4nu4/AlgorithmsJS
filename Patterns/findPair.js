function findPair(arr, n) {
  arr.sort((a, b) => a - b);
  n = Math.abs(n);
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (i === j) {
      j++;
      continue;
    }
    const diff = arr[j] - arr[i];
    if (diff === n) return true;
    else if (diff < n) j++;
    else i++;
  }
  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2));
