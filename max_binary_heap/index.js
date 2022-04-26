class MaxBinaryHeap{

    constructor(){
        this.values = []
    }

    insert(value){
        this.values.push(value)
        this.bubbleUp();
        return this;
    }

    bubbleUp(){
        let index = this.values.length-1;
        let parentIndex = Math.floor((index-1)/2);

        while(this.values[index]> this.values[parentIndex]){

            let temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            index= parentIndex;
            parentIndex = Math.floor((index-1)/2);

        }


    }

}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);