const BinarySearchTree = require("./binarySearchTree");

let tree = new BinarySearchTree();

//         10
//     6       15
//   3  8          20

tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(20);

console.log(tree);

console.log(`BFS => ${tree.BFS()}`);
console.log(`DFSPreorder => ${tree.DFSPreorder()}`);
console.log(`DFSPostOrder => ${tree.DFSPostOrder()}`);
console.log(`DFSInOrder => ${tree.DFSInOrder()}`);
