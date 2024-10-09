function printSum() {
    let a=5;
    let b=6;
    console.log(a+b)
}
printSum()


function sum(a,b){
    let sum=a + b
    return sum
}
console.log(sum(5,8))


// function declaration

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173