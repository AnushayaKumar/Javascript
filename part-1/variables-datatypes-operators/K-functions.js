/* 
1.Function statement or function declaration
2.Function expression
3.Difference between Function statement and Function expression.
4.Anonymous function.
5.Named function expression.
*/


// 1.Function statement or function declaration
function a() {
    console.log("Hello world");
}
a();


// 2.Function expression
var b = function () {
    console.log("hello world");
}
b();
console.log(b);


/* 3.Difference between function statement and function expression.
        1.function statement will return the answer even if they are called before declaration because of hoisting.
        2.Function expression will not return the answer insted it will retrun an error as it is considered to be a variable until the value is assigned to it.
        Eg.*/
// 1.Function statement
// Hello world
a();
function a() {
    console.log("Hello world");
}

// 2.Function expression
// Type error.
b();
var b = function () {
    console.log("hello world");
}


/* 
4.Anonymous functions:
    1.Function without a name is called a anonymous function.
    2.It can be only used in assigning value to a expression.
    3.If used independently it will return a syntax error.
*/

// This will return a syntax error(invalid)
// function () { }

// valid
var x = function () { }


/*
5.Named function expression:
    1.naming a function inside a variable expression.
    2.a() can be accessed as function
    3.x() cannot be accessed outside as a function but can be accessed inside the function of x()
*/
var a = function x() { console.log(x) };
// valid
a()
// invalid
x()


/*
6.First Class Function:
    1.Function assigned as a value to a variable
    2.passed as an argument to other function
    3.Return by another function.
 */

// 1.Function assigned as a value to a variable
var value = function () { }

// 2.passed as an argument to other function
function arg() { return 1 }

function newFunction(param1) { console.log(param1); }

newFunction(arg());

// 3.Return by another function.
function returnFunction() {
    return function () { return console.log("hello world") }()
}
returnFunction()
















