// LINKED_LIST
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize () {
    return this.size;
  }

  prepend(value) {
    const node = new ListNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  displayList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  append(value) {
    const node = new ListNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return null;
    if (index === 0) this.prepend(value);
    else {
      let node = new ListNode(value);
      let currentNode = this.head;
      for(let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      if (currentNode) {
        node.next = currentNode.next;
        currentNode.next = node
      }
      this.size++;
    }
  }

  remove(index) {
    if (this.isEmpty()) return null;
    if (index < 0 || index >= this.size) return null;
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      if (currentNode) {
        removedNode = currentNode.next;
        currentNode.next = removedNode.next;
      }
    }
    this.size--;
    return removedNode;
  }

  removeValue(value) {
    let currentNode = this.head;
    let removedNode;
    if (this.head.value === value) {
      removedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removedNode;
    }
    while (currentNode.next && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode.next) {
      removedNode = currentNode.next;
      currentNode.next = removedNode.next;
    }
    this.size--;
    return removedNode;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode;
    let nextNode;
    while(currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    console.log({ string: this.displayList() })
  }
}

const newList = new LinkedList();
newList.prepend('Hi');
newList.prepend('My');
newList.prepend('name');
newList.append('is');
newList.append('Brian');
// newList.prepend('Dumbledore');

newList.insert('Albus', 5);

console.log({ list: newList.displayList() });
console.log({ size: newList.size });

// const removed = newList.remove(6);

console.log({ size: newList.size });
newList.reverse();

