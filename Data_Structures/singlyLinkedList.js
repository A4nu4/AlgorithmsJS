class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create new Node
    const newNode = new Node(val);
    // check if there is no head
    if (!this.head) {
      // assign head to newNode and tail to head
      this.head = newNode;
      this.tail = this.head;
    } else {
      // assign tail.next to newNode and tail to newNode
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increase length by 1 after pushing
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  get(index) {
    // check if index is not less than zero or more than length of list
    if (index < 0 || index >= this.length) return null;
    // create counter variable
    let counter = 0;
    // create current variable
    let current = this.head;
    // loop over list until reaching index
    while (counter !== index) {
      // move current value to next
      current = current.next;
      // add counter by 1
      counter++;
    }
    return current;
  }

  set(index, val) {
    // create node variable and use get method
    let node = this.get(index);
    // check if there is node
    if (node) {
      // assign node value to val
      node.val = val;
      return true;
    }
    return false;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  insert(index, val) {
    // check if index is less than zero or more than length of list
    if (index < 0 || index > this.length) return false;
    // check if index is the same as length and push newNode
    if (index === this.length) return !!this.push(val);
    // check if index is zero
    if (index === 0) return !!this.unshift(val);
    // create newNode and set next property on that node from list to be new Node
    let newNode = new Node(val);
    // create previous value by get
    let prev = this.get(index - 1);
    // create temp value and set it to be prev.next
    let temp = prev.next;
    // swap with newNode and then temp
    prev.next = newNode;
    newNode.next = temp;
    // increment length
    this.length++;
    return true;
  }

  remove(index) {
    // check if index is less than zero or greater than length
    if (index < 0 || index > this.length) return undefined;
    // access node at the index - 1
    let previousNode = this.get(index - 1);
    // set next node of previousNode to be next node of removed
    let removed = previousNode.next;
    previousNode.next = removed.next;
    // decrement length
    this.length--;
    return removed;
  }

  rotate(n) {
    let trueN = ((n % this.length) + this.length) % this.length;
    if (trueN === 0) return this;
    let count = 0;
    let cur = this.head;
    while (count < trueN - 1) {
      cur = cur.next;
      count++;
    }
    this.tail.next = this.head;
    this.tail = cur;
    this.head = cur.next;
    this.tail.next = null;
    return this;
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25).push(30);
console.log(singlyLinkedList.length);
console.log(singlyLinkedList.head.val);
console.log(singlyLinkedList);
console.log(singlyLinkedList.head.next.next.val);

console.log("\nPOP: ");
console.log(singlyLinkedList.pop().val);

console.log("\nGET: ");
console.log(singlyLinkedList.get(0).val);
console.log(singlyLinkedList.get(1).val);
console.log(singlyLinkedList.get(2).val);
console.log(singlyLinkedList.get(3).val);
console.log(singlyLinkedList.get(4));

console.log("\nSET: ");
console.log(singlyLinkedList.set(0, 10));
console.log(singlyLinkedList.set(1, 2));
console.log(singlyLinkedList.set(10, 10));
console.log(singlyLinkedList.set(3, 100));
console.log(singlyLinkedList.head.val);

console.log("\nINSERT: ");
console.log(singlyLinkedList.insert(2, 12));
console.log(singlyLinkedList.insert(100, 12));

console.log("\nREMOVE: ");
console.log(singlyLinkedList.remove(2).val);
console.log(singlyLinkedList.remove(100));

console.log("\nROTATE: ");
console.log(singlyLinkedList.rotate(3));
console.log(singlyLinkedList.head.val);
console.log(singlyLinkedList.head.next.val);
console.log(singlyLinkedList.head.next.next.val);
console.log(singlyLinkedList.head.next.next.next.val);
console.log(singlyLinkedList.head.next.next.next.next.val);
console.log(singlyLinkedList.tail.val);
console.log(singlyLinkedList.tail.next);
