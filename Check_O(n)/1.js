const addUpTo = (n) => {
  return n / (n + 1) / 2;
};

const var1 = performance.now();
addUpTo(100000);
const var2 = performance.now();
console.log(`Time elapsed: ${var2 - var1} seconds`);
