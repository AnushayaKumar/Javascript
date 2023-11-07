// count the no. of truthy values
// undefined is something when values are declared but not assigned eg.let x;
const array = [1, 2, 3, 4, 5, undefined, NaN, 0, 7, 2, null, '', false];
function countTruthy(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i])
            count++;
    }
    return count;
}
console.log(countTruthy(array));


// undefined
let x;
console.log(x);  // Output: undefined


function doSomething() {
    // no return statement, implicitly returns undefined
}

const result = doSomething();
console.log(result);  // Output: undefined


const obj = { a: 42 };
console.log(obj.b);  // Output: undefined (property 'b' does not exist on obj)

// NaN
const result1 = 'hello' * 5;
console.log(result1);  // Output: NaN


const result2 = 10 / 0;
console.log(result2);  // Output: NaN

const result4 = Math.sqrt(-1);
console.log(result4);  // Output: NaN


let variable1; // variable1 is undefined
const variable2 = NaN; // variable2 is NaN

console.log(variable1);  // Output: undefined
console.log(variable2);  // Output: NaN

// Check if a value is NaN
console.log(isNaN(variable1));  // Output: true (variable1 is undefined, not a valid number)
console.log(isNaN(variable2));  // Output: true (variable2 is NaN)
