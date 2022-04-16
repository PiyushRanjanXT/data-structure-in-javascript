class Node{
    constructor(val){
        this.val= val;
        this.next =null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }
    pop(){
        if(this.length===1){
            let val = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return val;
        }else if(this.length===0){
            return undefined;
        }else{
            let pre = this.head, last = this.head.next;
            while(last.next){
                pre = last;
                last = last.next;
            }

            let val = last;
            pre.next = null;
            this.tail = pre;
            this.length--;
            return val;

        }
        
    }
    shift(){
        if(!this.head){
            return undefined;
        }else{
            let head = this.head;
            this.head = this.head.next;
            this.length--;
            if(this.length===0){
                this.tail = null;
            }
            return head;
        }
    }
    unShift(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        if(this.length===1){
            this.tail = this.head;
        }
        return this;
    }
    get(index){
        if(this.length-1<index || index<0){
            return null;
        }else{
            let counter =0, current = this.head;

            while(counter!=index){
                current= current.next;
                counter++;
            }
            return current;

        }
    }
    set(index,val){
        let askedNode = this.get(index);
        if(askedNode === null){
            return false;
        }else{
            askedNode.val = val
            return true
        }
    }

    insert(index, value){
        if(index<0 || index>this.length){
            return false;
        }else if(index===0){
            this.unShift(value);
        }else if(index===this.length){
            this.push(value)
        }else{
            let indexNode = this.get(index-1), newNode = new Node(value);
            newNode.next = indexNode.next;
            indexNode.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(index){

        if(index<0 || index>this.length-1){
            return false;
        }else if(index===0){
            return this.shift();
        }else if(index===this.length-1){
            return this.pop()
        }else{
            let indexNode = this.get(index-1);
            let temp = indexNode.next;
            indexNode.next = indexNode.next.next;
            this.length--;
            return temp
        }
       
    }

    print(){
        let arr =[], current = this.head;
        while(current.next){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr)
    }

    reverse(){
        let node = this.head, next, prev = null;
        this.head = this.tail;
        this.tail = node;

        for(let i =0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;


    }
}


const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);