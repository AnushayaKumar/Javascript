// Another way of creating or constructing objects.
// use pascal case for constructors.First letter of everyword in caps
function Circle(radius) {
    // This keyword refers to the empty object that is going to contain this property or method
    this.radius = radius;
    this.draw = function () {
        console.log("Draw");
    }
}

// create an object.
let object = new Circle(10);
// new keyword does three things.
// 1. creates an empty object {}
// 2. will make the this keyword get appended into the empty object.
// 3. Returns the function in form of an object.{}
// if new keyword is not given.It will refer to the window.

console.log(object);


// Every object has a constructor property that was used to create a object.
// for example.
function UsingConstructor(radius) {
    this.radius = radius
}

// this object(objectOne) was created using constructor property 
const objectOne = new UsingConstructor(1);
// constructor 
console.log(objectOne.constructor)

// if we cretae an object using object literal that will be
// using an inbuilt object constructor to build a object

// for eg
function usingObject(radius) {
    return {
        radius,
        variation: 2
    }
}

const objectTwo = usingObject(4);
// In this place a inbuilt object constructor was used to create this.
// there are build in constructors for string, boolens, numbers.

console.log(objectTwo.constructor);

// Using the Object constructor
const obj = new Object();
console.log('Object:', obj);

// Using the Array constructor
const arr = new Array();
console.log('Array:', arr, typeof arr);

// Using the String constructor
const str = new String('Hello');
console.log('String:', str, typeof str);

// Using the Number constructor
const num = new Number(42);
console.log('Number:', num);

// Using the Boolean constructor
const bool = new Boolean(true);
console.log('Boolean:', bool);

// Using the Function constructor
const func = new Function('console.log("Hello, world!");');
console.log('Function:', func, func.constructor);

// Using the Date constructor
const date = new Date();
console.log('Date:', date);

// functions are also objects as they can contain properties and methods
// constructors are functions used to create objects.
// This function uses a Function() constructor to create a object.
function Circle() { }


// when you create a object with object literals ..js will translate it into new Object() constructor.
const example = { value: 1 };
console.log(example);
console.log(example.constructor);


// functions are objects explained.
let subject = {
    teacher: "Aashiya",
    maxMarks: 100,
    calculate() {
        console.log("calculate");
    }
}
// accessing keys
for (let key in subject) {
    console.log(key)
}

// accessing keys using (for of) & object constructor function
for (let key of Object.keys(subject)) {
    console.log(key)
}
// gives each entry
for (let entries of Object.entries(subject)) {
    console.log(entries)
}

// (in) operator to check if the key is in object
// eg
// keys in quotes
if ('teacher' in subject) {
    console.log("yes");
}