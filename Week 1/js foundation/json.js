/*
The jsonMethods function parses a JSON string into a JavaScript object using JSON.parse() and
then converts it back into a JSON string using JSON.stringify(), logging each step. 
*/

// It demonstrates JSON handling with an example string containing nested data.
function jsonMethods(jsonString) {
    console.log("Original JSON String:", jsonString);

// Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse():", parsedObject);
    
// Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", jsonStringified);
  }

// Example Usage for JSON Methods
  const sampleJSONString =
    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
jsonMethods(sampleJSONString);

