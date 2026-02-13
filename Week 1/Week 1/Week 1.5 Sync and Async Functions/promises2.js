// What are promises -- it is just a class that makes callback and asyncronous function slightly more readable

let p = new Promise(function(resolve) {
  
resolve("hi there");
});

p.then(function() {
console.log(p);
})