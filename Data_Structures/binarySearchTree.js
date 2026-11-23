class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // check if tree is null
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    // check if tree is empty
    if (this.root === null) {
      return undefined;
    }
    // create current variable
    let current = this.root;
    // create loop while current is not null
    while (current !== null) {
      // check if value is equal to current
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  remove(value) {
    if (this.root === null) {
      return undefined;
    }
    // create current and parent variables
    let current = this.root;
    let parent = null;

    while (current !== null && current.value !== value) {
      parent = current;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (current === null) return undefined;

    let removedVal = current;
    // check if node has no children
    if (removedVal.left === null && removedVal.right === null) {
      // remove node from its parent
      if (current === this.root) {
        this.root = null;
      } else if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // check if node has children on left
    else if (removedVal.left !== null && removedVal.right === null) {
      if (current === this.root) {
        // set root to left value of current
        this.root = current.left;
        // check if current is equal to left value of parent
      } else if (current === parent.left) {
        // set left of parent to left of current
        parent.left = current.left;
      } else if (current === parent.right) {
        // set right of parent to left of current
        parent.right = current.left;
      }
    }
    // check if node has children on right
    else if (removedVal.left === null && removedVal.right !== null) {
      if (current === this.root) {
        // set root to right value of current
        this.root = current.right;
        // check if current is equal to left value of parent
      } else if (current === parent.left) {
        // set it to right of current
        parent.left = current.right;
      } else if (current === parent.right) {
        // set right of parent to right of current
        parent.right = current.right;
      }
    }
    // check if node has two children
    else {
      // find inorder successor
      let successor = current.right;
      let successorParent = current;

      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }
      // replace current value with successor value
      current.value = successor.value;
      // remove successor from its original position
      if (successorParent.left === successor) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
    }
    return removedVal;
  }
  breadthFirstSearch() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    // create empty array
    let data = [];
    // create function
    const traverse = (node) => {
      // check if node is null and skip
      if (node === null) return;
      // push node value to data
      data.push(node.value);

      // use recursion to check left and right to node value
      traverse(node.left);
      traverse(node.right);
    };
    // call function and put root inside it
    traverse(this.root);
    // return array
    return data;
  }
  DFSInOrder() {
    // create empty array
    let data = [];
    // create function
    const traverse = (node) => {
      // check if node is null and skip
      if (node === null) return;

      // use function to check left side of node
      traverse(node.left);
      // push node value to array
      data.push(node.value);
      // use function to check right side of node
      traverse(node.right);
    };

    // call function with root inside it
    traverse(this.root);
    // return array
    return data;
  }
  DFSPostOrder() {
    // create empty array
    let data = [];
    // create function
    const traverse = (node) => {
      // check if node is null and skip
      if (node === null) return;

      // use function to check left side of node
      traverse(node.left);
      // use function to check right side of node
      traverse(node.right);
      // push node value to array
      data.push(node.value);
    };

    // call function with root inside
    traverse(this.root);
    // return array
    return data;
  }
  findSecondLargest() {
    if (!this.root) return undefined;
    if (!this.root.left && !this.root.right) return undefined;
    // create variable for current and parent
    let current = this.root;
    let parent = null;

    // traverse to the rightmost node
    while (current.right !== null) {
      parent = current;
      current = current.right;
    }

    // check if there is left child
    if (current.left !== null) {
      let secondLargest = current.left;
      // create while loop when secondLargest has right child
      while (secondLargest.right !== null) {
        // move it to right
        secondLargest = secondLargest.right;
      }

      return secondLargest.value;
    }
    return parent.value;
  }
  isBalanced() {
    if (!this.root) return true;
    // create empty array for depths
    const depths = [];

    // implement helper function to traverse on tree
    const traverse = (node, depth) => {
      // check if there are no children
      if (!node.left && !node.right) {
        depths.push(depth);
        return;
      }
      // check if there is one child
      if ((node.left && !node.right) || (!node.left && node.right)) {
        depths.push(depth);
      }
      // check left side
      if (node.left) {
        traverse(node.left, depth + 1);
      }
      // check right side
      if (node.right) {
        traverse(node.right, depth + 1);
      }
    };
    traverse(this.root, 0);
    // create variables to calculate max and min depths
    const maxDepth = Math.max(...depths);
    const minDepth = Math.min(...depths);

    const difference = maxDepth - minDepth;

    return difference <= 1;
  }
}

var binarySearchTree = new BinarySearchTree();

console.log("INSERT: ");
binarySearchTree.insert(15);
binarySearchTree.insert(20);
console.log(binarySearchTree.insert(10));
console.log(binarySearchTree.insert(12));
console.log(binarySearchTree.root.value);
console.log(binarySearchTree.root.right.value);
console.log(binarySearchTree.root.left.right.value);

console.log("\nFIND: ");
var foundNode = binarySearchTree.find(20);
console.log(foundNode.value);
console.log(foundNode.left);
console.log(foundNode.right);

var binarySearchTree1 = new BinarySearchTree();
binarySearchTree1
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
console.log("\nREMOVE: ");
console.log(binarySearchTree1.remove(50));
console.log(binarySearchTree1.root.right.value);
console.log(binarySearchTree1.root.right.right);
console.log(binarySearchTree1.remove(5));
console.log(binarySearchTree1.root.left.left.value);
console.log(binarySearchTree1.root.left.left.right);

console.log("\nBFS: ");
binarySearchTree.insert(50).insert(5).insert(1);
console.log(binarySearchTree.breadthFirstSearch());

console.log("\nDEPTH FIRST PREORDER: ");
console.log(binarySearchTree.DFSPreOrder());

console.log("\nDEPTH FIRST INORDER: ");
console.log(binarySearchTree.DFSInOrder());

console.log("\nDEPTH FIRST POSTORDER: ");
console.log(binarySearchTree.DFSPostOrder());

console.log("\nFIND SECOND LARGEST VALUE:");
console.log(binarySearchTree.findSecondLargest());

console.log("\nIS BALANCED:");
console.log(binarySearchTree.isBalanced());
