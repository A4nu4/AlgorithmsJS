function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  const firstEl = arr[0];
  const restEl = firstEl.slice(1);
  const capitalizedEl = firstEl.charAt(0).toUpperCase() + restEl;
  const restArr = arr.slice(1);
  // turn capitalizedEl into array element and add it to restArr
  return [capitalizedEl].concat(capitalizeFirst(restArr));
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
