/*
Asynchronous Function
In JavaScript, an asynchronous function is a function that allows other code to run while it is waiting for a task to complete.
This is in contrast to synchronous functions, which block the execution of other code until they have finished.
*/

function findsum(n) {
    let ans = 0;
    for (let i = 1; i < n; i++) {
        ans = ans + i;
    }
    return ans;
}

function findsumtill100() {
    const result = findsum(100); // Call findsum with 100
    console.log(result); // Log the result
}
setTimeout(findsumtill100, 3000);  // prints sum sfter 3 seconds
console.log("Satwashil");
