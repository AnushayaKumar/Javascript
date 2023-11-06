/* Closure:
    1.Closure is a function along with its lexical scope.
    2.In the example:
     x() is a function and it has its lexical scope of
        1.Local scope:
            a=10
        2.parent of the lexical scope that is global. 

1.Here the closure of x has the function of x() and its lexical scope a=10;
2.And will be remembered even after the function execution is over
*/


// when x() is assigned to y ..the function of y is returned here.
// 1.x is not available
// 2.In future if you call z() then the function y() will remember from where it 
//   came that is x and gets the value from it and returns the value.

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}
let z = x();
z();


// you can also have closure of multiple levels

// closure is created for
// a() => b=100
// c() => r=40

// these values are not garbage collected.

function a() {
    let b = 100;
    function c() {
        let r = 40;
        function g() {
            console.log(b, r);//returns 100,40
        }
        g();
    }
    c();
}
a();


/*
Closures are used in:
    1.Module design pattern
    2.Currying.
    3.Functions like once
    4.Memoize
    5.Maintaining state in async world
    6.setTimeouts
    7.Iterators
    etc.
*/

