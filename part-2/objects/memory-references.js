// objects
const obj1 = { a: 10, b: 20 };
const obj2 = obj1;  // obj2 points to the same memory reference as obj1

obj2.a = 30;  // Modifying obj2 also affects obj1
console.log(obj1);  // Output: { a: 30, b: 20 }

// arrays
const arr1 = [1, 2, 3];
const arr2 = arr1;  // arr2 points to the same memory reference as arr1

arr2.push(4);  // Modifying arr2 also affects arr1
console.log(arr1);  // Output: [1, 2, 3, 4]


// functions
function sayHello() {
    console.log('Hello!');
}

const greet = sayHello;  // greet points to the same memory reference as sayHello
greet();  // Output: Hello!


