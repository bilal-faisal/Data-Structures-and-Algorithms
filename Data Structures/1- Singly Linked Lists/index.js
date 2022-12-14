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

  get(i) {
    if (i < 0 || i >= this.length) {
      return null;
    }

    let counter = 0;
    let currentNode = this.head;
    while (counter < i) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
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
    if (i < 0 || i > this.length) return false;

    if (i === this.length) {
      this.push(value);
      return true;
    }

    if (i === 0) {
      this.unshift(value);
      return true;
    }

    let newNode = new Node(value);
    let prevNode = this.get(i - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return false;

    if (i == this.length - 1) {
      return this.pop();
    }

    if (i == 0) {
      return this.shift();
    }

    let prevNode = this.get(i - 1);
    let removedNode = prevNode.next;
    let nextNode = removedNode.next;

    prevNode.next = nextNode;
    this.length--;

    return true;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let prevNode = null;
    let nextNode;

    for (let i = 0; i < this.length; i++) { // while (currentNode)
      nextNode = currentNode.next;
      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }

  traverse() {
    let myhead = this.head;
    while (myhead) {
      console.log(myhead.val);
      myhead = myhead.next;
    }
  }

  print(){
    let node = this.head;
    let arr = [];

    while(node){
      arr.push(node.val)
      node = node.next;
    }

    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.print()
list.reverse();
list.print()
