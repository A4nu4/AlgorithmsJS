function minCoinChange(coins, amount) {
  // create array to store result
  const result = [];
  // sort coins in descending order
  insertionSort(coins);

  // for each coin in coins
  coins.forEach((coin) => {
    // create while loop until amount is greater or equal to coin
    while (amount >= coin) {
      // add coin to result
      result.push(coin);
      // subtract coin from amount
      amount -= coin;
    }
  });
  return result;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(minCoinChange([1, 2, 3, 4, 5], 11));
console.log(minCoinChange([5, 10, 15, 20, 25], 85));
console.log(minCoinChange([1, 5, 6, 9], 11));
