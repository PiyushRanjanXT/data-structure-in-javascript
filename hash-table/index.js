class HashTable{

   constructor(size=53){
   	this.keyMap = new Array(size)
   }

   _hash(key) {
   	let total = 0;
   	let WEIRD_PRIME = 31;
   	for(let i = 0; i < Math.min(key.length, 100); i++){
   		let char = key[i];
   		let value = char.charCodeAt(0)-96;
   		total = (total * WEIRD_PRIME + value) % this.keyMap.length;
   	}

   	return total;
   }

   set(key,value){

   		let index = this._hash(key);

   		if(Array.isArray(this.keyMap[index])){
   			this.keyMap[index].push([key,value])
   		}else{
   			this.keyMap[index] = [[key,value]]
   		}

   }

   get(key){
   		let index = this._hash(key);

   		if(!this.keyMap[index]) return undefined;

   		let value = this.keyMap[index].find((data)=>data[0]===key)

   		return value? value[1] : undefined;
   }

   values(){

   		return this.keyMap.flatMap(data=>data.map(item=>item[1]));
   }

   keys(){

		return this.keyMap.flatMap(data=>data.map(item=>item[0]));
   }

}

const ht = new HashTable(17);

ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")


