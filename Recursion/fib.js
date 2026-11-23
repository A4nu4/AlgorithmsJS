function fib(num) {
  // Handle base cases if num is 0 and 1
  if (num <= 2) return 1;
  // Fibonacci formula
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4));
