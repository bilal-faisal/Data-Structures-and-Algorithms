// Binary Heaps
// Max Binary Heap

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);

        // bubble up
        let index = this.values.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentElement = this.values[parentIndex];

            if (element > parentElement) {
                // swapping
                this.values[parentIndex] = element;
                this.values[index] = parentElement;

                // updating index to be the parent index for next loop
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        // removing first and putting last to first 
        let max = this.values[0];
        let last = this.values.pop()
        if (this.values.length == 0) return max;
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
                if (leftChild > parent) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (rightChild > parent && rightChild > leftChild) {
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

        return max;
    }
}
let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)


//         55
//     39      41
//  18   27  12   33


//         41
//     39      33
//  18   27  12


//         39
//     27      33
//  18   12


//         33
//     27      12
//  18


//         27
//     18      12


//         18
//     12


//         12