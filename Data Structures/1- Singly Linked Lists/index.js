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

  // adding new node at the end of the list
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

  // removing node at end
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

  // Adding new node at start of the list 
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

  // Removing first node 
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

  // Getting the value of a node based on its position.
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

    return currentNode.val;
  }

  // Updating the value of a node based on its position. 
  set(i, value) {
    let foundNode = this.get(i);

    if (foundNode) {
      foundNode.val = value;
      return true;
    }

    return false;
  }

  // inserting new node at i'th position
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

  // removing i'th node 
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

  // reversing our list in place
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let prevNode = null;
    let nextNode;

    for (let i = 0; i < this.length; i++) {
      // OR while (currentNode)
      nextNode = currentNode.next;
      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }

  // traversing out list
  print() {
    let myhead = this.head;
    let result = "";
    while (myhead) {
      result += `${myhead.val} `;
      myhead = myhead.next;
    }
    console.log(result + "\n");
  }

  // converting our list to array
  // This is something we don't usually do 
  convertToArr() {
    let node = this.head;
    let arr = [];

    while (node) {
      arr.push(node.val);
      node = node.next;
    }

    return arr;
  }
}

// make SinglyLinkedList object
let list = new SinglyLinkedList();

// pushing A B C D to our list
list.push("A");
list.push("B");
list.push("C");
list.push("D");

// traversing the whole list
list.print();

// remove last node
list.pop();
list.print();

// add new A+ node at start
list.unshift("A+");
list.print();

// remove first node
list.shift();
list.print();

// reversing the list
list.reverse();
list.print();