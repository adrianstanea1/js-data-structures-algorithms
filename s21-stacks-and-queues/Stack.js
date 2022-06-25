class MyNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
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

    push(value) {
        let newNode = new MyNode(value);

        if (!this.first) {
            this.first = this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;

            // // update
            // this.last.next = newNode;
            // newNode.previous = this.last;
            // this.last = newNode;
        }

        return ++this.size;
    }

    pop() {
        if (this.size === 0) {
            return null;
        }
        let selectedNode = this.first;

        if (this.first == this.last) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }

        selectedNode.next = null;

        this.size--;
        return selectedNode;
    }
}

const stack = new Stack();

// 1 -> push operation
stack.push(5);
stack.push(10);
stack.push(15);

console.log("Operations after PUSH");
stack.print();

// 2 -> pop operation
console.log("Operations after POP");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

stack.print();
