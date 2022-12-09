// Singly Linked List
console.clear();

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
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (this.length == 0) {
      return undefined;
    }

    let x = this.head;
    let y = this.head.next;

    while (y.next) {
      x = x.next;
      y = y.next;
    }

    this.tail = x;
    this.tail.next = null;
    this.length--;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    }

    return y;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  shift() {
    if (this.length == 0) {
      return undefined;
    }

    let prevHead = this.head;

    this.head = prevHead.next;
    this.length--;

    if (this.length == 0) {
      this.tail = null;
    }

    return prevHead;
  }

  traverse() {
    let myhead = this.head;
    while (myhead) {
      console.log(myhead.val);
      myhead = myhead.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.traverse();
