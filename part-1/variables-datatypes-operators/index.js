console.log("hello world");
// let variables can be reassigned
let name = 'Anushaya';
name = 'Achu';
console.log(name);
// const cannot be reassigned
const nameConst = 'Anushaya';
// nameConst = 'Achu'; cannot be reassigned
console.log(nameConst);

// primitive data types
// string,bool,null,undefined,number
let candidateName = 'Anu';
let candidateRoll = 3; //data type of NaN is number
let candidateFemale = true;
let candidateNumber = undefined; //or let candidateNumber; undefined
let candidateDesignation = null;

// you can also change the data type of a variable
candidateName = 15;
console.log(typeof (candidateName));

// typeof
console.log(typeof (candidateDesignation)) // typeof null is object.


// reference types
// objects,arrays,functions

// objects
let person = { name: 'Anu', roll: 3 };
console.log(person);
// reassign and access using dot notation or bracket notation
person.name = 'Achu';
person['name'] = 'Abi';
console.log(person.name);

// arrays
let colors = ['red', 'blue', 'green', 1];
// arrays are objects
console.log(typeof (colors));// type of array is object
// arrays can have different data types in it.
console.log(typeof (colors[0]));//string
console.log(typeof (colors[3]));//number

// array properties
// array.length
console.log(colors.length);


// functions
function calculate(number) {
    return number * number;
}
console.log(calculate(4));

/*without argument in the funciton will return undefined
as the value of the variable. variable is by default undefined.*/
// number=undefined
// number*number=NAN
// undefined*undefined =NAN
console.log(calculate());


// operators
// assignment,arithmetic,comparision,logical,bitwise

// arithmetic operator
let x = 10;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
// post increent
console.log(x++);
console.log(x);
// pre increment
console.log(++x);
console.log(x);

// assignment operator
x = 10;
console.log(x += 10); //x=x+10
console.log(x -= 10);
console.log(x *= 10);
console.log(x /= 10);
console.log(x %= 1);

// right shift 
let num = 16;  // Binary: 00010000
let result = num >> 2;  // Right shift by 2 positions
console.log(result);  // 4 (Binary: 00000100)

// left shift
let num1 = 8;  // Binary: 00001000
let result1 = num1 << 3;  // Left shift by 3 positions
console.log(result1);  // 64 (Binary: 01000000)

// comparision operator
let digit = 10;
// returns boolean
console.log(digit > 1);
console.log(digit < 1);
console.log(digit >= 1);
console.log(digit <= 1);

// checks data type
// 5 cannot be equal to "5" as they're different data types -strict
console.log(digit === 1);
// check if they're equal - loose
// 5="5"
console.log(digit == 1);
console.log(digit !== 1);
console.log(digit != 1);


// ternary operator
// ?:
let points = 150;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// logical operators
// && || !
let run = false;
let walk = true;
// &&
let hard = run && walk;
console.log(hard);
// ||
let simple = run || walk;
console.log(simple);
// !
let didNothing = !simple;
console.log(didNothing);

// false values
/* false,0,nan,undefined,null,""*/
/* all others are true */

// here it checks for the true value..if it is found it will end
console.log(false || 1 || 2);
console.log('' || 2);
// console.log('' || ' ');


// template literals
// ``
// allows you add multiple lines without \n and allows you add place holders '' , ""
let value = 10;
let template = `hello world
This is John,here is the value ${value},Hope you "enjoy"!`;
console.log(template);

// type coercion
// the strings are implicitly coerced to numbers if possible
// 11
console.log("1" + 1);
// 0
console.log("1" - 1);
// 5
console.log("1" * 5);
// 0
console.log("1" - "1");






















