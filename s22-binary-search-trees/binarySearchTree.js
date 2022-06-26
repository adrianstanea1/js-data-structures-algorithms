//  every parent node has at most 2 children
//  any left child node is less than the parent whereas any right  node is greater than the parent

const Stack = require("../s21-stacks-and-queues/Stack");
const Queue = require("../s21-stacks-and-queues/Queues");

class MyNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertRecursive(value, node = this.root) {
        if (!node) {
            node = new MyNode(value);
            return node;
        }
        if (node.value === value) return null;

        if (value < node.value) {
            node.left = this.insertRecursive(value, node.left);
            return node;
        }

        if (value > node.value) {
            node.right = this.insertRecursive(value, node.right);
            return node;
        }
    }

    insert(value) {
        let insertedNode = new MyNode(value);
        let currentNode = this.root;

        // shortcircuit when the BST is initially empyy we just assign a new root to it
        if (!this.root) {
            this.root = insertedNode;
            return this;
        }

        while (true) {
            if (value === currentNode.value) {
                return null;
            }

            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = insertedNode;
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            }

            if (value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = insertedNode;
                    return this;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    // search for a specific value; we return the node that contains it within the BST
    search(value) {
        if (!this.root) return false;

        let currentNode = this.root; // used to traverse the tree so that we dont loose the root

        while (currentNode) {
            // we find the target value while traversing the tree
            if (currentNode.value === value) return currentNode;

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.right) {
                currentNode = currentNode.right;
            }
        }
        // we get to a null leaf while traversing, that means the value is no present withing the BST
        return currentNode;
    }

    contains(value) {
        // cast to Boolean if the resulting node is a truthy of falsy value
        return !!this.search(value);
    }

    // BFS -> breadth first search
    //      we create a list with all the items contained within the tree by traversing from left to rigth on each level

    BFS() {
        const queue = new Queue(); // used to save nodes as we traverse from left to right
        queue.enqueue(this.root);
        const visited = []; // we store the values of each node we have visited here

        let currentNode = null; // assign a node stored into the queue to a variable for easier access
        while ((currentNode = queue.dequeue())) {
            if (currentNode.left) {
                queue.enqueue(currentNode.left);
            }
            if (currentNode.right) {
                queue.enqueue(currentNode.right);
            }

            visited.push(currentNode.value);
        }

        return visited;
    }

    // DFS => depth first search
    //      we traverse down the tree first, then we start saving data
    //      posibilities: PreOrder, PostOrder, InOrder

    // The resulting data is usefull to CLONE the tree; it's the expected order to recreate using insert; therefore we can store an array in a database and then recreate a BST in memory
    DFSPreorder() {
        const data = [];

        function traverse(node) {
            // make recursive calls; at each stept we save the current value;
            //  then we advance as much through the left while saving nodes,
            // then we come back to store the right node
            data.push(node.value);

            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);

        return data;
    }

    //  PostOrder: first we visit each child node from a branch and then we start building the resulting
    // list with the values from bottom to top
    // The last value we store is the root.value
    DFSPostOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }

            data.push(node.value);
        }
        traverse(this.root);

        return data;
    }

    // InOrder: we store values from leftmost node and propagate towards root; then we go down through the main right branch
    //  The resulting data is placed in ASCENDING ORDER
    DFSInOrder() {
        const data = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.value);

            if (node.right) {
                traverse(node.right);
                data.push(node.value);
            }
        }
        traverse(this.root);

        return data;
    }
}

module.exports = BinarySearchTree;
