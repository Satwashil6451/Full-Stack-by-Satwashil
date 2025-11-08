// set timeout is a function used to print result delayed as per given miliseconds or seconds as per our preference
function greet (){
    console.log ("Good Morning!");
}

function greetworld(){
    console.log ("Hello World");
}

setTimeout(greet,  3 *1000)

// set interval is a function that will print the o/p after the given time in a loop
setInterval(greetworld, 1 * 1000)


