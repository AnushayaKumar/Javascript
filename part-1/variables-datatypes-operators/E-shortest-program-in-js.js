/*
1.A empty program is the shortest program in js.
2.Running an empty program will create,
    1.Global execution context 
    2.Global scope.
    3.Call stack.
    4.It will also create a window object
    5.It will also create a this variable
    6.Every variable and function inside the code that is in the global scope get's into the window object.
*/

// EG:

// variable a is in global scope
var a = 10;

// fucntion b is in global scope
function b() {
    // here b variable is in local scope
    var c = 10;
    console.log("log the comment");
}

// this will print a window object
console.log(window);

// this will print value of a
console.log(window.a);

// this will print the window object
console.log(this);

// this will print the variable a
console.log(this.a);