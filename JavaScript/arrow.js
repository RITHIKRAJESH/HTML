// const arr1=function(){
    
//     let arr2=()=>{
//         console.log(arguments)
//     }

// return arr2() 

// }
// console.log(arr1('apple','orange','banana'))

const obj = {
    name: "Lexical Binding",
    regularFunction: function() {
        console.log(this.name); // 'this' refers to the obj context
    },
    arrowFunction: () => {
        console.log(this.name); // 'this' refers to the outer context (likely the global object)
    }
};

obj.regularFunction();  // Outputs: Lexical Binding
obj.arrowFunction();    // Outputs: undefined or the name of the global object
