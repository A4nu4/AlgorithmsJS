function collectStrings(obj) {
  // create array
  const results = [];
  // iterate over object's keys
  for (let key of Object.keys(obj)) {
    // check if value is string
    if (typeof obj[key] === "string") {
      // push value to array
      results.push(obj[key]);
    }
    // check if values is object and not null
    else if (typeof obj[key] === "object" && obj[key] !== null) {
      // go deeper into other object
      results.push(...collectStrings(obj[key]));
    }
  }
  return results;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
