// Binary Heaps
// Min Binary Heap

class MinBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(newElement) {
        this.values.push(newElement);
        let index = this.values.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentElement = this.values[parentIndex];

            if (newElement >= parentElement) break;
            // swapping
            this.values[parentIndex] = newElement;
            this.values[index] = parentElement;

            index = parentIndex;
        }
    }


    extractMin() {
        // removing first and putting last to first 
        let min = this.values[0];
        let last = this.values.pop()
        if (this.values.length == 0) return min;
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
                if (leftChild < parent) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (rightChild < parent && rightChild < leftChild) {
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

        return min;
    }
}

//             5
//       26            7
//    43    31      100  50
//  5. 1.  5k 87
// 
let heap = new MinBinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
heap.insert(1);
console.log(heap.values);
heap.extractMin();
console.log(heap.values);

//         12
//     27      18
//  55   39  41   33


//         18
//     27      33
//  55   39  41


//         27
//     39      33
//  55   41


//         33
//     39      41
//  55


//         39
//     55      41


//         41
//     55


//         55  
