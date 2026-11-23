function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    // rewrite comparator if it is not function
    comparator = (arrEl1, arrEl2) => {
      return arrEl1 - arrEl2;
    };
  }
  // write nested loop over arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // use comparator inside if condition
      if (comparator(arr[j], arr[j + 1]) > 0) {
        // create temp variable and swap values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([0, -10, 7, 4]));

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(bubbleSort(kitties, strComp));
