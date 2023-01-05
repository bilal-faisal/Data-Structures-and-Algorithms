// Tree Traversal

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

    BFS() {
        let queue = [];
        let result = [];
        let node;

        if (this.root) queue.push(this.root);

        while (queue.length) {
            node = queue.shift();

            result.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        console.log(result);
        return result;
    }

    DFS_pre_order() {
        let result = [];
        let current = this.root;

        function traverse(node) {
            result.push(node.val);
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)

        console.log(result);
        return result;
    }

    DFS_post_order() {
        let result = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            result.push(node.val);
        }
        traverse(current);
        console.log(result);
        return result;
    }

    DFS_in_order() {
        let result = [];
        let current = this.root;
        function traverse(node) {
            node.left && traverse(node.left)
            // if(node.left) traverse(node.left)

            result.push(node.val);

            node.right && traverse(node.right)
            // if(node.right) traverse(node.right)
        }
        traverse(current);
        console.log(result);
        return result;
    }
}

//       7
//    4     9
//  2   5  
//   3
let tree = new BinarySearchTree();
tree.insert(7);
tree.insert(4);
tree.insert(2);
tree.insert(9);
tree.insert(5);
tree.insert(3);
tree.insert(4);
tree.insert(8);

tree.BFS();               //  7 4 9 2 5 3

tree.DFS_pre_order();     //  7 4 2 3 5 9
tree.DFS_post_order();    //  3 2 5 4 9 7 
tree.DFS_in_order();      //  2 3 4 5 7 9 