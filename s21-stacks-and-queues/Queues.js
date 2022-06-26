class MyNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        let node = this.first;

        const arr = [];
        while (node) {
            arr.push(node.value);
            node = node.next;
        }
        console.log(`Values on the list (length ${this.size}) are:\t ${arr}`);
    }

    enqueue(value) {
        let newNode = new MyNode(value);

        if (!this.first) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        let currentValue = this.first.value;
        let tempNode = this.first;

        if (this.first === this.last) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }

        // delete link to main list fromo the unreferenced node that we wont use anymore
        tempNode.next = null;

        return currentValue;
    }
}

module.exports = Queue;

// TEST FUNCITONALITY

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// console.log("Initial queue:");
// queue.print();

// console.log("After dequeue");
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.print();
