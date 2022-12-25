// Queues
console.clear();

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Adding at end
    enqueue(val) {
        let newNode = new Node(val);
        if (this.size == 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let prevNode = this.last;
            this.last = newNode;
            prevNode.next = newNode;
        }
        return ++this.size
    }

    // Removing from beginning
    dequeue() {
        if (this.size == 0) {
            return null;
        }
        let removeNode = this.first;
        if (this.size == 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removeNode.next;
        }
        this.size--;
        removeNode.next = null;

        return removeNode.val;
    }
}

let queue = new Queue();
// adding to queue
queue.enqueue("First");
queue.enqueue("Second");
queue.enqueue("Third");
// removing from queue
queue.dequeue();
console.log(queue);

