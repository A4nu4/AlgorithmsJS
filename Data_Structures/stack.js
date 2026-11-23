class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    // create new node with val inside
    let newNode = new Node(val);
    // check if there is first value
    if (!this.first) {
      // make first and last values equal to newNode
      this.first = newNode;
      this.last = newNode;
    } else {
      // create temp value and swap with first value
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    // increase size
    return ++this.size;
  }
  pop() {
    // create temp variable with first value in it
    let temp = this.first;
    // check if first is equal to last value
    if (this.first === this.last) {
      // set last to null
      this.last = null;
    }
    // move first value to next
    this.first = this.first.next;
    // reduce size by 1
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();

console.log("PUSH: ");
console.log(stack.push(10));
console.log(stack.first.value);
console.log(stack.last.value);
console.log(stack.push(100));
console.log(stack.first.value);
console.log(stack.last.value);
console.log(stack.push(1000));
console.log(stack.first.value);
console.log(stack.last.value);

console.log("\nPOP: ");
var removed = stack.pop();
console.log(removed);
console.log(stack.size);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size);
