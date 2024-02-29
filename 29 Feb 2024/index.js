const a = new String('Hey');
const b = String('Hey');
const c = a + b;

class A {

}

const d = new A();

const e = 'aBCDEFGH';
const f = e.charAt(0);
const f1 = e.charAt(1);
const f2 = e.charCodeAt(0);
const f3 = e.charCodeAt(2);
const f4 = e.codePointAt(1);
const f5 = e.codePointAt(2);

// HASH-TABLE
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  #hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.#hash(key);
    if (!this.table[index]) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = this.table[index].find((item) => item[0] === key)
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        this.table[index].push([key, value]);
      }
    }
  }

  display() {
    return JSON.stringify(this.table);
  }

  remove(key) {
    const index = this.#hash(key);
    if (this.table[index]) {
      const sameKeyItem = this.table[index].find(e => e[0] == key);
      if (sameKeyItem) {
        this.table[index].splice(this.table[index].indexOf(sameKeyItem), 1);
      }
    }
  }

}


// const hashTable = new HashTable(5);
// hashTable.set('name', 'Brian');

// console.log({ hashTable, display: hashTable.display() });

// hashTable.set('name', 'Dumbledore');

// console.log({ hashTable, display: hashTable.display() });
// hashTable.set('mane', 'Albus');


// console.log({ hashTable, display: hashTable.display() });
// hashTable.remove('name');
// console.log({ hashTable, display: hashTable.display() });




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
      node.next = null;
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  displayList() {
    let currentNode = this.head;
    if (this.isEmpty()) return "empty list";
    const vals = [];
    while (currentNode) {
      vals.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return vals;
  }

  getLastNode() {
    let currentNode = this.head;
    if (this.isEmpty()) return this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  append(value) {
    const node = new ListNode(value);
    if (this.isEmpty()) {
      node.next = null;
      this.head = node;
    } else {
      const lastNode = this.getLastNode();
      lastNode.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return;
    // Prepend
    if (index === 0) {
      this.prepend(value);
    } else {
      let currentNode = this.head;
      const newNode = new ListNode(value);
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index > this.size) return undefined;
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      removedNode = currentNode.next;
      currentNode.next = removedNode.next;
    }
  }
}

const newList = new LinkedList();
newList.prepend(1);
newList.prepend('2');
newList.prepend('2dsds');
newList.append('APPENDED');
newList.append('APPENDED11');
newList.prepend('2dsdsskfklsjfklfjs');
console.log({ newList: newList.displayList() });
newList.insert('inserted', 6);
newList.remove(1);

console.log({ newList: newList.displayList() });










// console.log({
//   a: typeof a ,
//   b: typeof b,
//   c: typeof c,
//   d: typeof d,
//   e, f, f1, f2, f3, f4, f5,
// });

// STACK
class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  push(value) {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    const nodeToDelete = this.head;
    this.head = this.head.next;
    nodeToDelete.next = null;
    this.size--;
    return nodeToDelete.value;
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(12);
// stack.push(13);
// stack.push(14);
// stack.push(15);

// console.log({ stack });
// stack.pop();
// stack.pop();
// stack.pop();
// console.log({ stack });
