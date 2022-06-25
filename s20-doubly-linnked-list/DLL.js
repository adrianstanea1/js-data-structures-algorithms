class MyNode {
    constructor(value) {
        // base node with forwads and backwards links
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedLis {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getLength() {
        return this.length;
    }

    print(reverse = false) {
        // REVERSE: true => go from tail to head
        // else traverse from head to tail
        let node = reverse ? this.tail : this.head;

        const arr = [];
        while (node) {
            arr.push(node.value);
            node = reverse ? node.previous : node.next;
        }
        console.log(`Values on the list (length ${this.length}) are:\t ${arr}`);
        console.log(`HEAD: ${this.head.value} \t TAIL: ${this.tail.value}`);
    }

    // BASIC OPERATIONS

    // ADD new node to the end of the list
    push(value) {
        if (!this.head) {
            // case when the list is empty
            this.head = this.tail = new MyNode(value);
        } else {
            // case when we have elements save; create bidirectional link and move tail
            let node = new MyNode(value);
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;

        return this;
    }

    // REMOVE last item from the list
    pop() {
        let value = undefined;
        if (!this.head) {
            // list is already empty; can't perform operation
            return undefined;
        }
        let poppedNode = this.tail;

        if (this.length === 1) {
            // only 1 node, so we just delete it's reference
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.previous; // move tail 1 place back
            this.tail.next = null; // break forward link
        }

        poppedNode.previous = null; // break backwards link, we return this node and dont want to give access to the rest of the list

        this.length--;
        return poppedNode;
    }

    // REMOVE a node from the beginning
    shift() {
        if (!this.head) {
            // list is empty
            return undefined;
        }

        let outputNode = this.head;

        if (this.head == this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null; // break backwards link to the previous head
        }

        outputNode.next = null; // break initial forward link so that user dosent have access to the rest of the list

        this.length--;
        return outputNode;
    }

    // ADD node to the beginning of the list
    unshift(value) {
        if (!this.head) {
            this.head = this.tail = new MyNode(value);
        } else {
            let newNode = new MyNode(value);

            newNode.next = this.head; // create forwards link
            this.head.previous = newNode; // create backwards link
            this.head = newNode; // move head to the new position
        }

        this.length++;
        return this;
    }

    // retrieve data from a specified index
    get(index) {
        let node = this.traverse(index);

        return node.value;
    }

    // change value of a specified node
    set(index, value) {
        let node = this.traverse(index);

        // shortcircuit
        if (!node) return false;

        // change value
        node.value = value;
        return true;
    }

    insert(index, value) {
        if (!this.isValidIndex(index)) return null;

        if (index == 0) {
            return this.unshift(value);
        }
        if (index == this.length - 1) {
            return this.push(value);
        }
        this.length++;

        // A   B   C   D   E
        //         *   *
        //           * -> inserted node in between

        let insertedNode = new MyNode(value);
        let previousNode = this.traverse(index - 1);
        let selectedNode = previousNode.next;

        // create links for the inserted node
        insertedNode.previous = previousNode;
        insertedNode.next = selectedNode;

        // adapt links from adjacent nodes to mantain valid bidirectional linking
        previousNode.next = insertedNode;
        selectedNode.previous = insertedNode;

        return insertedNode; // return reference to inserted node for easier debugging
    }

    // remove node from a specified index
    remove(index) {
        if (!this.isValidIndex(index)) return null;

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        this.length--;

        let selectedNode = this.traverse(index);
        let previousNode = selectedNode.previous;
        let nextNode = selectedNode.next;

        // adapt link from adjacent nodes where we remove the node
        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        // dele references to the DLL so that the retrieved node can't alter the original list
        selectedNode.next = null;
        selectedNode.previous = null;

        return selectedNode;
    }

    // HELPER FUNCTIONS

    isValidIndex = (index) => index >= 0 && index < this.length;

    traverse(index) {
        if (!this.isValidIndex(index)) return null;

        let countForwads = index < this.length / 2 ? true : false;
        let count = countForwads ? 0 : this.length - 1; // decide starging point
        let traversingNode = countForwads ? this.head : this.tail;

        console.log(countForwads ? "From START" : "From END");

        while (count != index) {
            if (countForwads) {
                count++;
                traversingNode = traversingNode.next;
            } else {
                count--;
                traversingNode = traversingNode.previous;
            }
        }

        return traversingNode;
    }
}

let list = new DoublyLinkedLis();

// 1 -> test push method
list.push(1).push(2).push(3);
list.print();
// console.dir(list);

// 2 -> test pop method
console.log(list.pop());

list.print();

// 3 -> shift method
console.log("\nShift test");
list.push(5).push(6).push(7);
list.print();
console.log(list.shift());
list.print();

// 4 -> unshift method test
// list = new DoublyLinkedLis();
// list.unshift(100);
// list.unshift(200);
// list.print();

// 5 -> get value from a specific index
console.log(list.get(3));

// 6 -> set method
list.set(3, 777);
list.set(6, 777);
list.set(-1, 777);

list.print();

// 6 -> insert value at a specific index

list.insert(0, -1);
list.insert(list.getLength() - 1, -2);
console.log(list.insert(2, -5));
list.print();

//  7 -> remove: allows user to delete node from a specified index
console.log("REMOVE TESTING");
console.log(list.remove(2));
console.log(list.remove(0));
console.log(list.remove(list.getLength - 1));
list.print();
