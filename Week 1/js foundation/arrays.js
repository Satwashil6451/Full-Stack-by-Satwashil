/* Array handbook

Array:   push(), pop(), shift(), unshift(), splice(), slice(),
concat(), forEach(), map(), filter(), reduce(), find(), sort()

Run each function to see the output, play and learn by doing.  */

// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);
  }
  pushExample([1, 2, 3], 4);
  
  //push example
  const initialArray4 = [1,2,3];
  initialArray4.push(2);
  console.log(initialArray4);
  
  //pop
  const initialArray = [1,2,3];
  initialArray.pop(2);
  console.log(initialArray);
  
  //pop from front
  const initialArray12 = [1,2,3];
  initialArray12.shift(2);
  console.log(initialArray12);
  
  //push in front
  const initialArray2 = [1,2,3];
  initialArray2.unshift(2);
  console.log(initialArray2);
  
  // pop()
  function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr);
  }
  popExample([1, 2, 3]);
  
  //pop
  const initialArray0 = [1,2,3];
  initialArray0.pop(2);
  console.log(initialArray0);
  
  //pop from front
  const initialArray1 = [1,2,3];
  initialArray1.shift(2);
  console.log(initialArray1);
  
  // shift()
  function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr);
  }
  shiftExample([1, 2, 3]);
  
  // unshift()
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0);
  
  // concat()
  function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
  }
  concatExample([1, 2, 3], [4, 5, 6]);
  
  //example concat 
  const InitialArray = [1,2,3,4];
  const secondArray = [5,6,7,8];
  const finalArray = initialArray.concat(secondArray);
  console.log(finalArray)
  
  // forEach()
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]);
  
  // map()
  function mapExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.map(function(item) {
      return item * 2;
    });
    console.log("After map:", newArr);
  }
  mapExample([1, 2, 3, 4]);
  
  // filter()
  function filterExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.filter(function(item) {
      return item > 3;
    });
    console.log("After filter:", newArr);
  }
  filterExample([1, 2, 3, 4, 5]);
  
  // find()
  function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);
