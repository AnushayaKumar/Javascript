/* Temporal Dead Zone:
    1.In case of let and const they're hoisted in a private scope known as script.
    2.They are not hoisted in the global scope.
    3.As they're hoisted in private scope they cannot be accessed until they're assigned a value.
    4.The zone from the hoisted point and assigning the value to the variable is called TDZ.
    5.Trying to access variables inside temporal dead zone returns reference error.
*/

// reference error ..cannot access before intialization.
console.log(a);
let a;

/*
1.var:
    1.Memory is allocated and the variable is added to the global object(in the global scope)
    during the hoisting phase.
    2.Accessing a var variable before its declaration results in undefined.
    3.var can be reassigned.
    4.var can be redeclared.
*/

console.log(myVar); // Outputs: undefined
var myVar = 42;


/*
2. let and const:
    1.Memory is allocated for `let` and`const` variables,
    but they are not initialized and remain in the "temporal dead zone"(TDZ) until the point of declaration.
    2.Accessing a `let` or `const` variable before its declaration(while in the TDZ) results in
    a ReferenceError.

        1.let: 
            1.let can be initialised and assigned later.
            2.can be reassigned.
            3.cannot be redeclared - returns syntax error.
                Eg: let a;
                    a=100;

        2.const:
            1.const should be initilised and assigned in the same time to be accessed.-returns syntax error.
            2.Cannot be reassigned.
                Eg:const s=100;
*/


console.log(myLet); // Error: Cannot access 'myLet' before initialization -reference error
let myLet = 42;



console.log(myConst); // Error: Cannot access 'myConst' before initialization -reference error
const myConst = 42;

/*
In both cases(`let` and`const`), the variables are indeed allocated memory, but
they are not accessible until they are properly declared and initialized.This helps
catch potential issues where variables are accessed before they are ready to be used,
providing more predictable and safer behavior in your JavaScript code.
*/