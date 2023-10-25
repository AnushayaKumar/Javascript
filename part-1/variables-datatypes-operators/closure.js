// the function inside the lexical scope is called a closure.
// here y is a function inside lexical scope  x.
// here x is a closure with value a=10

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}

// when x() is assigned to y ..the funciton of y is returned here.
// x is not available
// in future if you call z() then the function y() will remember 
// from where it came that is x and gets the value from it and returns the value. 
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


// used in modules
// set time out
// iterators