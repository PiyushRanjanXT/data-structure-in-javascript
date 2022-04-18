class Node{

    constructor(val){
        this.val=val;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        if(!this.length){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev= this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){

        if(!this.length) return undefined;

        const tail = this.tail;

        if(this.length===1){
            this.head = null;
            this.tail = null
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            tail.prev= null;
        }
        this.length--;
        return tail;

    }

    shift(){

        if(!this.length) return undefined;

        const popedHead = this.head;

        if(this.length===1){
            this.head = null;
            this.tail = null
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            popedHead.next= null;
        }
        this.length--;
        return popedHead;


    }

    unShift(val){
        const newNode = new Node(val);
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;


    }
    get(index){
        if(index<0 || index>=this.length) return undefined
        
        let node;
        if(this.length/2<index+1){
            node = this.tail;
            for(let i =this.length; i>index+1; i--){
                node = node.prev;
            }

        }else{
             node = this.head;
            for(let i =1; i<=index; i++){
                node = node.next;
            }

        }
        return node;
    }
    set(index, val){

        const node = this.get(index);
        if(!node){
            return false;
        }else{
            node.val= val;
            return true;
        }
    }
    print(){
        let arr =[], current= this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    printR(){
        let arr =[], current= this.tail;
        while(current){
            arr.push(current.val);
            current = current.prev;
        }
        console.log(arr);
    }
    insert(index,val){
        if(index<0 || index>=this.length) return undefined

        if(index===0){
            this.unShift(val);
        }else if(index === this.length-1){
            this.push(val);
        }else{
            const beforeNode= this.get(index-1);
            const afterNode = beforeNode.next;
            const newNode= new Node(val);

            beforeNode.next = newNode;
            newNode.prev = beforeNode;

            newNode.next = afterNode;
            afterNode.prev = newNode;


        }
        this.length++;
        return true;
    }

    remove(index){

        if(index<0 || index>=this.length) return undefined;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();
     
        const node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.length--;
       
        return node;
        
    }

    reverse(){
        if(this.length === 0) return undefined;
        
        if(this.length !== 1){
            let node = this.head;
            while(node.next){
                let prev = node.prev;
                node.prev = node.next;
                node.next = prev;
                node = node.prev;
            }

            const tail = this.tail;
            this.tail = this.head;
            this.head = tail;
            this.head.next = this.head.prev;
            this.head.prev = null;
        }
        return this;
        
    }

}

const list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);