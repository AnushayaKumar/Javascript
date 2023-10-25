// // global declaration
// let value = 100;
// const number = 100;


// function scope() {
//     // if you have the same variable declared inside and outside the scope
//     // the value inside the scope will take precedance inside the scope
//     // you can also declare the same value inside and outside the sscope as the declaration are scoped
//     // eg
//     let value = 50;

//     // values declared globally are accessed inside block
//     console.log(value);
//     console.log(number);

//     // value declared locally are not accessed outside
//     // let and const are block scoped
//     // Eg.
//     const number2 = 60;
//     let number3 = 70;
//     console.log(number2);
//     console.log(number3);
// }

// // these two values cannot be accessed outside the block.
// console.log(number2);
// console.log(number3);


// let,const are block scoped
// var is function scoped.
// var is globally accessable and outside block also, but not outside function
// var global variable is attached to window object
// when adding a third party stuff which has the same variable name as in yours
// it will overwrite yours

var a = 10;
function walk() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
walk()
if (true) {
    var c = 30;
}
console.log(a);
// console.log(b);
console.log(c);
