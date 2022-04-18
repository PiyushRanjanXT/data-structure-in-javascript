class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        const node = new Node(value);

        if(!this.size){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;

    }
    dequeue(){
        
        if(!this.size) return null;

        const node = this.first;

        if(this.size===1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next
            node.next = null;
        }
        
        this.size--;
        return node.value;
       
    }

}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
