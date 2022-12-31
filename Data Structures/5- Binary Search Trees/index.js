// Binary Search Trees
console.clear();

class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (true) {
            if (value == currentNode.val) return undefined;
            if (value < currentNode.val) {
                // go to left
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                // go to right
                if (currentNode.right == null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }

    }
    
    find(value) {
        if (!this.root) return false;
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.val) {
                if (currentNode.left == null) {
                    return undefined;
                }
                currentNode = currentNode.left;
            }
            else if (value > currentNode.val) {
                if (currentNode.right == null) {
                    return undefined;
                }
                currentNode = currentNode.right;

            } else {
                return currentNode;
            }
        }
    }

}

//      7
//    4   9
//  2   5
//    3

let tree = new BinarySearchTree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(2);
tree.insert(5);
tree.insert(3);
