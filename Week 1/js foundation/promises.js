/*n JavaScript, Promises are used to handle asynchronous operations.
A Promise represents a value that might be available now, in the future, or never.*/

const fs = require('fs');

// my own asynchronous function
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

// callback function to call
function onDone(data) {
    console.log(data);
}

satwashilsReadFile()
    .then(onDone)
    .catch(err => console.error("Error reading file:", err));

// for running this file you should have satwashil.txt file in you main folder
