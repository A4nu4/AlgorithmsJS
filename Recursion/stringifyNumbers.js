function stringifyNumbers(obj) {
  // create new object
  const results = Array.isArray(obj) ? [] : {};
  // iterate over object's keys
  for (let key of Object.keys(obj)) {
    // check if value is number
    if (typeof obj[key] === "number") {
      // add converted values to string from original object to new one
      results[key] = obj[key].toString();
    } else {
      // add all other values to new object
      results[key] = obj[key];
    }
    // check if value is object and not null
    if (typeof obj[key] === "object" && obj[key] !== null) {
      // use recursive call to access object inside object
      results[key] = stringifyNumbers(obj[key]);
    }
  }
  return results;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
