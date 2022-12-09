// get(i) {
//   if (i < 0 || i >= this.length) {
//     return null;
//   }

//   let counter = 0;
//   let node = this.head;
//   while (counter < i) {
//     node = node.next;
//     counter++;
//   }
//   return node.val;
// }

// set(i, value) {
//   if (i < 0 || i >= this.length) {
//     return false;
//   }

//   let counter = 0;
//   let node = this.head;
//   while (counter < i) {
//     node = node.next;
//     counter++;
//   }

//   node.val = value;
//   return true;
// }

// let first = new Node("Hi")
// first.next = new Node("There")
// first.next.next = new Node("How")
// first.next.next.next = new Node("Are")
// first.next.next.next.next = new Node("You")

// console.log(first);


  // reverse() {
  //   let prevNode = this.head;
  //   let currNode = this.head.next;
  //   this.head.next = null;
  //   for (let i = 1; i < this.length; i++) {
  //     let nextNode = currNode.next;
  //     currNode.next = prevNode;

  //     prevNode = currNode;
  //     currNode = nextNode;
  //   }

  //   let temp = this.head;
  //   this.head = this.tail;
  //   this.tail = temp;

  //   return this;
  // }

  // reverse(){
  //   let prevNode = this.head;
  //   let currentNode = prevNode.next;
  //   [this.head,this.tail] = [this.tail,this.head];
  //   this.tail.next = null;

  //   // console.log(prevNode.val,currentNode.val);
  //   for (let i = 1; i < this.length; i++) {
  //     console.log(prevNode.val,currentNode.val);
  //     let temp = currentNode.next;

  //     currentNode.next = prevNode;

  //     prevNode = currentNode;
  //     currentNode = temp;

  //   }

  // }
