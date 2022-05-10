class Graph{

   constructor(){
   	this.adjacencyList = {}
   }

   addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
   }
   removeVertex(vertex){
         this.adjacencyList[vertex].forEach(v=>{
            this.removeEdge(vertex,v);
         });
         delete this.adjacencyList[vertex];
   }
   addEdge(v1, v2){
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
   }
   removeEdge(vertex1, vertex2){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=>v!==vertex2);

      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=>v!==vertex1);
   }

   depthFirstRecursive(start){
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
      function dfs(vertex){
         if(!vertex) return null;

         visited[vertex] = true;
         result.push(vertex);
         adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]) return dfs(neighbor);
         })



      }

      dfs(start);
      return result;
   }
   depthFirstLoop(start){
      const stack = [];
      const result = [];
      const visited = {};

      stack.push(start);

      while(stack.length){
         const vertex = stack.pop();

         if(!visited[vertex]){
            visited[vertex] = true;
            result.push(vertex);
            stack.push(...this.adjacencyList[vertex]);
         }
      }

      return result;

   }
   breathFirst(start){
      const q = [];
      const result = [];
      const visited = {};
      let vertex;

      q.push(start)

        while(q.length){
          vertex = q.shift();

         if(!visited[vertex]){
            visited[vertex] = true;
            result.push(vertex);
            q.push(...this.adjacencyList[vertex]);
         }
      }

      return result;

   }

   
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');


g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

/**
 * 
 *                         A
 *                      /     \
 *                     B       C
 *                      \      /
 *                      D------E
 *                      \     /
 *                         F
 *          
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */



