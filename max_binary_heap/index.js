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

    extractMax(){
        if(!this.values.length) return undefined;

        let extractedValue = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values.pop();
        this.syncDown();
        return extractedValue;
    };

    syncDown(){
        let parentIndex = 0, left = (2*parentIndex)+1, right =(2*parentIndex)+2;

        while(this.values[parentIndex]< Math.max(this.values[left], this.values[right])){
            let tmp = this.values[parentIndex];

            if(this.values[left]>this.values[right]){
                this.values[parentIndex] = this.values[left]
                this.values[left] = tmp;
                parentIndex = left;
            }else{
                this.values[parentIndex] = this.values[right]
                this.values[right] = tmp;
                parentIndex = right;
            }

            left = (2*parentIndex)+1;
            right =(2*parentIndex)+2;
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