class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // create new node with val inside
    let newNode = new Node(val);
    // check if there is first value
    if (!this.first) {
      // set first and last values to newNode
      this.first = newNode;
      this.last = newNode;
    } else {
      // set next of last value to newNode
      this.last.next = newNode;
      // set last value to newNode
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    // check if queue is empty
    if (!this.first) return null;
    let temp = this.first;
    // check if first value is equal to last
    if (this.first === this.last) {
      // set last value to null
      this.last = null;
    }
    // assign first to next value
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var queue = new Queue();

console.log("ENQUEUE: ");
console.log(queue.enqueue(10));
console.log(queue.enqueue(100));
console.log(queue.enqueue(1000));

console.log("\nDEQUEUE: ");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
