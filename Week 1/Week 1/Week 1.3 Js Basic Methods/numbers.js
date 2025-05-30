function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
// Example Usage for parseInt
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");
  
  console.log(parseInt("45"));
  console.log(parseInt("35464jkheg"));
  console.log(parseInt("4.9"));
// it will parse from a string to an integer
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
// Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");
  
  console.log(parseFloat("45"));
  console.log(parseFloat("35464jkheg"));
  console.log(parseFloat("4.9"));
// keeps floating values as it is
