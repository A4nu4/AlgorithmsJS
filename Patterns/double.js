function double(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}
const arr = [1, 2, 3];
console.log(double(arr));
