class Stack {
  constructor() {
    // create 2 queues
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }
  push(val) {
    // push value to queue2
    this.queue2.enqueue(val);
    // create while loop that stops when queue1 is empty
    while (this.queue1.size !== 0) {
      // remove first element from QUEUE
      const firstEl = this.queue1.dequeue();
      // add firstEl to queue2
      this.queue2.enqueue(firstEl);
    }
    // swap queue1 and queue2
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    return this;
  }
  pop() {
    // check if queue1 is empty and return null
    if (this.queue1.size === 0) return null;
    // remove first element from queue1 and return it
    return this.queue1.dequeue();
  }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

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
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var s = new Stack();

console.log("PUSH:");
s.push(10).push(20).push(30);
console.log(s);

console.log("\nPOP:");
console.log(s.pop());
console.log(s.pop());
console.log(s);
