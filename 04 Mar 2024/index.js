class LinkNode {
  constructor(value, next) {
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

  returnList() {
    const listItems = [];
    let currentNode = this.head;
    while (currentNode) {
      listItems.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listItems;
  }

  displayList() {
    console.log({ list: this.returnList() });
  }

  prepend(value) {
    const newNode = new LinkNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new LinkNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new LinkNode(value);
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
      }
    }
  }

  remove(index) {
    if (this.isEmpty()) return null;
    if (index < 0 || index > this.size) return null;
    let removedNode;
    if (index === 0) {
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
    if (this.isEmpty()) return null;
    let removedNode;
    if (this.head.value === value) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      while (currentNode.next && currentNode.next.value !== value) {
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

  reverse() {
    let currentNode = this.head;
    let previousNode;
    let nextNode;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
    this.displayList();
  }
}

const linkedList = new LinkedList();
linkedList.prepend(1);
linkedList.prepend(2);
linkedList.prepend(3);
linkedList.prepend(4);

linkedList.append('A');
linkedList.append('B');
linkedList.append('C');
linkedList.append('D');

linkedList.insert('Hey', 7);
linkedList.remove(6)

linkedList.displayList();

linkedList.removeValue('Hey');
linkedList.displayList();
linkedList.reverse();