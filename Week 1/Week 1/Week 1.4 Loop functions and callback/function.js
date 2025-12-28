// Functions in javascript
// This is how we declare a function in js

function findsum(n){
    let ans = 0;
    for (let i = 1; i < n; i++){
        ans = ans +i
    }
    return ans;
}

// This is how we call a function in js

let ans = findsum(100)
console.log(ans);
