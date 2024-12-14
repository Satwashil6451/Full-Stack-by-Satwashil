let a = 1;
/*if we replace let with const then it'll 
throw an error because we cannot change the value of const throught the code base*/
a = 2;
a = 3;  
console.log(a);
console.log(6);
console.log("Lucifer");

let FirstName = "Lucifer ";
let age = 19;
let isMarried = false;
console.log("My name is "+ FirstName + " My age is "+ age);
console.log("Married (True/False) -  "+ isMarried);

if(isMarried == true){
    console.log(FirstName + "is married");
}
if(isMarried == false){
    console.log(FirstName + "is unmarried");
}

let answer = 0;
for(let i = 0; i<=100; i=i+1){
    answer = answer +i;
}
console.log(answer);

//printing array 
const StudentArray = ["xyz" , "ABC" , "pqr"];
console.log(StudentArray);

//Arrays
const personArray = ["Lucifer" , "Jack" , "Lily"];
const genderArray = ["male" , "male" , "female"];
const numberofUsers = personArray.length;
for (let i = 0; i<numberofUsers; i++) {
if (genderArray [i] == "male") {
    console.log(personArray[i]);
   }    
}

//objects
const users1 = {
    firstName: "Lucy",
    gender : "male"
}
console.log(users1["gender"])

//2nd approach 
const user = [1,2,3]

const allUsers = [{
    firstName: "Virat",
    gender: "male"
}, {
    firstName: "Sachin",
    gender: "male"
}, {
    firstName: "Dazy",
    gender: "female"
}]

for (let i = 0 ; i<allUsers.length; i++){
    if (allUsers[i] ["gender"]== "male"){
        console.log(allUsers[i]["firstName"])
    }
}

//functions
function sum(a,b){
    const sumValue = a+b;
    return sumValue;
}

const value = sum(2,3)
const value2 = sum(9,1)
console.log(value);
console.log(value2);

//callback functions 

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
// How will you displayResult of a sum
const ans = sum(1,2, displayResult);