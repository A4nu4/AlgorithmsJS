function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

const time1 = performance.now();
printAllPairs(1000);
const time2 = performance.now();
console.log(`Time elapsed: ${time2 - time1} seconds`);
