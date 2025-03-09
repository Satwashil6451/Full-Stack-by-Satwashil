// String handbook All functions are in one place

// String handbook: Demonstration of various string functions
const str = "  Hello, JavaScript World!  ";
console.log("Original String:", str);

// length
console.log("Length:", str.length);

// indexOf()
console.log("Index of 'JavaScript':", str.indexOf("JavaScript"));

// lastIndexOf()
console.log("Last Index of 'o':", str.lastIndexOf("o"));

// slice()
console.log("Slice (7, 18):", str.slice(7, 18));

// substring()
console.log("Substring (7, 18):", str.substring(7, 18));

// replace()
console.log("Replace 'World' with 'Universe':", str.replace("World", "Universe"));

// split()
console.log("Split by space:", str.split(" "));

// trim()
console.log("Trimmed String:", str.trim());

// toUpperCase()
console.log("Uppercase:", str.toUpperCase());

// toLowerCase()
console.log("Lowercase:", str.toLowerCase());

// Length 
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Satwashil Khot");

//indexOf() 
function FindindexOf(str, index){
    console.log("Origional String", str)
    console.log("Index of 'a':", str.indexOf('a'))
  }
FindindexOf("Sdhjdjdnddyaahsnshsyaashshsyna")

//lastindexOf()
function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
  findLastIndexOf("Hello World World", "World");
