/**
 * JavaScript: Binary search in an Array
 * @param {Array} arr 
 * @param {number} num 
 */

function binarySearch(arr, num){
    console.log(arr,num);
    
    let left =0, right = arr.length-1; let mid = Math.floor((left+right)/2);
    while(left<=right && arr[mid]!==num){
        if(arr[mid] < num){
            left = mid+1;
        }else{
            right = mid-1;
        }
        mid = Math.floor((left+right)/2);
    }
    return arr[mid]!==num? -1 : mid;
    
  }