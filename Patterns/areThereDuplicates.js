function areThereDuplicates(...values) {
  // create array
  const result = [];
  // push values to array
  result.push(...values);
  // loop over array with 2 pointers
  for (let i = 0; i < result.length; i++) {
    // pointer j starts next to i
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] === result[j]) {
        return true;
      }
    }
  }
  return false;
}

// short efficient solution
function areThereDuplicates1() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3));

console.log(areThereDuplicates1(1, 2, 3));
