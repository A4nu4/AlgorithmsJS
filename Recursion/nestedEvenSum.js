function nestedEvenSum(obj) {
  // create sum variable
  let sum = 0;
  // iterate over object's values
  for (let value of Object.values(obj)) {
    // check if value is number
    if (typeof value === "number") {
      // check if value is even
      if (value % 2 === 0) {
        sum += value;
      }
    }
    // check if value is object
    if (typeof value === "object" && value !== null) {
      // add it to sum by recursive call
      sum += nestedEvenSum(value);
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
