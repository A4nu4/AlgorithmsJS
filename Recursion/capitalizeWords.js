function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  // slice every word at index 0 from arr
  const word = arr[0];
  const capitalizedWord = word.toUpperCase();
  // slice rest of arr
  const restArr = arr.slice(1);
  return [capitalizedWord].concat(capitalizeWords(restArr));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words));
