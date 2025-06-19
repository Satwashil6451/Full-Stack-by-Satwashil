/*
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
It’s a way to handle asynchronous tasks more cleanly than using traditional callbacks. 
*/

const fs = require('fs');

// this one is my own asynchronous function
function satwashilsReadFile() {
    return new Promise(function(resolve, reject) {
        fs.readFile("satwashil.txt", "utf-8", function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);  
            }
        });
    });
}

// Callback function to call
function onDone(data) {
    console.log(data);
}
satwashilsReadFile()
    .then(onDone)
    .catch(err => console.error("Error reading file:", err));
