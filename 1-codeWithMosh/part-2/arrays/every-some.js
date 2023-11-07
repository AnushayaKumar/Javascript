// introduced in ES6
// every()-checks if all elements in the array matches the condition
// some()-checks if atleast one matches the condition

array = [1, 4, 2, 6, 8, 7, 0];

console.log(array.every((value) => value > 0))

console.log(array.some((value) => value > 0))

