/**
 * Bad
 * Function to calculate sum till give number without optimization
 * @param {integer} n - Number to calculate sum
 */

function sumOfNum(n){
    let result = 0;
    for(let i =1; i<=n; i++){
        result += i;
    }
    return result;
}



/**
 * Good
 * Function to calculate sum till give number with optimization
 * @param {integer} n - Number to calculate sum
 */

function sumOfNum(n){
    return n*(n+1)/2
}