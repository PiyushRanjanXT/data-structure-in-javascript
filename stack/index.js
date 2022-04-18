class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{

    constructor(){
        this.head = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this.length;
    }
    pop(){
        if(!this.length) return null;

        const node = this.head;
        this.head = node.next;
        node.next = null;
        this.length--;
        return node.val;
    }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.pop();