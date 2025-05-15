//callback function 

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}
function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sumfunction sum(num1, num2, callback) 

{
    let result = num1 + num2;
    callback(result);

function displayResult(data) {
    console.log(`Result of the sum is: ${data}`);
}

function displayResultPassive(data) {
    console.log(`Sum's result is: ${data}`);
}

const ans = sum(1, 2, displayResult);

function calculateArithmetic(a, b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a, b);
    return ans;
}

function sum(a, b) {
    return a + b;
}

const value = calculateArithmetic(1, 2, sum);
console.log(value);
const ans = sum(1,2, displayResult);

function calculateArithmetic (a , b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a,b)
    return ans;
}

function sum(a,b){
    return a +b;
}
    
const value = calculateArithmetic(1,2,sum);
console.log(value);
