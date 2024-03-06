class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.capacity = size;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (this.isFull()) return;
    else {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const element = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return element;
  }
}

const list = new CircularQueue(5);
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.dequeue();

console.log({ list })
list.dequeue();
console.log({ list })


class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  insert(value) {
    const treeNode = new TreeNode(value);
    if (this.root === null) {
      this.root = treeNode;
    } else {
      this.insertNode(this.root, treeNode);
    }
  }

  search(rootNode, value) {
    if (!rootNode) return false;
    if (rootNode.value === value) {
      return true;
    } else if (rootNode.value < value) {
      return this.search(rootNode.right, value);
    } else {
      return this.search(rootNode.left, value);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(60);
bst.insert(70);
bst.insert(10);
bst.insert(20);
bst.insert(49);


console.log({ bst: JSON.stringify(bst) })
console.log({ bst: bst.search(bst.root, 10) })
console.log({ bst: bst.search(bst.root, 49) })
