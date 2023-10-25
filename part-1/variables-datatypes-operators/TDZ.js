// 1.var:
//     - Memory is allocated and the variable is added to the global object(in the global scope)
//  during the hoisting phase.
//    - Accessing a var variable before its declaration results in undefined.

console.log(myVar); // Outputs: undefined
var myVar = 42;


// 2. let and const:
//     - Memory is allocated for `let` and`const` variables,
//  but they are not initialized and remain in the "temporal dead zone"(TDZ) until the point of declaration.
//    - Accessing a `let` or `const` variable before its declaration(while in the TDZ) results in
// a ReferenceError.


console.log(myLet); // Error: Cannot access 'myLet' before initialization
let myLet = 42;



console.log(myConst); // Error: Cannot access 'myConst' before initialization
const myConst = 42;


// In both cases(`let` and`const`), the variables are indeed allocated memory, but
// they are not accessible until they are properly declared and initialized.This helps
// catch potential issues where variables are accessed before they are ready to be used,
// providing more predictable and safer behavior in your JavaScript code.