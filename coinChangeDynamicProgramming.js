function coinChange(denominations, value) {
  // create array and initialize every element of array to 0
  const ways = Array(value + 1).fill(0);

  // set first element to 1
  ways[0] = 1;

  // for each coin in denominations
  denominations.forEach((coin) => {
    // for amount from coin to value
    for (let amount = coin; amount <= value; amount++) {
      ways[amount] += ways[amount - coin];
    }
  });
  return ways[value];
}

const denominations = [1, 5, 10, 25];

console.log(coinChange(denominations, 1));
console.log(coinChange(denominations, 2));
console.log(coinChange(denominations, 5));
console.log(coinChange(denominations, 10));
console.log(coinChange(denominations, 25));
console.log(coinChange(denominations, 45));
console.log(coinChange(denominations, 100));
console.log(coinChange(denominations, 145));
console.log(coinChange(denominations, 1451));
console.log(coinChange(denominations, 14511));
