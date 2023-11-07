/*
Hoisting:
    1.Hoisting is the process of moving the variables and functions to the top of the containing scope.
    2.This is done with execution context.
*/

// undefined
console.log(value);
// Logs = "Normal Function"
normalFunction();
// prints the entire fucntion definition
console.log(normalFunction);
// undefined  (as it is a variable)
console.log(arrowFunction);
// undefined  (as it is a variable)
console.log(anonyomousFunction);


var value = "Anushaya"

function normalFunction() {
    var age = 10;
    console.log("Normal function");
}

var arrowFunction = () => {
    console.log("Arrow function");
}

var anonyomousFunction = function () {
    console.log("Anonyomous function");
}


