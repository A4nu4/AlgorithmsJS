function sameFrequency(num1, num2) {
  // Turn num1 and num2 into string
  num1 = String(num1);
  num2 = String(num2);

  if (num1.length !== num2.length) return false;

  // create frequency counter
  let frequencyCounter1 = {};

  // turn num1 into array
  num1 = num1.split("");
  // loop over num1
  for (let digit of num1) {
    // move digits of num1 to frequencyCounter1
    frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
  }

  // turn num2 into array
  num2 = num2.split("");
  // loop over frequencyCounter1
  for (let digit of num2) {
    // Check if key from frequencyCounter1 also exists in num2
    if (!(digit in frequencyCounter1)) {
      return false;
    }
    if (frequencyCounter1[digit] <= 0) {
      return false;
    }
    frequencyCounter1[digit]--;
  }
  return true;
}

console.log(sameFrequency(182, 281));
