/* callback function -  A callback function in JavaScript is a function that is passed as an argument to another function 
and is executed later, usually after some operation has been completed. */

// function to find the square of number
function square(n){
    return n *n;
}

//function to do sum of squares
function SumOfSquares(a,b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2     
}
console.log(SumOfSquares(3,6))

// now input will be square or whatever so we are going to take 3 inputs 
function square(n){
    return n * n;
}

function sumofsomething(a, b , fn){
    const val1 = fn(a)
    const val2 = fn(b)
}

sumofsomething(1,8,square)
console.log(sumofsomething)
