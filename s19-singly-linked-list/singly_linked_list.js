//  piece of data -> value
//  reference to next node -> next

class MyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // add value to the end of the list
    push(value) {
        let temp = new MyNode(value);

        if (this.length == 0) {
            this.head = this.tail = temp;
        } else {
            this.tail.next = temp;
            this.tail = temp;
        }
        this.length++;
        // allow chain for multiple push one after the other
        return this;
    }

    // remove value from the end of the list
    pop() {
        let value = undefined;

        if (!this.head || !this.tail) {
            return undefined;
        }

        if (this.head == this.tail) {
            value = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;

            return value;
        }

        let previous = this.head;
        let current = this.head.next;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        value = current.value;
        previous.next = null;
        this.tail = previous;
        this.length--;

        return value;
    }

    shift() {
        if (!this.head) return undefined;

        let value = this.head.value;
        this.head = this.head.next;
        this.length--;

        if (!this.head) this.tail = null;

        return value;
    }

    unshift(value) {
        let newNode = new MyNode(value);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    traverse(index) {
        if (index < 0 || index >= this.length) return null; // out of bounds error

        let node = this.head;
        for (let i = 0; i < index; i++) {
            // moove the auxiliary pointer to the desired index
            node = node.next;
        }

        return node;
    }

    get(index) {
        let node = this.traverse(index);

        return node ? node.value : null;
    }

    set(index, value) {
        let node = this.traverse(index);

        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index == 0) return this.unshift(value);
        if (index == this.length) return this.push(value);

        let targetNode = this.traverse(index - 1); // the node before the index where we want to make the insertion
        let tempNode = new MyNode(value);

        tempNode.next = targetNode.next;
        targetNode.next = tempNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index == this.length - 1) return this.pop(index);
        if (index == 0) return this.shift();

        let previuousNode = this.traverse(index - 1);
        let removedNode = previuousNode.next;
        let value = removedNode.value;

        previuousNode.next = removedNode.next;
        removedNode.next = null;
        this.length--;

        return value;
    }

    getLength() {
        return this.length;
    }

    reverse() {
        if (!this.head) return false;

        let leftPointer = this.head;

        let middlePointer = leftPointer ? leftPointer.next : null;
        let rigthPointer = middlePointer ? middlePointer.next : null;

        if (!middlePointer) return false; // we had less than 2 elements, so there is no point in doing the reverse operation

        this.tail = this.head;
        this.tail.next = null;
        while (rigthPointer) {
            middlePointer.next = leftPointer;
            leftPointer = middlePointer;
            middlePointer = rigthPointer;
            rigthPointer = rigthPointer.next;
        }
        middlePointer.next = leftPointer;
        this.head = middlePointer;
        this.tail.next = null;

        return true;
    }

    print() {
        let arr = [];
        let ptr = this.head;

        while (ptr) {
            arr.push(ptr.value);
            ptr = ptr.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();
list.push("First").push("Second").push("Third");

console.log(list);

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());

console.log(list);

list.push("First").push("Second").push("Third");
console.log(list);

console.log(list.shift());
console.log(list.shift());
console.log(list.shift());

list.push("temp");
console.log(list);

list.unshift("Unshifted");
list.unshift("new item");

console.log(list);

console.log(list.get(2));
console.log(list.get(1));
console.log(list.get(0));
console.log(list.get(10)); // out of bounds index, return undefined

console.log(list);

list.set(2, "changed with set");
list.insert(1, "Insert value");

console.log(list);

list.remove(1);
console.log(list);

// REVERSE TEST
list = new SinglyLinkedList();
list.push(1).push(2).push(3).push(4).push(5);
console.log(list);

list.print();

list.reverse();

list.print();
