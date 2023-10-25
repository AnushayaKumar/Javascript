// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Math
console.log(Math.round(Math.random() * 5))
console.log(Math.max(70, 80, 23, 3, 24))
console.log(Math.min(70, 80, 23, 3, 24))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// primitive datatypes are automatically boxed into temporary objects
// String
// create string using String() object constructor.
let message = new String('Hello world');

// this also works on primitive strings.
// message = "Hello world"

console.log(message.length)
console.log(message[0])
console.log(message[1])
console.log(message.includes('world'))
console.log(message.startsWith('H'))
console.log(message.endsWith('d'))
console.log(message.toUpperCase())
console.log(message.toLowerCase())
// does not modify the original
console.log(message.replace("world", "you"))
// splits and returns array
console.log(message.split(" "))
console.log(message.substring(7, 12))
console.log(message.indexOf("world"))

// date
const today = new Date()
const myDate = new Date(2023, 11, 20, 24, 60, 60, 60);

console.log(today);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
// month starts from 0 and ends in 11 like array indexes.
console.log(today.getMonth());
console.log(myDate);










