class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree{

    constructor(){
        this.root = null;
    }

    insert(value, current){
        

        if(!this.root){
            this.root = new Node(value);
        }else{
            if(!current){
                current = this.root;
            }
            if(current.value<value){
                if(!current.right){
                    current.right = new Node(value);
                }else{
                    this.insert(value, current.right)
                }
            }else if(current.value>value){
                if(!current.left){
                    current.left = new Node(value);
                }else{
                    this.insert(value, current.left)
                }
            }else{
                return undefined; 
            }

        }

        return this;
    }

    find(value){
        if(!this.root) return false;

        let found = false, node = this.root;

        while(!found && node){
            if(value === node.value){
                found = true;
            }else if(value>node.value){
                node = node.right;
            }else{
                node = node.left;
            }
        }

        return found;

    }

    BFS(){
        let Q = [], data=[], node = this.root;

        Q.push(node);
        while(Q.length){
            node = Q.shift();
            data.push(node.value);
            if(node.left) Q.push(node.left);
            if(node.right) Q.push(node.right);
        }

        return data;
    }

    dfsPreOrder(){

        let data =[], current = this.root;

        function triverse(node){
            if(node){
                data.push(node.value);
                if(node.left) triverse(node.left);
                if(node.right) triverse(node.right);
            }
        }
        triverse(current);
        return data;

    }

    dfsPostOrder(){

        let data =[];

        function triverse(node){
            if(node.left) triverse(node.left);
            if(node.right) triverse(node.right);
            data.push(node.value);
        }

        triverse(this.root);

        return data;

    }

    dfsInOrder(){

        let data =[];

        function triverse(node){
            if(node.left) triverse(node.left);
            data.push(node.value);
            if(node.right) triverse(node.right);
        }

        triverse(this.root);

        return data;

    }



}

const bst = new BinarySearchTree();


//  10 6 15 3 8 20

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

