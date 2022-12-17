// Singly Linked List
console.clear();

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
    let node = new Node(val);
    if (this.length == 0) {
      this.head = node;
      this.tail = node;
    } else {
      let tail = this.tail;
      tail.next = node;
      node.prev = tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = oldTail.prev;
      this.tail = newTail;

      newTail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = oldHead.next;
      this.head = newHead;

      newHead.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      oldHead.prev = newNode;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(i) {
    if (i < 0 || i >= this.length) {
      return undefined;
    }
    let node = null;
    if (i < this.length / 2) {
      let count = 0;
      node = this.head;
      while (count < i) {
        node = node.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      node = this.tail;
      while (count > i) {
        node = node.prev;
        count--;
      }
    }
    return node;
  }
  set(i, value) {
    let foundNode = this.get(i);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  insert(i, value) {
    if (i < 0 || i > this.length) {
      return false;
    }

    if (i === 0) return !!this.unshift(value);
    // if (i === 0) {
    //   this.unshift(value);
    //   return true;
    // }

    if (i === this.length) {
      this.push(value);
      return true;
    }

    let prevNode = this.get(i - 1);
    let newNode = new Node(value);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) {
      return undefined;
    }
    if (i === 0) {
      return this.shift();
    }
    if (i === this.length - 1) {
      return this.pop();
    }

    let removedNode = this.get(i);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;

    removedNode.next = null;
    removedNode.prev = null;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;

    return removedNode;
  }

  printUsingNext() {
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr);
  }

  printUsingPrev() {
    let node = this.tail;
    let arr = [];
    while (node) {
      arr.unshift(node.val);
      node = node.prev;
    }
    console.log(arr);
  }
}

list = new DoublyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.insert(4, "E");
list.remove(2);

list.printUsingNext();
list.printUsingPrev();
console.log(list.length);
