class Graph{

   constructor(){
   	this.adjacencyList = {}
   }

   addVertix(vertix){
      if(!this.adjacencyList[vertix]) this.adjacencyList[vertix] = [];
   }
   removeVertix(vertix){
         this.adjacencyList[vertix].forEach(v=>{
            this.removeEdge(vertix,v);
         });
         delete this.adjacencyList[vertix];
   }
   addEdge(v1, v2){
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
   }
   removeEdge(vertix1, vertix2){
      this.adjacencyList[vertix1] = this.adjacencyList[vertix1].filter(v=>v!==vertix2);

      this.adjacencyList[vertix2] = this.adjacencyList[vertix2].filter(v=>v!==vertix1);
   }

   
}

const g = new Graph();

g.addVertix('Delhi');
g.addVertix('Noida');
g.addVertix('Gurgaon');
g.addVertix('Patna');
g.addVertix('Extension');
g.addVertix('Gr Noida');

g.addEdge('Gr Noida', 'Noida');
g.addEdge('Delhi', 'Noida');
g.addEdge('Delhi', 'Patna');
g.addEdge('Patna', 'Noida');
g.addEdge('Gr Noida', 'Extension');
g.addEdge('Delhi', 'Gr Noida');
g.addEdge('Delhi', 'Gurgaon');



