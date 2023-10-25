// primitives are number,string, bool,null,undefined,etc.
// references are function,array, object.
// As array and function are also objects. references are objects.
// primitives are copied by values
// references types are copied by references(address).


// Primitive types stores the value directly into the variable.
// eg:
let x = 10;
let y = x;

x = 20;
// primitves stores values directly in variable, here x=20
console.log(x);
// y=10 as it is stored directly in variable
console.log(y);



// in case of references .They are stored as addresses.
let a = { value: 1 }
let b = a;

// the the address of a is stored in variable a not the actual value.
// so if you change the value of a then b will also be reflected.

a.value = 10;
// value:10
console.log(a);
// value:10 (replica)
console.log(b);

// using primitives
let z = 10;
function increase(z) {
    return ++z;
}
// returns 11
console.log(increase(z))
// returns 10 as it is independent 
console.log(z)


// this is reference type where address is stored in variable.
// it is all dependent
// changes in value inside the function will change everywhere as address is stored in var
let refObj = { value: 1 };
let refObjTwo = refObj;
function inc(refObj) {
    return refObj.value = 100;
}


console.log(inc(refObj))
console.log(refObj)
console.log(refObjTwo);

