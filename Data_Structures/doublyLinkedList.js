class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // create newNode to contain new Node with val inside
    let newNode = new Node(val);
    // check if length is 0
    if (this.length === 0) {
      // assign head and tail to newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // assign next value to tail to newNode
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // check if there is no head
    if (!this.head) return undefined;
    let removedVal = this.tail;
    // check if length is 1
    if (this.length === 1) {
      // assign head and tail to null
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedVal.prev;
      this.tail.next = null;
      removedVal.next = null;
    }
    // decrement the length;
    this.length--;
    return removedVal;
  }
  shift() {
    // check if length is 0
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    // check if length is 1
    if (this.length === 1) {
      // set head and tail to be null
      this.head = null;
      this.tail = null;
    } else {
      // set head to next of oldHead
      this.head = oldHead.next;
      // set previous of head and next of oldHead to null
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    // create new node with val inside
    let newNode = new Node(val);
    // check if length is 0
    if (this.length === 0) {
      // set head and tail to be newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set previous property on head of list to be newNode
      this.head.prev = newNode;
      // set next property on new node to be head property
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    // add edge case to check if index is not less than zero or more than length of list
    if (index < 0 || index >= this.length) return null;
    let count, current;
    // check if index is less than half of length
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      // create loop until count reaches index value
      while (count !== index) {
        // move current forward
        current = current.next;
        count++;
      }
    } else {
      // set count to be end of list
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    // check if index is less than zero or more than or equal to length
    if (index < 0 || index >= this.length) return false;
    // check if index is 0, then unshift
    if (index === 0) return !!this.unshift(val);
    // check if index is equal to length, then push
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    // access index-1 by get method and set new variable to next of it
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    ((beforeNode.next = newNode), (newNode.prev = beforeNode));
    ((newNode.next = afterNode), (afterNode.prev = newNode));

    this.length++;
    return true;
  }
  remove(index) {
    // check if index is less than zero or more than or equal to length
    if (index < 0 || index >= this.length) return undefined;
    // check if index is 0, then shift
    if (index === 0) this.shift();
    // check if index is length-1, then pop
    if (index === this.length - 1) this.pop();
    // create removed variable by get method
    let removedVal = this.get(index);
    // update next and prev properties to remove the found node from list
    let beforeNode = removedVal.prev;
    let afterNode = removedVal.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // set next and prev to null on the found node
    removedVal.next = null;
    removedVal.prev = null;
    // decrement length
    this.length--;
    return removedVal;
  }
  reverse() {
    // create current variable set to head
    let current = this.head;

    // create while loop that stops when current becomes null
    while (current !== null) {
      // swap current.next and current.prev
      let temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = current.prev;
    }
    // swap head and tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }
}

var doublyLinkedList = new DoublyLinkedList();

console.log(
  doublyLinkedList.push(5).push(10).push(15).push(20).push(25).push(30),
);

console.log("\nGET: ");
console.log(doublyLinkedList.get(0).val);
console.log(doublyLinkedList.get(1).val);
console.log(doublyLinkedList.get(2).val);
console.log(doublyLinkedList.get(3).val);
console.log(doublyLinkedList.get(4));

console.log("\nSHIFT: ");
console.log(doublyLinkedList.shift().val);
console.log(doublyLinkedList.length);
console.log(doublyLinkedList.shift().val);
console.log(doublyLinkedList.length);

console.log("\nUNSHIFT: ");
console.log(doublyLinkedList.unshift(10));
console.log(doublyLinkedList.length);

console.log("\nSET: ");
console.log(doublyLinkedList.set(0, 10));
console.log(doublyLinkedList.length);
console.log(doublyLinkedList.head.val);
console.log(doublyLinkedList.set(10, 10));
console.log(doublyLinkedList.set(2, 100));
console.log(doublyLinkedList.head.next.next.val);

console.log("\nPOP: ");
console.log(doublyLinkedList.pop().val);
console.log(doublyLinkedList.length);
console.log(doublyLinkedList.pop().val);
console.log(doublyLinkedList.length);

console.log("\nINSERT: ");
console.log(doublyLinkedList.insert(2, 12));
console.log(doublyLinkedList.insert(100, 12));

console.log("\nREMOVE: ");
console.log(doublyLinkedList.remove(2).val);
console.log(doublyLinkedList.remove(100));

console.log("\nREVERSE: ");
console.log(doublyLinkedList.reverse());
