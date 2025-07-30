/*
Synchronous Function
In JavaScript, synchronous functions are those that execute in a blocking manner, meaning each operation is completed before the next one starts. 
This is in contrast to asynchronous functions, which allow other code to run while waiting for an operation to finish. 
*/

function findsum(n){
    let ans = 0;
    for (let i = 1; i < n; i++){
        ans = ans +i
    }
    return ans;
}

let ans = findsum(1000)
console.log(ans)
