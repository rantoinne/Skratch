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
    this.capacity--;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return element;
  }
}