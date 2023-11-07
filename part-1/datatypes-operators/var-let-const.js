// var

// you can create the same variable name twice
var width = 20;
var width = 30;

console.log(width)

// functional scoped
function run() {
    var speed = 20;
    console.log(speed);
}
// cannot be accessed outside function
// console.log(speed);


// not block scoped
// can be accessed outside block
if (true) {
    var weight = 20;
    console.log(weight);
}
// can be accessed
console.log(weight);


// let
// cannot be re declared
// can be reassigned
// block scoped

// can be reassigned
let height = 100;
height = 200;

//block scoped
if (true) {
    let radius = 90;
    console.log(radius);
}
// cannot be accessed outside block
// console.log(radius);

// object properties and values can be reassigned
let object = {
    age: 20,
    role: 'a'
}

object = {
    age: 50
}
console.log(object)


// const
// cannot be redeclared,reassigned
// block scoped as let

const role = 10;
// cannot be reassigned
// role = 20;

// object properties cannot be reassigned.
// values can be reassigned
const object1 = {
    age: 20,
    role: 10
}
// cannot be done
// object1 = {
//     age: 20
// }


// can be done
object1.age = 50;
console.log(object1.age);





let language = false;
let points = 50;
if (points > 40)
    language = true

console.log(language)




