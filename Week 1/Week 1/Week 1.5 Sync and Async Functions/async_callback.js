/*
Asynchronous callback: Executed later, after an asynchronous task finishes. 
*/

console.log("Hi there");

setTimeout(() => {
    console.log("How are you");
}, 20000);

setTimeout(() => {
    console.log("How are you");
}, 10000);

let a = 0;
for (let i = 0; i < 10; i++) {
    a = a + 1;
}
console.log(a);



