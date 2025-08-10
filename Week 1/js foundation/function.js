// Functions in javascript

/* 
1. Functions in JavaScript are reusable blocks of code that perform a specific task.
2. They can be declared using the function keyword or as arrow functions (=>).
3. Parameters allow functions to accept inputs, and they can return values using return.
4. Functions can be assigned to variables, passed as arguments, or returned from other functions 
*/

// This is how we can declare a function
function findsum(n){
    let ans = 0;
    for (let i = 1; i < n; i++){
        ans = ans +i
    }
    return ans;
}

// This is how we can call a function

let ans = findsum(100)
console.log(ans)
