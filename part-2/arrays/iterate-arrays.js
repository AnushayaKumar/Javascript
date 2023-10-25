let numbers = ["red", "blue", "green", "yellow"]

// 1
// for of
for (let number of numbers) {
    console.log(number);
}


// 2
// forEach
// through numbers and indexes
numbers.forEach((number, index) => console.log(number, index));
// through numbers
numbers.forEach(number => console.log(number));


// 3
// for in through indexes
for (let index in numbers) {
    console.log(index);
}