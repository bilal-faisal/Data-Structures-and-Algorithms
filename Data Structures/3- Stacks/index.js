// Stacks
console.clear();

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // pushing at start
  push(val) {
    let newNode = new Node(val);
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldNode = this.first;
      this.first = newNode;
      newNode.next = oldNode;
    }
    return ++this.size;
  }

  // popping from start
  pop() {
    if (this.size == 0) {
      return null;
    }
    let removeNode = this.first;
    if(this.size == 1){
        this.first = null;
        this.last = null;
    }else{
        this.first = removeNode.next;
    }
    this.size--;
    removeNode.next = null;

    return removeNode.val;
  }

  // traversing out stack
  print() {
    let myhead = this.first;
    let result = "";
    while (myhead) {
      result += `${myhead.val} \n`;
      myhead = myhead.next;
    }
    console.log(result);
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack);