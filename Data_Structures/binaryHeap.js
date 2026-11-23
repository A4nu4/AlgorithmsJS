class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    // push element into values array
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    // get last index and array element
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      // get parent and index
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // check if element is greater than parent
      if (element <= parent) break;
      // set parent value to element
      this.values[parentIdx] = element;
      // set array value to parent
      this.values[idx] = parent;
      // assign index to index of parent
      idx = parentIdx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

binaryHeap = new MaxBinaryHeap();

console.log("INSERT: ");
[1, 2, 3, 4, 5, 6].forEach((value) => binaryHeap.insert(value));
console.log(binaryHeap.values);

console.log("\nEXTRACT MAX: ");
binaryHeap.extractMax();
console.log(binaryHeap.values);

binaryHeap.extractMax();
console.log(binaryHeap.values);
