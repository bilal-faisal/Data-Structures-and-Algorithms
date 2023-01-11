// Priority Queue using Min Binary Heap

class Node {
    constructor(priority, val) {
        this.priority = priority;
        this.val = val;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(priority, val) {
        let newElement = new Node(priority, val)
        this.values.push(newElement);
        let index = this.values.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentElement = this.values[parentIndex];

            if (newElement.priority > parentElement.priority) break;
            // swapping
            this.values[parentIndex] = newElement;
            this.values[index] = parentElement;

            index = parentIndex;
        }
    }


    dequeue() {
        // removing first and putting last to first 
        let min = this.values[0];
        let last = this.values.pop()
        if (this.values.length == 0) return min.val;
        this.values[0] = last;

        // sink down
        let parentIndex = 0;
        let parent = this.values[0];
        let length = this.values.length;

        while (true) {
            let leftChildIndex = 2 * parentIndex + 1;
            let rightChildIndex = 2 * parentIndex + 2;

            let leftChild;    // reason for not initializing right there is as
            let rightChild;   // it may be a case where if does not even exist
            let swap = null;  // keeps track of if any swap is required in the loop
            // will store the position that we're going to swap with

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < parent.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (rightChild.priority < parent.priority && rightChild.priority < leftChild.priority) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            // swap
            [this.values[parentIndex], this.values[swap]] =
                [this.values[swap], this.values[parentIndex]]

            // this.values[parentIndex] = this.values[swap];
            // this.values[swap] = parent;

            parentIndex = swap;
        }

        return min.val;
    }
}

let heap = new PriorityQueue();
heap.enqueue(5, "Cold");
heap.enqueue(1, "Gunshot");
heap.enqueue(4, "High Fever");
heap.enqueue(2, "Broken Arm");
heap.enqueue(3, "Glass In Foot");
// heap.enqueue(3, "L");
// heap.enqueue(1, "H");
// heap.enqueue(5, "VL");
// heap.enqueue(1, "H");
// heap.enqueue(0, "VH");
// heap.enqueue(2, "M");
// heap.enqueue(3, "L");
console.log(heap.values);
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap.dequeue());