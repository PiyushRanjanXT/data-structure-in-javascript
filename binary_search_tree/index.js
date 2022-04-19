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



}

const bst = new BinarySearchTree();

