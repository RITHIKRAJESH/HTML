// function orderPizza(callback) {
//     console.log("Ordering pizza...");
  
//     setTimeout(function() {
//       console.log("Pizza is ready!");
//     }, 3000);
    
//     callback();
//   }
  
  
//   function doOtherThings() {
//     console.log("While waiting for pizza, I can watch TV.");
//   }
  

//   orderPizza(doOtherThings);
  

function capitalizeWords(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

// Test
console.log(capitalizeWords("hello world"));  // Output: Hello World
console.log(capitalizeWords("javascript is fun"));  // Output: Javascript Is Fun



function flattenArray(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
     console.log(arr[i])
      flatArray.push(arr[i][j]);
    }
  }
  return flatArray;
}

// Test
// console.log(flattenArray([[1, 2], [3, 4], [5, 6]])); // Output: [1, 2, 3, 4, 5, 6]

 
function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = '';
    for (let j = 1; j <= rows - i; j++) {
      spaces += ' ';
    }
    let stars = '';
    for (let k = 1; k <= 2 * i - 1; k++) {
      stars += '*';
    }
    console.log(spaces + stars);
  }
}

printPyramid(5);
