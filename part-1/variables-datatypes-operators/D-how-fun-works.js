var x = 100

// 10
product1()

// 1
product2()

// 100
// the execution context of product1 and product2 are deleted after executing.
//  The global context value is executed then
console.log(x);

function product1() {
    var x = 10;
    console.log(x);
}

function product2() {
    var x = 1;
    console.log(x);
}