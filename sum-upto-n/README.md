# Sum of 1 to till given number

### Problem:

Write a function which can give us sum from 1 to till given number

Ex:

if N = 1, Output should be 1+2+3+4+5 = 15

index.js js having two solution one is regular and another one is most optimized.

~~~~index.js js having two solution one is regular and another one is most optimized.


```/**
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
```
~~~~
